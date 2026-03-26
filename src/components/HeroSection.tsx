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

// Configuração das redes sociais com cores modernas
const socialLinks = [
  { icon: <Facebook size={32} />, url: "https://www.facebook.com/hctechcelulareinfo", color: "hover:text-[#1877F2] hover:drop-shadow-[0_0_10px_#1877F2]" },
  { icon: <Instagram size={32} />, url: "https://www.instagram.com/hctechinfocell/", color: "hover:text-[#E4405F] hover:drop-shadow-[0_0_10px_#E4405F]" },
  { icon: <Twitter size={32} />, url: "https://x.com/HUnlockbr", color: "hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]" },
  { icon: <Send size={32} />, url: "https://t.me/Hunlockbr", color: "hover:text-[#24A1DE] hover:drop-shadow-[0_0_10px_#24A1DE]" },
  { icon: <Youtube size={32} />, url: "https://www.youtube.com/channel/UCeF0ILTAnUUBV1TdEteyICA", color: "hover:text-[#FF0000] hover:drop-shadow-[0_0_10px_#FF0000]" },
  { icon: <Globe size={32} />, url: "https://hctechinfocell.blogspot.com/", color: "hover:text-[#ff5722] hover:drop-shadow-[0_0_10px_#ff5722]" },
  { icon: <LinkIcon size={32} />, url: "https://linktr.ee/hctechcell", color: "hover:text-[#43ee62] hover:drop-shadow-[0_0_10px_#43ee62]" },
];

const techBrands = [
  "APPLE", "SAMSUNG", "XIAOMI", "MOTOROLA", "REPARO DE PLACAS", 
  "MICRO-SOLDA", "SOFTWARE", "INFRAESTRUTURA", "SÃO BERNARDO DO CAMPO"
];

const HeroSection = () => {
  return (
    <section className="relative bg-black pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* REDES SOCIAIS CENTRALIZADAS E GRANDES */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-10 mb-20"
        >
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-zinc-700 transition-all duration-300 transform hover:scale-125 ${social.color}`}
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
            Soluções avançadas em tecnologia e manutenção de alta precisão[cite: 1].
          </p>
        </div>

        {/* VITRINE TECH (CARROSSEL MUITO LENTO) */}
        <div className="relative mt-10 border-y border-zinc-900 py-12 bg-zinc-900/5">
          <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div 
              animate={{ x: ["0%", "-100%"] }}
              transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 60 // Velocidade reduzida para 60 segundos
              }}
              className="flex gap-24 items-center px-12"
            >
              {[...techBrands, ...techBrands].map((brand, index) => (
                <span 
                  key={index} 
                  className="text-5xl md:text-7xl font-black italic text-zinc-900 hover:text-green-500/50 transition-colors"
                >
                  {brand}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
