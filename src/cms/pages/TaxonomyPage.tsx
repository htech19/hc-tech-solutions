import { useState } from "react";
import { store, Category, Tag, uid, slugify } from "@/cms/store";
import { Plus, Trash2 } from "lucide-react";

type Item = Category | Tag;

interface Props {
  kind: "category" | "tag";
}

export default function TaxonomyPage({ kind }: Props) {
  const label = kind === "category" ? "Categoria" : "Tag";
  const labelPlural = kind === "category" ? "Categorias" : "Tags";

  const [items, setItems] = useState<Item[]>(
    kind === "category" ? store.getCategories() : store.getTags()
  );
  const [name, setName] = useState("");

  const refresh = () =>
    setItems(kind === "category" ? store.getCategories() : store.getTags());

  const add = () => {
    const trimmed = name.trim();
    if (!trimmed) return;
    const item: Item = { id: uid(), name: trimmed, slug: slugify(trimmed) };
    if (kind === "category") store.saveCategory(item);
    else store.saveTag(item);
    setName("");
    refresh();
  };

  const remove = (id: string) => {
    if (!confirm(`Excluir esta ${label.toLowerCase()}?`)) return;
    if (kind === "category") store.deleteCategory(id);
    else store.deleteTag(id);
    refresh();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">{labelPlural}</h1>
        <p className="text-sm text-slate-400">Organize seu conteúdo.</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 flex gap-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder={`Nova ${label.toLowerCase()}`}
          className="flex-1 bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-sm"
        />
        <button
          onClick={add}
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-3 py-2 rounded-md"
        >
          <Plus size={16} /> Adicionar
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
        {items.length === 0 ? (
          <p className="p-6 text-center text-slate-500 text-sm">
            Nenhuma {label.toLowerCase()} cadastrada.
          </p>
        ) : (
          <ul>
            {items.map((it) => (
              <li
                key={it.id}
                className="flex items-center justify-between px-4 py-2 border-t first:border-t-0 border-slate-800"
              >
                <div>
                  <div className="text-sm">{it.name}</div>
                  <div className="text-xs text-slate-500">/{it.slug}</div>
                </div>
                <button
                  onClick={() => remove(it.id)}
                  className="text-slate-400 hover:text-red-400 p-1"
                  aria-label="Excluir"
                >
                  <Trash2 size={14} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
