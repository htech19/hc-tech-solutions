import { useState } from "react";
import { Search, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { peliculas } from "@/data/peliculas-data";

const FilmsTable = () => {
  const [search, setSearch] = useState("");

  const filtered = peliculas.filter(
    (f) =>
      f.model.toLowerCase().includes(search.toLowerCase()) ||
      f.compat.toLowerCase().includes(search.toLowerCase())
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
            Tabela de <span className="text-primary">Compatibilidade</span>
          </h2>
          <p className="text-muted-foreground">
            Encontre a película ideal — busque seu modelo e veja os compatíveis.
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {peliculas.length} aparelhos cadastrados
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="relative mb-6">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por modelo (ex: iPhone 14, Galaxy A54, Moto G52...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-xl py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm transition-all"
            />
          </div>

          {/* Results count */}
          {search && (
            <p className="text-sm text-muted-foreground mb-4">
              {filtered.length} resultado(s) encontrado(s)
            </p>
          )}

          {/* Cards list */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-12 text-muted-foreground bg-card rounded-xl border border-border">
                <Smartphone size={32} className="mx-auto mb-3 opacity-50" />
                <p className="text-sm">Nenhum modelo encontrado para sua busca.</p>
              </div>
            ) : (
              (search ? filtered : filtered.slice(0, 20)).map((f, i) => (
                <motion.div
                  key={`${f.model}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                  className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Smartphone size={16} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-sm md:text-base">
                        {f.model}
                      </h3>
                      <p className="text-muted-foreground text-xs md:text-sm mt-1">
                        <span className="text-primary font-medium">Serve em:</span>{" "}
                        {f.compat}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Show more hint */}
          {!search && filtered.length > 20 && (
            <p className="text-center text-sm text-muted-foreground mt-6">
              Mostrando 20 de {filtered.length} modelos. Use a busca para encontrar seu aparelho.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default FilmsTable;
