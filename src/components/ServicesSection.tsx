import { Smartphone, Apple, Laptop, Cpu, Monitor, HardDrive, Keyboard, MemoryStick, Wrench, Microscope, Zap, CircuitBoard, Shield } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  highlighted?: boolean;
  badge?: string;
  index: number;
}

const ServiceCard = ({ icon, title, items, highlighted, badge, index }: ServiceCardProps) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={fadeUp}
    className={`relative bg-card rounded-xl p-6 card-interactive ${
      highlighted ? "border-glow-strong" : "border-glow"
    }`}
  >
    {badge && (
      <span className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
        {badge}
      </span>
    )}
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">{icon}</div>
      <h3 className="text-lg font-bold text-foreground">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const services = [
  {
    icon: <Smartphone size={22} />,
    title: "Celulares Android",
    items: ["Troca de tela", "Troca de bateria", "Conector de carga", "Atualização de sistema"],
  },
  {
    icon: <Smartphone size={22} />,
    title: "iPhone",
    items: ["Tela original e premium", "Face ID", "Troca de bateria", "Problemas de placa"],
  },
  {
    icon: <Laptop size={22} />,
    title: "Notebooks — Reparos Básicos",
    items: ["Formatação", "Upgrade SSD", "Upgrade RAM", "Limpeza interna", "Troca de teclado", "Troca de tela"],
  },
  {
    icon: <Cpu size={22} />,
    title: "Notebooks — Reparos Avançados",
    items: ["Reparo em placa-mãe", "Reballing", "Troca de chipset", "Correção de curto", "Gravação de BIOS", "Análise com microscópio"],
    highlighted: true,
    badge: "Especializado",
  },
];

const ServicesSection = () => (
  <section id="servicos" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Nossos <span className="text-primary">Serviços</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Soluções completas para celulares e notebooks com qualidade garantida.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
