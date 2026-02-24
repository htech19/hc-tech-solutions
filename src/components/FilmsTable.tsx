import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const films = [
  { model: "iPhone 15 Pro Max", tipo: "Cerâmica Fosca", preco: "R$ 45,00" },
  { model: "iPhone 15 Pro", tipo: "Cerâmica Fosca", preco: "R$ 45,00" },
  { model: "iPhone 14", tipo: "Vidro Temperado", preco: "R$ 30,00" },
  { model: "iPhone 13", tipo: "Vidro Temperado", preco: "R$ 30,00" },
  { model: "Samsung S24 Ultra", tipo: "Hidrogel", preco: "R$ 40,00" },
  { model: "Samsung S24+", tipo: "Hidrogel", preco: "R$ 40,00" },
  { model: "Samsung S23", tipo: "Vidro Temperado", preco: "R$ 30,00" },
  { model: "Samsung A54", tipo: "Vidro Temperado", preco: "R$ 25,00" },
  { model: "Samsung A34", tipo: "Vidro Temperado", preco: "R$ 25,00" },
  { model: "Motorola Edge 40", tipo: "Hidrogel", preco: "R$ 35,00" },
  { model: "Motorola G84", tipo: "Vidro Temperado", preco: "R$ 25,00" },
  { model: "Xiaomi 14 Ultra", tipo: "Cerâmica", preco: "R$ 40,00" },
  { model: "Xiaomi Redmi Note 13", tipo: "Vidro Temperado", preco: "R$ 25,00" },
  { model: "Poco X6 Pro", tipo: "Vidro Temperado", preco: "R$ 25,00" },
];

const FilmsTable = () => {
  const [search, setSearch] = useState("");

  const filtered = films.filter(
    (f) =>
      f.model.toLowerCase().includes(search.toLowerCase()) ||
      f.tipo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="peliculas" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Tabela de <span className="text-primary">Películas</span>
          </h2>
          <p className="text-muted-foreground">Encontre a película ideal para seu aparelho.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="relative mb-6">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por modelo ou tipo..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-xl py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm transition-all"
            />
          </div>

          {/* Table */}
          <div className="rounded-xl border border-border overflow-hidden shadow-sm bg-card">
            <table className="w-full">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-primary">Modelo</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-primary">Tipo</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-primary">Preço</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="text-center py-8 text-muted-foreground text-sm">
                      Nenhum resultado encontrado.
                    </td>
                  </tr>
                ) : (
                  filtered.map((f, i) => (
                    <tr
                      key={f.model}
                      className={`border-t border-border transition-colors hover:bg-primary/5 ${
                        search && filtered.length <= 3 ? "bg-primary/5" : ""
                      }`}
                    >
                      <td className="py-3 px-4 text-sm text-foreground">{f.model}</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">{f.tipo}</td>
                      <td className="py-3 px-4 text-sm text-primary font-semibold text-right">{f.preco}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmsTable;
