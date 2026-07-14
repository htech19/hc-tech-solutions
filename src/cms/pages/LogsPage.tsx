import { useState } from "react";
import { store } from "@/cms/store";
import { Trash2 } from "lucide-react";

export default function LogsPage() {
  const [logs, setLogs] = useState(store.getLogs());

  const clear = () => {
    if (!confirm("Limpar todos os logs?")) return;
    store.clearLogs();
    setLogs([]);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Logs</h1>
          <p className="text-sm text-slate-400">Auditoria de ações no painel.</p>
        </div>
        <button
          onClick={clear}
          className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-red-400 px-3 py-2"
        >
          <Trash2 size={14} /> Limpar
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
        {logs.length === 0 ? (
          <p className="p-6 text-center text-slate-500 text-sm">Nenhum log ainda.</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-slate-950/50 text-slate-400">
              <tr>
                <th className="text-left px-4 py-2 font-medium">Data</th>
                <th className="text-left px-4 py-2 font-medium">Usuário</th>
                <th className="text-left px-4 py-2 font-medium">Ação</th>
                <th className="text-left px-4 py-2 font-medium hidden md:table-cell">Alvo</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((l) => (
                <tr key={l.id} className="border-t border-slate-800">
                  <td className="px-4 py-2 text-slate-400 whitespace-nowrap">
                    {new Date(l.at).toLocaleString()}
                  </td>
                  <td className="px-4 py-2">{l.actor}</td>
                  <td className="px-4 py-2 text-emerald-400">{l.action}</td>
                  <td className="px-4 py-2 text-slate-400 hidden md:table-cell">
                    {l.target ?? "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
