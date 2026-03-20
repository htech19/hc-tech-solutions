import { MessageCircle, FileText } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,20%,96%)] via-[hsl(210,14%,93%)] to-[hsl(210,11%,91%)]" />

      <div className="relative z-10 container mx-auto px-4 text-center py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-foreground"
        >
          Reparos Rápidos em{" "}
          <span className="text-primary">Celulares</span> e{" "}
          <span className="text-primary">Notebooks</span> em SP
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Especialistas em Android, iPhone e Reparos em Placa de
          Notebook.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contato"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold btn-hover glow-green"
          >
            <FileText size={18} />
            Solicitar Orçamento
          </a>
          <a
            href="https://wa.me/5511940562933?text=Olá! Gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-8 py-4 rounded-lg text-base font-semibold btn-hover hover:bg-primary/10"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
