import { useState, useMemo } from "react";
import { Search, Smartphone, ArrowLeft, Cpu, Zap, Instagram, MessageCircle, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { peliculas } from "@/data/peliculas";
import { Link } from "react-router-dom";

// ── PALETA HC TECH ─────────────────────────────────────────────
const C = {
  green:      "#00A651",
  silver:     "#C0C2C0",
  bg:         "#1A1A1A",
  card:       "#222222",
  border:     "rgba(192,194,192,0.12)",
  muted:      "#6B7280",
  foreground: "#F3F4F6",
  greenDim:   "rgba(0,166,81,0.10)",
  greenGlow:  "0 0 24px rgba(0,166,81,0.45)",
};
// ───────────────────────────────────────────────────────────────

const brandColors: Record<string, string> = {
  Apple:    "from-[#3a3a3a] to-[#555]",
  Samsung:  "from-[#1a3a8f] to-[#2a5ac0]",
  Motorola: "from-[#0e6e8c] to-[#12a0b0]",
  Xiaomi:   "from-[#e05a00] to-[#f07a20]",
  Realme:   "from-[#c49000] to-[#e0b020]",
  Poco:     "from-[#c49000] to-[#b06010]",
  Redmi:    "from-[#b02020] to-[#d04030]",
  LG:       "from-[#902040] to-[#c03060]",
  Asus:     "from-[#204080] to-[#3060a0]",
  Oppo:     "from-[#107050] to-[#189070]",
  Lenovo:   "from-[#a02020] to-[#c03030]",
};

const getBrandGradient = (marca: string) =>
  brandColors[marca] || "from-[#00A651] to-[#007a3d]";

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
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: C.bg }}
    >
      {/* Grid sutil de fundo */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${C.green} 1px, transparent 1px), linear-gradient(90deg, ${C.green} 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="fixed top-20 -left-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(0,166,81,0.06)" }} />
      <div className="fixed bottom-20 -right-32 w-96 h-96 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(0,166,81,0.06)" }} />

      {/* ── HEADER ── */}
      <header
        className="sticky top-0 z-50 backdrop-blur-xl"
        style={{
          background: "rgba(26,26,26,0.85)",
          borderBottom: `1px solid ${C.border}`,
        }}
      >
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: C.muted }}
              onMouseEnter={e => (e.currentTarget.style.color = C.green)}
              onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
            >
              <ArrowLeft size={18} />
              Voltar
            </Link>
            <div className="h-5 w-px" style={{ background: C.border }} />
            <span className="text-lg font-extrabold">
              <span style={{ color: C.green }}>HC</span>
              <span style={{ color: C.silver }}> Tech</span>
            </span>
          </div>

          {/* Social buttons */}
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/55119405629339?text=Olá! Vi a tabela de compatibilidade e gostaria de um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
              style={{ background: C.greenDim, color: C.green, border: `1px solid rgba(0,166,81,0.2)` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = C.green;
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = C.greenDim;
                (e.currentTarget as HTMLAnchorElement).style.color = C.green;
              }}
            >
              <MessageCircle size={14} />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <a
              href="https://instagram.com/hctechinfocell"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
              style={{ background: C.greenDim, color: C.green, border: `1px solid rgba(0,166,81,0.2)` }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = C.green;
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = C.greenDim;
                (e.currentTarget as HTMLAnchorElement).style.color = C.green;
              }}
            >
              <Instagram size={14} />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 md:py-16 relative z-10">

        {/* ── HERO TITLE ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              background: C.greenDim,
              border: `1px solid rgba(0,166,81,0.25)`,
              color: C.green,
            }}
          >
            <Cpu size={14} className="animate-pulse" />
            Powered by I.A. — Busca Inteligente
          </div>

          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
            style={{ color: C.foreground }}
          >
            Tabela de{" "}
            <span style={{ color: C.green }}>Compatibilidade</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base" style={{ color: C.muted }}>
            Encontre a película ideal para o seu aparelho. Nossa base inteligente cruza dados de{" "}
            <span style={{ color: C.green, fontWeight: 600 }}>{peliculas.length}+</span> modelos em tempo real.
          </p>
        </motion.div>

        {/* ── SEARCH ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mb-6"
        >
          <div className="relative group">
            <div
              className="absolute -inset-0.5 rounded-2xl blur-sm opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"
              style={{ background: `linear-gradient(to right, rgba(0,166,81,0.4), rgba(0,166,81,0.1))` }}
            />
            <div
              className="relative flex items-center rounded-2xl shadow-sm overflow-hidden"
              style={{ background: C.card, border: `1px solid ${C.border}` }}
            >
              <Search size={20} className="ml-4 flex-shrink-0" style={{ color: C.muted }} />
              <input
                type="text"
                placeholder="Digite o modelo do seu celular..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent py-4 px-3 text-sm focus:outline-none"
                style={{ color: C.foreground }}
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="mr-3 px-2 py-1 text-xs transition-colors"
                  style={{ color: C.muted }}
                  onMouseEnter={e => (e.currentTarget.style.color = C.foreground)}
                  onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* ── BRAND FILTER CHIPS ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {/* Todos */}
            <button
              onClick={() => setSelectedBrand(null)}
              className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
              style={
                !selectedBrand
                  ? { background: C.green, color: "#fff", boxShadow: C.greenGlow }
                  : { background: C.card, border: `1px solid ${C.border}`, color: C.muted }
              }
            >
              Todos
            </button>
            {allBrands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300"
                style={
                  selectedBrand === brand
                    ? { background: C.green, color: "#fff", boxShadow: C.greenGlow }
                    : { background: C.card, border: `1px solid ${C.border}`, color: C.muted }
                }
              >
                {brand}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── RESULTS COUNTER ── */}
        {(search || selectedBrand) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto mb-4 flex items-center gap-2"
          >
            <Zap size={14} style={{ color: C.green }} />
            <span className="text-sm" style={{ color: C.muted }}>
              <span style={{ color: C.foreground, fontWeight: 600 }}>{filtered.length}</span> resultado(s) encontrado(s)
            </span>
          </motion.div>
        )}

        {/* ── CARDS ── */}
        <div className="max-w-2xl mx-auto space-y-3">
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 rounded-2xl"
                style={{ background: C.card, border: `1px solid ${C.border}`, color: C.muted }}
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
                  className="group rounded-2xl p-4 md:p-5 shadow-sm transition-all duration-300"
                  style={{ background: C.card, border: `1px solid ${C.border}` }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,166,81,0.35)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 24px rgba(0,0,0,0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = C.border;
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${getBrandGradient(f.marca)} flex items-center justify-center flex-shrink-0 shadow-sm`}
                    >
                      <Smartphone size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="font-bold text-sm md:text-base" style={{ color: C.foreground }}>
                          {f.model}
                        </h2>
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{ background: "#2a2a2a", color: C.silver }}
                        >
                          {f.marca}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {f.compatList.map((c, ci) => (
                          <span
                            key={ci}
                            className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg font-medium"
                            style={{
                              background: "rgba(0,166,81,0.08)",
                              color: C.green,
                              border: "1px solid rgba(0,166,81,0.15)",
                            }}
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quick action (hover) */}
                  <div
                    className="flex items-center gap-2 mt-3 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ borderTop: `1px solid ${C.border}` }}
                  >
                    <a
                      href={`https://wa.me/5511940562933?text=Olá! Preciso de película para ${f.model}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs hover:underline"
                      style={{ color: C.green }}
                    >
                      <MessageCircle size={12} />
                      Solicitar orçamento
                    </a>
                    <span style={{ color: C.border }}>•</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(`${f.model} — Compatível com: ${f.compat}`)}
                      className="flex items-center gap-1.5 text-xs transition-colors"
                      style={{ color: C.muted }}
                      onMouseEnter={e => (e.currentTarget.style.color = C.foreground)}
                      onMouseLeave={e => (e.currentTarget.style.color = C.muted)}
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
            className="text-center text-sm mt-10"
            style={{ color: C.muted }}
          >
            Mostrando 30 de{" "}
            <span style={{ color: C.green, fontWeight: 600 }}>{filtered.length}</span>{" "}
            modelos. Use a busca ou filtre por marca.
          </motion.p>
        )}

        {/* ── CTA SOCIAL ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-16"
        >
          <div
            className="rounded-2xl p-6 md:p-8 text-center relative overflow-hidden"
            style={{ background: C.card, border: `1px solid ${C.border}` }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(0,166,81,0.06) 0%, transparent 60%)" }}
            />
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: C.foreground }}>
                Não encontrou seu modelo?
              </h3>
              <p className="text-sm mb-6" style={{ color: C.muted }}>
                Fale com a gente! Temos milhares de películas em estoque.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://wa.me/5511950562933?text=Olá! Preciso de ajuda para encontrar minha película."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: C.green,
                    color: "#fff",
                    boxShadow: C.greenGlow,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 40px rgba(0,166,81,0.7)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = C.greenGlow;
                  }}
                >
                  <MessageCircle size={18} />
                  Chamar no WhatsApp
                </a>
                <a
                  href="https://instagram.com/hctechinfocell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95"
                  style={{
                    background: "transparent",
                    color: C.green,
                    border: `2px solid rgba(0,166,81,0.35)`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = C.greenDim;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                  }}
                >
                  <Instagram size={18} />
                  Seguir no Instagram
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* ── FOOTER ── */}
      <footer
        className="py-6 mt-12"
        style={{ borderTop: `1px solid ${C.border}` }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs" style={{ color: C.muted }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: C.green }}>HC Tech</span>
            {" "}— Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PeliculasPage;
