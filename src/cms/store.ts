// Simple localStorage-backed CMS store (mock, no backend).
export type Post = {
  id: string;
  title: string;
  slug: string;
  status: "draft" | "published";
  categoryId?: string;
  tagIds: string[];
  excerpt: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};
export type Category = { id: string; name: string; slug: string };
export type Tag = { id: string; name: string; slug: string };
export type Settings = {
  siteName: string;
  siteDescription: string;
  postsPerPage: number;
};
export type LogEntry = {
  id: string;
  at: string;
  actor: string;
  action: string;
  target?: string;
};

const K = {
  posts: "cms.posts",
  categories: "cms.categories",
  tags: "cms.tags",
  settings: "cms.settings",
  logs: "cms.logs",
  auth: "cms.auth",
};

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function write<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const uid = () =>
  Math.random().toString(36).slice(2, 10) + Date.now().toString(36);

export const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function addLog(entry: Omit<LogEntry, "id" | "at">) {
  const logs = read<LogEntry[]>(K.logs, []);
  const next: LogEntry = { id: uid(), at: new Date().toISOString(), ...entry };
  logs.unshift(next);
  write(K.logs, logs.slice(0, 500));
}

export const store = {
  // Posts
  getPosts: () => read<Post[]>(K.posts, []),
  savePost: (p: Post) => {
    const list = read<Post[]>(K.posts, []);
    const idx = list.findIndex((x) => x.id === p.id);
    if (idx >= 0) list[idx] = p;
    else list.unshift(p);
    write(K.posts, list);
    addLog({ actor: getUser() ?? "system", action: idx >= 0 ? "post.update" : "post.create", target: p.title });
  },
  deletePost: (id: string) => {
    const list = read<Post[]>(K.posts, []).filter((p) => p.id !== id);
    write(K.posts, list);
    addLog({ actor: getUser() ?? "system", action: "post.delete", target: id });
  },
  // Categories
  getCategories: () => read<Category[]>(K.categories, []),
  saveCategory: (c: Category) => {
    const list = read<Category[]>(K.categories, []);
    const idx = list.findIndex((x) => x.id === c.id);
    if (idx >= 0) list[idx] = c;
    else list.unshift(c);
    write(K.categories, list);
    addLog({ actor: getUser() ?? "system", action: idx >= 0 ? "category.update" : "category.create", target: c.name });
  },
  deleteCategory: (id: string) => {
    write(K.categories, read<Category[]>(K.categories, []).filter((c) => c.id !== id));
    addLog({ actor: getUser() ?? "system", action: "category.delete", target: id });
  },
  // Tags
  getTags: () => read<Tag[]>(K.tags, []),
  saveTag: (t: Tag) => {
    const list = read<Tag[]>(K.tags, []);
    const idx = list.findIndex((x) => x.id === t.id);
    if (idx >= 0) list[idx] = t;
    else list.unshift(t);
    write(K.tags, list);
    addLog({ actor: getUser() ?? "system", action: idx >= 0 ? "tag.update" : "tag.create", target: t.name });
  },
  deleteTag: (id: string) => {
    write(K.tags, read<Tag[]>(K.tags, []).filter((t) => t.id !== id));
    addLog({ actor: getUser() ?? "system", action: "tag.delete", target: id });
  },
  // Settings
  getSettings: (): Settings =>
    read<Settings>(K.settings, {
      siteName: "HC Tech CMS",
      siteDescription: "Painel de conteúdo",
      postsPerPage: 10,
    }),
  saveSettings: (s: Settings) => {
    write(K.settings, s);
    addLog({ actor: getUser() ?? "system", action: "settings.update" });
  },
  // Logs
  getLogs: () => read<LogEntry[]>(K.logs, []),
  clearLogs: () => write(K.logs, []),
};

// Mock auth (client-side only; not for real security)
export function login(user: string, pass: string): boolean {
  // Default demo credentials
  if (user === "admin" && pass === "admin") {
    localStorage.setItem(K.auth, JSON.stringify({ user, at: Date.now() }));
    addLog({ actor: user, action: "auth.login" });
    return true;
  }
  return false;
}
export function logout() {
  const u = getUser();
  localStorage.removeItem(K.auth);
  addLog({ actor: u ?? "unknown", action: "auth.logout" });
}
export function getUser(): string | null {
  try {
    const raw = localStorage.getItem(K.auth);
    if (!raw) return null;
    return (JSON.parse(raw) as { user: string }).user;
  } catch {
    return null;
  }
}
export const isAuthed = () => !!getUser();
