import { useState } from "react";
import { Search, Smartphone, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { peliculas } from "@/data/peliculas";
import { Link } from "react-router-dom";

const PeliculasPage = () => {
  const [search, setSearch] = useState("");

  const filtered = peliculas.filter(
    (f) =>
      f.model.toLowerCase().includes(search.toLowerCase()) ||
      f.compat.toLowerCase().includes(search.toLowerCase())
  );

  const results = search ? filtered : filtered.slice(0, 30);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center h-16 gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar
          </Link>
          <div className="h-5 w-px bg-border" />
          <span className="text-lg font-bold">
            <span className="text-primary">HC</span>
            <span className="text-foreground"> Tech</span>
          </span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Tabela de <span className="text-primary">Compatibilidade</span> de Películas
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Encontre a película ideal para o seu aparelho. Busque pelo modelo e veja quais películas são compatíveis.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            {peliculas.length} aparelhos cadastrados
          </p>
        </motion.div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Buscar por modelo (ex: iPhone 14, Galaxy A54, Moto G52...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-card border border-border rounded-xl py-3.5 pl-12 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 shadow-sm transition-all"
            />
          </div>

          {search && (
            <p className="text-sm text-muted-foreground mt-3">
              {filtered.length} resultado(s) encontrado(s)
            </p>
          )}
        </div>

        {/* Results */}
        <div className="max-w-2xl mx-auto space-y-3">
          {filtered.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground bg-card rounded-xl border border-border">
              <Smartphone size={40} className="mx-auto mb-4 opacity-40" />
              <p className="font-medium">Nenhum modelo encontrado.</p>
              <p className="text-sm mt-1">Tente buscar outro modelo ou marca.</p>
            </div>
          ) : (
            results.map((f, i) => (
              <motion.div
                key={`${f.model}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.015 }}
                className="bg-card border border-border rounded-xl p-4 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Smartphone size={18} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-semibold text-foreground text-sm md:text-base">
                      {f.model}
                    </h2>
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
        {!search && filtered.length > 30 && (
          <p className="text-center text-sm text-muted-foreground mt-8">
            Mostrando 30 de {filtered.length} modelos. Use a busca acima para encontrar seu aparelho.
          </p>
        )}
      </main>
    </div>
  );
};

export default PeliculasPage;
