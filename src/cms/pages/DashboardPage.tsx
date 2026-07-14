import { useMemo } from "react";
import { store } from "@/cms/store";
import { FileText, FolderTree, Tags, ScrollText } from "lucide-react";
import { Link } from "react-router-dom";

export default function DashboardPage() {
  const { posts, categories, tags, logs } = useMemo(
    () => ({
      posts: store.getPosts(),
      categories: store.getCategories(),
      tags: store.getTags(),
      logs: store.getLogs(),
    }),
    []
  );

  const cards = [
    { label: "Posts", value: posts.length, icon: FileText, to: "/admin/posts" },
    { label: "Categorias", value: categories.length, icon: FolderTree, to: "/admin/categorias" },
    { label: "Tags", value: tags.length, icon: Tags, to: "/admin/tags" },
    { label: "Logs", value: logs.length, icon: ScrollText, to: "/admin/logs" },
  ];

  const published = posts.filter((p) => p.status === "published").length;
  const drafts = posts.length - published;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-slate-400">Visão geral do conteúdo.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cards.map((c) => (
          <Link
            key={c.label}
            to={c.to}
            className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-emerald-600/50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase text-slate-400">{c.label}</span>
              <c.icon size={16} className="text-emerald-500" />
            </div>
            <div className="text-3xl font-bold mt-2">{c.value}</div>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <h2 className="font-semibold mb-3">Status dos posts</h2>
          <div className="flex gap-6 text-sm">
            <div>
              <div className="text-2xl font-bold text-emerald-400">{published}</div>
              <div className="text-slate-400">Publicados</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-300">{drafts}</div>
              <div className="text-slate-400">Rascunhos</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
          <h2 className="font-semibold mb-3">Atividade recente</h2>
          {logs.length === 0 ? (
            <p className="text-sm text-slate-500">Nenhuma atividade ainda.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {logs.slice(0, 5).map((l) => (
                <li key={l.id} className="flex justify-between gap-2 text-slate-300">
                  <span className="truncate">
                    <span className="text-emerald-400">{l.action}</span>
                    {l.target ? ` · ${l.target}` : ""}
                  </span>
                  <span className="text-slate-500 text-xs whitespace-nowrap">
                    {new Date(l.at).toLocaleTimeString()}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
