import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";

const techBrands = [
  "APPLE", "SAMSUNG", "XIAOMI", "MOTOROLA", "ASUS", 
  "REPARO DE PLACAS", "MICRO-SOLDA", "SOFTWARE", "INFRAESTRUTURA"
];

const HeroSection = () => {
  return (
    <section className="relative bg-black pt-32 pb-20 overflow-hidden">
      {/* BARRA SUPERIOR COM REDES SOCIAIS */}
      <div className="absolute top-0 left-0 w-full bg-green-500 py-2 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-black font-black italic text-xs">
          <span>SUPORTE ESPECIALIZADO</span>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" className="hover:scale-125 transition-transform">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/5511999999999" target="_blank" className="hover:scale-125 transition-transform">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black italic text-white mb-4 tracking-tighter"
          >
            DESTAQUES <span className="text-green-500 text-stroke">HC TECH</span>
          </motion.h1>
          <p className="text-zinc-500 max-w-2xl mx-auto font-medium">
            Sua vitrine tecnológica em São Bernardo do Campo. Do hardware ao software, a solução completa para o seu dispositivo.
          </p>
        </div>

        {/* VITRINE TECH (CARROSSEL) */}
        <div className="relative mt-10 border-y border-zinc-800 py-8 bg-zinc-900/20">
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div 
              animate={{ x: ["0%", "-100%"] }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 40 // Aumentado de 20 para 40 para ficar bem mais lento
              }}
              className="flex gap-20 items-center px-10"
            >
              {[...techBrands, ...techBrands].map((brand, index) => (
                <span 
                  key={index} 
                  className="text-4xl md:text-6xl font-black italic text-zinc-700 hover:text-green-500 transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Efeito de luz de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default HeroSection;
