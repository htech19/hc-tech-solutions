import { MessageCircle, Smartphone, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// ─── IMAGENS (coloque os arquivos em src/assets/) ─────────────────────────────
//   src/assets/hero-bg.jpg        ← foto da placa/celular
//   src/assets/logo-hctech.png    ← sua logo HC Tech
// ──────────────────────────────────────────────────────────────────────────────
import heroBg from "@/assets/hero-bg.jpg";

const bgImage = heroBg;

const stats = [
  { value: "5K+", label: "Reparos" },
  { value: "98%", label: "Satisfação" },
  { value: "1h",  label: "Tempo Médio" },
];

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── FUNDO: foto da placa/celular ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* ── OVERLAY escuro sobre a foto ── */}
      <div className="absolute inset-0 bg-[#1A1A1A]/80" />

      {/* ── VINHETA nas bordas para profundidade ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#1A1A1A_100%)]" />

      {/* ── LINHAS de circuito decorativas (SVG inline) ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <line x1="0" y1="30%" x2="35%" y2="30%" stroke="#00A651" strokeWidth="1" />
        <line x1="35%" y1="30%" x2="35%" y2="50%" stroke="#00A651" strokeWidth="1" />
        <circle cx="35%" cy="50%" r="3" fill="#00A651" />
        <line x1="65%" y1="70%" x2="100%" y2="70%" stroke="#00A651" strokeWidth="1" />
        <line x1="65%" y1="50%" x2="65%" y2="70%" stroke="#00A651" strokeWidth="1" />
        <circle cx="65%" cy="50%" r="3" fill="#00A651" />
        <line x1="10%" y1="80%" x2="30%" y2="80%" stroke="#C0C2C0" strokeWidth="0.8" />
        <line x1="70%" y1="20%" x2="90%" y2="20%" stroke="#C0C2C0" strokeWidth="0.8" />
      </svg>

      {/* ── CONTEÚDO PRINCIPAL ── */}
      <div className="relative z-10 container mx-auto px-4 text-center py-32 flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase border"
            style={{
              color: "#00A651",
              borderColor: "#00A651",
              background: "rgba(0,166,81,0.08)",
              letterSpacing: "0.12em",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#00A651" }}
            />
            Assistência Técnica em SP
          </span>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4"
          style={{ fontFamily: "'Rajdhani', 'Oswald', sans-serif" }}
        >
          <span style={{ color: "#FFFFFF" }}>Reparos </span>
          <span style={{ color: "#00A651" }}>Rápidos</span>
          <br />
          <span style={{ color: "#C0C2C0" }}>Celulares</span>
          <span style={{ color: "#FFFFFF" }}> &amp; </span>
          <span style={{ color: "#C0C2C0" }}>Notebooks</span>
          <br />
          <span
            className="text-3xl md:text-4xl lg:text-5xl"
            style={{ color: "#FFFFFF" }}
          >
            em SP
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ color: "#9CA3AF" }}
        >
          Assistência técnica Especializada em smartphones, tablets e notebooks .
          <br />
          Atendimento rápido e <span style={{ color: "#C0C2C0" }}>garantia</span> em todos os serviços.
        </motion.p>

        {/* Botões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          {/* Primário */}
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "#00A651",
              color: "#FFFFFF",
              boxShadow: "0 0 24px rgba(0,166,81,0.45)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 40px rgba(0,166,81,0.7)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 0 24px rgba(0,166,81,0.45)";
            }}
          >
            <Smartphone size={18} />
            Solicitar Orçamento
          </a>

          {/* Secundário */}
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg text-base font-bold transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(192,194,192,0.08)",
              color: "#C0C2C0",
              border: "1.5px solid #C0C2C0",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(192,194,192,0.18)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(192,194,192,0.08)";
            }}
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex gap-10 md:gap-16 justify-center"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <span
                className="text-3xl md:text-4xl font-extrabold"
                style={{ color: "#00A651" }}
              >
                {s.value}
              </span>
              <span
                className="text-xs uppercase tracking-widest mt-1"
                style={{ color: "#9CA3AF" }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── SETA "scroll down" ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown
          size={28}
          className="animate-bounce"
          style={{ color: "#00A651" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
