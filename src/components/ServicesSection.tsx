import { motion } from "framer-motion";
import { Smartphone, Monitor, Tablet, Cpu, Zap, ShieldCheck, Microscope, HardDrive } from "lucide-react";

const services = [
  {
    title: "Micro-Soldagem Avançada",
    description: "Reparo especializado em placas-mãe de iPhone e Android. Recuperação de aparelhos condenados, falhas de carga (Tristar/Tigris) e curto-circuito.",
    icon: <Microscope className="w-8 h-8" />,
    color: "#00A651"
  },
  {
    title: "Manutenção de Smartphones",
    description: "Troca de telas premium, baterias originais e conectores. Especialista em toda a linha Apple, Samsung S e Z Series.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "#00A651"
  },
  {
    title: "Notebooks & MacBooks",
    description: "Reparo de carcaças, dobradiças, limpeza preventiva e upgrade de performance (SSD/RAM). Especialista em MacBook Air e Pro.",
    icon: <Monitor className="w-8 h-8" />,
    color: "#00A651"
  },
  {
    title: "Recuperação de Dados",
    description: "Extração de arquivos em dispositivos com danos físicos ou falhas de sistema. Segurança e total sigilo das suas informações.",
    icon: <HardDrive className="w-8 h-8" />,
    color: "#00A651"
  }
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Detalhe decorativo de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A651]/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00A651] font-bold tracking-[0.2em] uppercase text-sm"
          >
            Nossas Especialidades
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-white mt-4 mb-6"
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            SOLUÇÕES TÉCNICAS <span className="text-gray-500 text-3xl md:text-4xl">DE ALTA PRECISÃO</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Atuamos com laboratório de última geração em São Bernardo do Campo, focado em reparos que exigem microscopia e técnica avançada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl bg-[#141414] border border-white/5 hover:border-[#00A651]/50 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-black border border-white/10 text-[#00A651] group-hover:bg-[#00A651] group-hover:text-white transition-all shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="w-12 h-1 bg-[#00A651]/20 group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Banner de Diferenciais Rápidos */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
          <div className="flex items-center gap-4">
            <Zap className="text-[#00A651]" />
            <div>
              <h4 className="text-white font-bold text-sm">REPARO EXPRESSO</h4>
              <p className="text-gray-500 text-xs text-nowrap">Telas e baterias em até 1 hora.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-[#00A651]" />
            <div>
              <h4 className="text-white font-bold text-sm">GARANTIA TOTAL</h4>
              <p className="text-gray-500 text-xs">Suporte pós-reparo e peças premium.</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Microscope className="text-[#00A651]" />
            <div>
              <h4 className="text-white font-bold text-sm">LABORATÓRIO PRÓPRIO</h4>
              <p className="text-gray-500 text-xs text-nowrap">Tecnologia de ponta em micro-soldagem.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
