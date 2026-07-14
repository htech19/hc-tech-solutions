import { useState } from "react";
import { store, Post, uid, slugify } from "@/cms/store";
import { Plus, Pencil, Trash2, X } from "lucide-react";

const empty = (): Post => ({
  id: uid(),
  title: "",
  slug: "",
  status: "draft",
  categoryId: undefined,
  tagIds: [],
  excerpt: "",
  content: "",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
});

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>(store.getPosts());
  const [editing, setEditing] = useState<Post | null>(null);
  const categories = store.getCategories();
  const tags = store.getTags();

  const refresh = () => setPosts(store.getPosts());

  const save = () => {
    if (!editing) return;
    const p: Post = {
      ...editing,
      slug: editing.slug || slugify(editing.title),
      updatedAt: new Date().toISOString(),
    };
    store.savePost(p);
    setEditing(null);
    refresh();
  };

  const remove = (id: string) => {
    if (confirm("Excluir este post?")) {
      store.deletePost(id);
      refresh();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Posts</h1>
          <p className="text-sm text-slate-400">Gerencie artigos do CMS.</p>
        </div>
        <button
          onClick={() => setEditing(empty())}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-3 py-2 rounded-md"
        >
          <Plus size={16} /> Novo post
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-950/50 text-slate-400">
            <tr>
              <th className="text-left px-4 py-2 font-medium">Título</th>
              <th className="text-left px-4 py-2 font-medium hidden md:table-cell">Categoria</th>
              <th className="text-left px-4 py-2 font-medium">Status</th>
              <th className="text-right px-4 py-2 font-medium">Ações</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-slate-500">
                  Nenhum post ainda.
                </td>
              </tr>
            )}
            {posts.map((p) => (
              <tr key={p.id} className="border-t border-slate-800">
                <td className="px-4 py-2">
                  <div className="font-medium">{p.title || "(sem título)"}</div>
                  <div className="text-xs text-slate-500">/{p.slug}</div>
                </td>
                <td className="px-4 py-2 hidden md:table-cell text-slate-400">
                  {categories.find((c) => c.id === p.categoryId)?.name ?? "—"}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={
                      p.status === "published"
                        ? "text-emerald-400 text-xs"
                        : "text-slate-400 text-xs"
                    }
                  >
                    {p.status === "published" ? "Publicado" : "Rascunho"}
                  </span>
                </td>
                <td className="px-4 py-2 text-right">
                  <button
                    className="text-slate-400 hover:text-white p-1"
                    onClick={() => setEditing(p)}
                    aria-label="Editar"
                  >
                    <Pencil size={14} />
                  </button>
                  <button
                    className="text-slate-400 hover:text-red-400 p-1"
                    onClick={() => remove(p.id)}
                    aria-label="Excluir"
                  >
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-slate-800">
              <h2 className="font-semibold">
                {store.getPosts().some((x) => x.id === editing.id) ? "Editar" : "Novo"} post
              </h2>
              <button onClick={() => setEditing(null)} className="text-slate-400 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="p-4 space-y-3">
              <label className="block">
                <span className="text-xs text-slate-400">Título</span>
                <input
                  value={editing.title}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      title: e.target.value,
                      slug: editing.slug || slugify(e.target.value),
                    })
                  }
                  className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-400">Slug</span>
                <input
                  value={editing.slug}
                  onChange={(e) => setEditing({ ...editing, slug: slugify(e.target.value) })}
                  className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm"
                />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block">
                  <span className="text-xs text-slate-400">Categoria</span>
                  <select
                    value={editing.categoryId ?? ""}
                    onChange={(e) =>
                      setEditing({ ...editing, categoryId: e.target.value || undefined })
                    }
                    className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="">—</option>
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs text-slate-400">Status</span>
                  <select
                    value={editing.status}
                    onChange={(e) =>
                      setEditing({ ...editing, status: e.target.value as Post["status"] })
                    }
                    className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm"
                  >
                    <option value="draft">Rascunho</option>
                    <option value="published">Publicado</option>
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="text-xs text-slate-400">Tags</span>
                <div className="mt-1 flex flex-wrap gap-2">
                  {tags.length === 0 && (
                    <span className="text-xs text-slate-500">Nenhuma tag cadastrada.</span>
                  )}
                  {tags.map((t) => {
                    const active = editing.tagIds.includes(t.id);
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() =>
                          setEditing({
                            ...editing,
                            tagIds: active
                              ? editing.tagIds.filter((x) => x !== t.id)
                              : [...editing.tagIds, t.id],
                          })
                        }
                        className={
                          "text-xs px-2 py-1 rounded border " +
                          (active
                            ? "bg-emerald-600/20 border-emerald-600 text-emerald-300"
                            : "border-slate-700 text-slate-300 hover:border-slate-500")
                        }
                      >
                        {t.name}
                      </button>
                    );
                  })}
                </div>
              </label>
              <label className="block">
                <span className="text-xs text-slate-400">Resumo</span>
                <textarea
                  value={editing.excerpt}
                  onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                  className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm h-20"
                />
              </label>
              <label className="block">
                <span className="text-xs text-slate-400">Conteúdo</span>
                <textarea
                  value={editing.content}
                  onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                  className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm h-40 font-mono"
                />
              </label>
            </div>
            <div className="p-4 border-t border-slate-800 flex justify-end gap-2">
              <button
                onClick={() => setEditing(null)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white"
              >
                Cancelar
              </button>
              <button
                onClick={save}
                disabled={!editing.title.trim()}
                className="px-3 py-2 text-sm rounded-md bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white font-semibold"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
