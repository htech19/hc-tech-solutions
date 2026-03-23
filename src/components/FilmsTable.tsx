import { useState, useMemo } from "react";
import { Search, Smartphone, Cpu, Zap, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { peliculas } from "@/data/peliculas";
import { Link } from "react-router-dom";

const FilmsTable = () => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return peliculas;
    const q = search.toLowerCase();
    return peliculas.filter(
      (f) =>
      f.model.toLowerCase().includes(q) ||
      f.compat.toLowerCase().includes(q) ||
      f.busca.some((b) => b.includes(q))
    );
  }, [search]);

  return (
    <section id="peliculas" className="py-20 md:py-28 relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-4">
            <Cpu size={13} className="animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
            Tabela de <span className="text-primary glow-green-text">Compatibilidade de Peliculas</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Encontre a película ideal — <span className="text-primary font-semibold">{peliculas.length}+</span> modelos cadastrados.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="relative group mb-6">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <div className="relative flex items-center bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
              <Search size={18} className="ml-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar por modelo (ex: iPhone 14, Galaxy A54, Moto G52...)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent py-3.5 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none" />
              
              {search &&
              <button onClick={() => setSearch("")} className="mr-3 text-xs text-muted-foreground hover:text-foreground">
                  Limpar
                </button>
              }
            </div>
          </div>

          {/* Results count */}
          {search &&
          <div className="flex items-center gap-2 mb-4">
              <Zap size={14} className="text-primary" />
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">{filtered.length}</span> resultado(s)
              </p>
            </div>
          }

          {/* Cards list */}
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filtered.length === 0 ?
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-muted-foreground bg-card rounded-2xl border border-border">
                
                  <Smartphone size={32} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Nenhum modelo encontrado para sua busca.</p>
                </motion.div> :

              (search ? filtered : filtered.slice(0, 20)).map((f, i) =>
              <motion.div
                key={`${f.model}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.015 }}
                layout
                className="group bg-card border border-border rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Smartphone size={16} className="text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-bold text-foreground text-sm md:text-base">{f.model}</h3>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                            {f.marca}
                          </span>
                        </div>
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {f.compatList.map((c, ci) =>
                      <span key={ci} className="text-xs px-2 py-0.5 rounded-md bg-primary/8 text-primary/90 border border-primary/10 font-medium">
                              {c}
                            </span>
                      )}
                        </div>
                      </div>
                    </div>

                    {/* Hover action */}
                    <div className="mt-2 pt-2 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                    href={`https://wa.me/5511940562933?text=Olá! Preciso de película para ${f.model}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                    
                        <MessageCircle size={12} />
                        Pedir orçamento
                      </a>
                    </div>
                  </motion.div>
              )
              }
            </AnimatePresence>
          </div>

          {/* Show more */}
          {!search && filtered.length > 20 &&
          <div className="text-center mt-8">
              <Link
              to="/peliculas"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:brightness-110 active:scale-95 transition-all duration-300 glow-green">
              
                Ver todos os {filtered.length} modelos
              </Link>
            </div>
          }
        </div>
      </div>
    </section>);

};

export default FilmsTable;