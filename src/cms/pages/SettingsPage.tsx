import { useState } from "react";
import { store, Settings } from "@/cms/store";

export default function SettingsPage() {
  const [s, setS] = useState<Settings>(store.getSettings());
  const [saved, setSaved] = useState(false);

  const save = () => {
    store.saveSettings(s);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <h1 className="text-2xl font-bold">Configurações</h1>
        <p className="text-sm text-slate-400">Preferências gerais do CMS.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-4">
        <label className="block">
          <span className="text-xs text-slate-400">Nome do site</span>
          <input
            value={s.siteName}
            onChange={(e) => setS({ ...s, siteName: e.target.value })}
            className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm"
          />
        </label>
        <label className="block">
          <span className="text-xs text-slate-400">Descrição</span>
          <textarea
            value={s.siteDescription}
            onChange={(e) => setS({ ...s, siteDescription: e.target.value })}
            className="mt-1 w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm h-20"
          />
        </label>
        <label className="block">
          <span className="text-xs text-slate-400">Posts por página</span>
          <input
            type="number"
            min={1}
            max={100}
            value={s.postsPerPage}
            onChange={(e) => setS({ ...s, postsPerPage: Number(e.target.value) })}
            className="mt-1 w-32 bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm"
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            onClick={save}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-4 py-2 rounded-md"
          >
            Salvar
          </button>
          {saved && <span className="text-xs text-emerald-400">Salvo.</span>}
        </div>
      </div>
    </div>
  );
}
