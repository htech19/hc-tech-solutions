import { Smartphone, Laptop, Cpu } from "lucide-react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Tokens de cor — HC Tech brand
───────────────────────────────────────────── */
const brand = {
  green:       "#00A651",
  greenGlow:   "rgba(0, 166, 81, 0.15)",
  greenBorder: "rgba(0, 166, 81, 0.35)",
  greenHover:  "rgba(0, 166, 81, 0.55)",
  silver:      "#C0C2C0",
  silverMuted: "rgba(192, 194, 192, 0.55)",
  bg:          "#1A1A1A",
  card:        "#222222",
  cardHover:   "#262626",
  border:      "rgba(255,255,255,0.07)",
};

/* ─────────────────────────────────────────────
   Animações
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const headerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─────────────────────────────────────────────
   ServiceCard
───────────────────────────────────────────── */
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  highlighted?: boolean;
  badge?: string;
  index: number;
}

const ServiceCard = ({
  icon,
  title,
  items,
  highlighted,
  badge,
  index,
}: ServiceCardProps) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeUp}
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    style={{
      position: "relative",
      display: "flex",
      flexDirection: "column",
      borderRadius: "0.875rem",
      padding: "1.5rem",
      backgroundColor: brand.card,
      border: `1px solid ${highlighted ? brand.greenBorder : brand.border}`,
      boxShadow: highlighted
        ? `0 0 20px ${brand.greenGlow}, 0 4px 12px rgba(0,0,0,0.4)`
        : "0 2px 8px rgba(0,0,0,0.3)",
      transition: "border-color 150ms ease, box-shadow 150ms ease, background-color 150ms ease",
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderColor = highlighted ? brand.greenHover : brand.greenBorder;
      el.style.backgroundColor = brand.cardHover;
      if (highlighted)
        el.style.boxShadow = `0 0 28px ${brand.greenGlow}, 0 6px 16px rgba(0,0,0,0.5)`;
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderColor = highlighted ? brand.greenBorder : brand.border;
      el.style.backgroundColor = brand.card;
      el.style.boxShadow = highlighted
        ? `0 0 20px ${brand.greenGlow}, 0 4px 12px rgba(0,0,0,0.4)`
        : "0 2px 8px rgba(0,0,0,0.3)";
    }}
  >
    {/* Badge */}
    {badge && (
      <span
        style={{
          position: "absolute",
          top: "-0.75rem",
          right: "1rem",
          backgroundColor: brand.green,
          color: "#fff",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          padding: "0.2rem 0.75rem",
          borderRadius: "9999px",
          boxShadow: `0 0 10px ${brand.greenGlow}`,
        }}
      >
        {badge}
      </span>
    )}

    {/* Header */}
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
      <div
        style={{
          padding: "0.625rem",
          borderRadius: "0.5rem",
          backgroundColor: brand.greenGlow,
          color: brand.green,
          border: `1px solid ${brand.greenBorder}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: "0.9375rem",
          fontWeight: 600,
          color: "#ffffff",
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {title}
      </h3>
    </div>

    {/* Lista */}
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
      {items.map((item) => (
        <li
          key={item}
          style={{
            fontSize: "0.8125rem",
            color: brand.silverMuted,
            display: "flex",
            alignItems: "center",
            gap: "0.625rem",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: highlighted ? brand.green : "rgba(0,166,81,0.5)",
              flexShrink: 0,
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

/* ─────────────────────────────────────────────
   Dados
───────────────────────────────────────────── */
const services: Omit<ServiceCardProps, "index">[] = [
  {
    icon: <Smartphone size={20} />,
    title: "Celulares Android",
    items: [
      "Troca de tela",
      "Troca de bateria",
      "Conector de carga",
      "Atualização de sistema",
    ],
  },
  {
    icon: <Smartphone size={20} />,
    title: "iPhone",
    items: [
      "Tela original e premium",
      "Face ID",
      "Troca de bateria",
      "Problemas de placa",
    ],
  },
  {
    icon: <Laptop size={20} />,
    title: "Notebooks — Básico",
    items: [
      "Formatação",
      "Upgrade SSD",
      "Upgrade RAM",
      "Limpeza interna",
      "Troca de teclado",
      "Troca de tela",
    ],
  },
  {
    icon: <Cpu size={20} />,
    title: "Notebooks — Avançado",
    items: [
      "Reparo em placa-mãe",
      "Reballing",
      "Troca de chipset",
      "Correção de curto",
      "Gravação de BIOS",
      "Análise com microscópio",
    ],
    highlighted: true,
    badge: "Especializado",
  },
];

/* ─────────────────────────────────────────────
   ServicesSection
───────────────────────────────────────────── */
const ServicesSection = () => (
  <section
    id="servicos"
    style={{ backgroundColor: brand.bg, padding: "5rem 0" }}
  >
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>

      {/* Cabeçalho */}
      <motion.div
        variants={headerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ textAlign: "center", marginBottom: "3.5rem" }}
      >
        <h2
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#ffffff",
            marginBottom: "0.75rem",
            lineHeight: 1.2,
          }}
        >
          Nossos{" "}
          <span style={{ color: brand.green }}>Serviços</span>
        </h2>
        <p
          style={{
            color: brand.silverMuted,
            maxWidth: "36rem",
            margin: "0 auto",
            fontSize: "0.9375rem",
            lineHeight: 1.6,
          }}
        >
          Soluções completas para celulares e notebooks com qualidade garantida.
        </p>

        {/* Divisor decorativo verde com glow */}
        <div
          style={{
            width: "3rem",
            height: "2px",
            backgroundColor: brand.green,
            margin: "1.25rem auto 0",
            borderRadius: "2px",
            boxShadow: `0 0 8px ${brand.green}`,
          }}
        />
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>

    </div>
  </section>
);

export default ServicesSection;
