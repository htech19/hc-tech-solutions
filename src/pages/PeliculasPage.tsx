import { useState, useMemo } from "react";
import { Search, Smartphone, ArrowLeft, Cpu, Zap, Instagram, MessageCircle, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { peliculas } from "@/data/peliculas";
import { Link } from "react-router-dom";

const brandColors: Record<string, string> = {
  Apple: "from-[hsl(0,0%,20%)] to-[hsl(0,0%,35%)]",
  Samsung: "from-[hsl(220,80%,45%)] to-[hsl(220,70%,55%)]",
  Motorola: "from-[hsl(200,70%,40%)] to-[hsl(180,60%,45%)]",
  Xiaomi: "from-[hsl(25,90%,50%)] to-[hsl(35,90%,55%)]",
  Realme: "from-[hsl(45,90%,50%)] to-[hsl(40,85%,55%)]",
  Poco: "from-[hsl(45,90%,50%)] to-[hsl(30,80%,50%)]",
  Redmi: "from-[hsl(0,70%,50%)] to-[hsl(15,70%,55%)]",
  LG: "from-[hsl(340,60%,45%)] to-[hsl(350,55%,55%)]",
  Asus: "from-[hsl(210,60%,40%)] to-[hsl(220,50%,50%)]",
  Oppo: "from-[hsl(150,60%,40%)] to-[hsl(160,50%,50%)]",
  Lenovo: "from-[hsl(0,70%,45%)] to-[hsl(10,65%,50%)]",
};

const getBrandGradient = (marca: string) =>
  brandColors[marca] || "from-primary to-primary/70";

const allBrands = [...new Set(peliculas.map((p) => p.marca))].sort();

const PeliculasPage = () => {
  const [search, setSearch] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = peliculas;
    if (selectedBrand) list = list.filter((p) => p.marca === selectedBrand);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.model.toLowerCase().includes(q) ||
          p.compat.toLowerCase().includes(q) ||
          p.busca.some((b) => b.includes(q))
      );
    }
    return list;
  }, [search, selectedBrand]);

  const results = search || selectedBrand ? filtered : filtered.slice(0, 30);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Glow orbs */}
      <div className="fixed top-20 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-20 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-card/70 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
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

          {/* Social buttons header */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/5511999999999?text=Olá! Vi a tabela de compatibilidade e gostaria de um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/hctechinfocell"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Instagram size={14} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        {/* Hero title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-5">
            <Cpu size={14} className="animate-pulse" />
            Powered by I.A. — Busca Inteligente
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 leading-tight">
            Tabela de{" "}
            <span className="text-primary glow-green-text">Compatibilidade</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Encontre a película ideal para o seu aparelho. Nossa base inteligente cruza dados de{" "}
            <span className="text-primary font-semibold">{peliculas.length}+</span> modelos em tempo real.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary/10 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-card border border-border rounded-2xl shadow-sm overflow-hidden">
              <Search size={20} className="ml-4 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                placeholder="Digite o modelo do seu celular..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent py-4 px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="mr-3 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Brand filter chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedBrand(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                !selectedBrand
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
              }`}
            >
              Todos
            </button>
            {allBrands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  selectedBrand === brand
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results counter */}
        {(search || selectedBrand) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto mb-4 flex items-center gap-2"
          >
            <Zap size={14} className="text-primary" />
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-semibold">{filtered.length}</span> resultado(s) encontrado(s)
            </span>
          </motion.div>
        )}

        {/* Results */}
        <div className="max-w-2xl mx-auto space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 text-muted-foreground bg-card rounded-2xl border border-border"
              >
                <Smartphone size={40} className="mx-auto mb-4 opacity-30" />
                <p className="font-medium">Nenhum modelo encontrado.</p>
                <p className="text-sm mt-1">Tente buscar outro modelo ou marca.</p>
              </motion.div>
            ) : (
              results.map((f, i) => (
                <motion.div
                  key={`${f.model}-${i}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ delay: i * 0.012 }}
                  layout
                  className="group bg-card border border-border rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getBrandGradient(f.marca)} flex items-center justify-center flex-shrink-0 shadow-sm`}
                    >
                      <Smartphone size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="font-bold text-foreground text-sm md:text-base">
                          {f.model}
                        </h2>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                          {f.marca}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {f.compatList.map((c, ci) => (
                          <span
                            key={ci}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-primary/8 text-primary/90 border border-primary/10 font-medium"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick action */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={`https://wa.me/5511999999999?text=Olá! Preciso de película para ${f.model}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-primary hover:underline"
                    >
                      <MessageCircle size={12} />
                      Solicitar orçamento
                    </a>
                    <span className="text-border">•</span>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(`${f.model} — Compatível com: ${f.compat}`);
                      }}
                      className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Share2 size={12} />
                      Copiar
                    </button>
                  </div>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* Show more hint */}
        {!search && !selectedBrand && filtered.length > 30 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-sm text-muted-foreground mt-10"
          >
            Mostrando 30 de{" "}
            <span className="text-primary font-semibold">{filtered.length}</span>{" "}
            modelos. Use a busca ou filtre por marca.
          </motion.p>
        )}

        {/* CTA Social Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16"
        >
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                Não encontrou seu modelo?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Fale com a gente! Temos milhares de películas em estoque.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/5511999999999?text=Olá! Preciso de ajuda para encontrar minha película."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 glow-green"
                >
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </a>
                <a
                  href="https://instagram.com/hctechinfocell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-card border-2 border-primary/30 text-primary font-semibold text-sm hover:bg-primary/10 active:scale-95 transition-all duration-300"
                >
                  <Instagram size={18} />
                  Seguir no Instagram
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} HC Tech — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PeliculasPage;
