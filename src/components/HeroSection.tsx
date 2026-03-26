import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Send, 
  Youtube, 
  Globe, 
  Link as LinkIcon, 
  Twitter
} from "lucide-react";

const socialLinks = [
  { icon: <Facebook size={28} />, url: "https://www.facebook.com/hctechcelulareinfo", color: "hover:text-blue-500" },
  { icon: <Instagram size={28} />, url: "https://www.instagram.com/hctechinfocell/", color: "hover:text-pink-500" },
  { icon: <Send size={28} />, url: "https://t.me/Hunlockbr", color: "hover:text-sky-400" },
  { icon: <Youtube size={28} />, url: "https://www.youtube.com/channel/UCeF0ILTAnUUBV1TdEteyICA", color: "hover:text-red-600" },
  { icon: <Globe size={28} />, url: "https://hctechinfocell.blogspot.com/", color: "hover:text-orange-500" },
  { icon: <LinkIcon size={28} />, url: "https://linktr.ee/hctechcell", color: "hover:text-green-400" },
  { icon: <Twitter size={28} />, url: "https://x.com/HUnlockbr", color: "hover:text-zinc-300" },
];

const techBrands = [
  "APPLE", "SAMSUNG", "XIAOMI", "MOTOROLA", "REPARO DE PLACAS", 
  "MICRO-SOLDA", "SOFTWARE", "INFRAESTRUTURA", "SÃO BERNARDO DO CAMPO"
];

const HeroSection = () => {
  return (
    <section className="relative bg-black pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* REDES SOCIAIS MODERNAS - NO TOPO CENTRALIZADAS */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-8 mb-16"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-zinc-500 transition-all duration-300 transform hover:scale-125 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black italic text-white mb-4 tracking-tighter"
          >
            DESTAQUES <span className="text-green-500">HC TECH</span>
          </motion.h1>
          <p className="text-zinc-500 max-w-2xl mx-auto font-medium text-lg">
            Soluções avançadas em tecnologia e manutenção de alta precisão.
          </p>
        </div>

        {/* VITRINE TECH (CARROSSEL LENTO) */}
        <div className="relative mt-10 border-y border-zinc-800 py-10 bg-zinc-900/10">
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div 
              animate={{ x: ["0%", "-100%"] }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 50 // Bem lento para facilitar a leitura
              }}
              className="flex gap-20 items-center px-10"
            >
              {[...techBrands, ...techBrands].map((brand, index) => (
                <span 
                  key={index} 
                  className="text-4xl md:text-6xl font-black italic text-zinc-800 hover:text-green-500 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Luz de fundo para destaque */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default HeroSection;
