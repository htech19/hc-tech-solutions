import { MessageCircle, ShoppingBag, Zap, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Etapa 2: Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl text-center space-y-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20">
          <Zap size={14} className="text-[#00A651]" />
          <span className="text-[#00A651] text-[10px] font-black uppercase tracking-widest">Atendimento VIP no ABC</span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic">
          Assistência <span className="text-[#00A651]">Premium</span><br/>& Acessórios
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Celulares, notebooks e acessórios com entrega rápida no ABC e suporte especializado no mesmo dia.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://wa.me/5511940562933" target="_blank" className="btn-primary w-full sm:w-auto justify-center">
            <MessageCircle size={20} /> Falar no WhatsApp
          </a>
          <Link to="/loja" className="bg-white/5 border border-white/10 px-8 py-4 rounded-2xl font-black flex items-center gap-2 hover:bg-white/10 transition-all w-full sm:w-auto justify-center">
            <ShoppingBag size={20} /> Ver Produtos
          </Link>
        </div>
      </motion.section>

      {/* Etapa 3: Benefícios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-6xl w-full">
        {[
          { icon: <Clock />, title: "Entrega Rápida", desc: "No mesmo dia para todo o ABC" },
          { icon: <ShieldCheck />, title: "Garantia Total", desc: "Suporte especializado pós-venda" },
          { icon: <Zap />, title: "Resposta Imediata", desc: "Especialistas online no WhatsApp" }
        ].map((item, i) => (
          <div key={i} className="glass-card p-8 flex flex-col items-center text-center gap-4">
            <div className="text-[#00A651]">{item.icon}</div>
            <h3 className="font-black uppercase italic tracking-tighter text-xl">{item.title}</h3>
            <p className="text-gray-500 text-sm font-medium">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
