import { MessageCircle, ShoppingBag, Zap, Send, Smartphone, Laptop, Monitor, CheckCircle, ShieldCheck, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products } from "@/data/store-products"; 

const Index = () => {
  const topVendas = products.filter(p => p.badge).length > 0 
    ? products.filter(p => p.badge) 
    : products.slice(0, 10);

  return (
    <div className="relative flex flex-col min-h-screen bg-black overflow-x-hidden text-white">
      
      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-45" 
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* HERO SECTION */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-6 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8 backdrop-blur-sm">
              <Zap size={14} className="text-[#00A651]" />
              <span className="text-[#00A651] font-black uppercase tracking-[0.3em] text-[10px]">SÃO BERNARDO DO CAMPO • SP</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase italic leading-[0.95] text-white">
              ASSISTÊNCIA TÉCNICA<br/>
              <span className="text-[#00A651] drop-shadow-[0_0_15px_rgba(0,166,81,0.5)]">ESPECIALIZADA</span><br/>
              <span className="text-white/90">CELULARES & NOTEBOOKS</span>
            </h1>
            
            <p className="mt-10 text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base max-w-3xl mx-auto">
              Reparos especializados em Apple, Samsung, Xiaomi e Notebooks de todas as marcas.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-14 justify-center">
              <a href="https://wa.me/5511940562933" target="_blank" className="flex items-center justify-center gap-3 px-10 py-5 bg-[#00A651] text-white font-black uppercase italic rounded-2xl hover:scale-105 transition-all">
                <MessageCircle size={22} /> ORÇAMENTO RÁPIDO
              </a>
              <Link to="/loja" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black uppercase text-sm text-white hover:bg-white/10 transition-all backdrop-blur-sm">
                <ShoppingBag size={22} /> ACESSAR LOJA
              </Link>
            </div>
          </motion.div>
        </section>

        {/* VITRINE TECH */}
        <section className="py-24 bg-[#050505]/60 backdrop-blur-md border-y border-white/5 overflow-hidden relative">
          <div className="max-w-7xl mx-auto mb-12 px-8 flex justify-between items-end relative z-10">
            <div>
              <span className="text-[#00A651] font-black text-xs uppercase tracking-[0.4em]">Vitrine Tech</span>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white mt-2">
                DESTAQUES <span className="text-[#00A651]">HC TECH</span>
              </h2>
            </div>
            <Link to="/loja" className="text-[10px] font-black text-gray-500 hover:text-[#00A651] uppercase tracking-widest transition-colors border-b border-gray-800 pb-1">Ver todos</Link>
          </div>

          <div className="relative flex overflow-x-hidden z-10">
            <motion.div 
              className="flex gap-8 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ ease: "linear", duration: 80, repeat: Infinity }}
            >
              {[...topVendas, ...topVendas, ...topVendas].map((p, i) => (
                <div key={i} className="inline-block w-72 md:w-96 glass-card p-6 shrink-0 group border border-white/5 rounded-3xl bg-white/[0.02]">
                  <div className="relative h-56 md:h-72 mb-6 overflow-hidden rounded-2xl bg-black">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                    {p.badge && (
                      <span className="absolute top-4 left-4 bg-[#00A651] text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-xl">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1 px-2">
                    <span className="text-[#00A651] text-[10px] font-black uppercase tracking-[0.2em]">{p.category}</span>
                    <h4 className="text-white font-black text-lg truncate uppercase italic tracking-tighter">{p.name}</h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* NOSSOS SERVIÇOS */}
        <section id="servicos" className="py-32 px-8 relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-20 text-center">
              <span className="text-[#00A651] font-black text-xs uppercase tracking-[0.4em]">Expertise Técnica</span>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mt-4">
                NOSSOS <span className="text-[#00A651]">SERVIÇOS</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Smartphone size={28} className="text-[#00A651]" />,
                  title: "Android",
                  items: ["Troca de Tela e Vidro", "Conector de Carga", "Troca de Bateria", "Softwares/Atualização"],
                },
                {
                  icon: <Zap size={28} className="text-[#00A651]" />,
                  title: "iPhone",
                  items: ["Telas Originais/Premium", "Reparo de Face ID", "Bateria (Sem Mensagem)", "Reparo de Placa"],
                },
                {
                  icon: <Laptop size={28} className="text-[#00A651]" />,
                  title: "Notebook & PC",
                  items: ["Formatação e Backup", "Upgrade SSD e RAM", "Limpeza e Térmica", "Telas e Teclados"],
                },
                {
                  icon: <Monitor size={28} className="text-white" />,
                  title: "Hardware Pro",
                  items: ["Reparo em Placa-Mãe", "Reballing & Chipsets", "Troca de Chipset", "Montagem PC Gamer"],
                  highlight: true,
                },
              ].map((service, idx) => (
                <div key={idx} className={`p-8 rounded-3xl backdrop-blur-sm border border-white/5 ${service.highlight ? 'bg-[#00A651]/10 border-[#00A651]/40' : 'bg-[#050505]/40'}`}>
                  <div className="w-14 h-14 bg-[#00A651]/20 rounded-2xl flex items-center justify-center mb-8">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase italic mb-6">{service.title}</h3>
                  <ul className="space-y-4">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-xs font-bold uppercase text-gray-400">
                        <CheckCircle size={14} className="text-[#00A651]" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO: SOBRE NÓS (SEM IMAGEM E ESCRITA ORIGINAL) */}
        <section id="sobre-nos" className="py-32 px-8 relative bg-zinc-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#00A651] font-black text-xs uppercase tracking-[0.4em]">Nossa História</span>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mt-4 mb-10">
                SOBRE <span className="text-[#00A651]">NÓS</span>
              </h2>
              
              <div className="space-y-8">
                <p className="text-gray-300 font-medium leading-relaxed text-base md:text-lg uppercase tracking-wide">
                  HC Tech Infocell é uma empresa dedicada a fornecer soluções de alta qualidade para diversas necessidades de tecnologia. 
                  Oferecemos uma ampla gama de serviços, incluindo reparos de celulares, manutenção em informática, compra e venda de aparelhos, 
                  e suporte técnico por profissionais com formação em TI.
                </p>

                <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base uppercase tracking-widest">
                  Além disso, a empresa também oferece benefícios adicionais, como serviço de retirada e entrega de equipamentos e garantia, 
                  demonstrando seu compromisso em manter os dispositivos de seus clientes funcionando. Confie na HC Tech Infocell para 
                  resolver seus problemas de tecnologia e aproveite a experiência de seus profissionais.
                </p>

                <p className="text-[#00A651] font-black text-sm uppercase tracking-[0.3em] italic">
                  Comprometidos em oferecer soluções eficientes e de alta qualidade.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
                <div className="flex flex-col items-center">
                  <ShieldCheck className="text-[#00A651] mb-4" size={40} />
                  <span className="text-white font-black text-xs uppercase tracking-widest">Garantia</span>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="text-[#00A651] mb-4" size={40} />
                  <span className="text-white font-black text-xs uppercase tracking-widest">Leva e Traz</span>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="text-[#00A651] mb-4" size={40} />
                  <span className="text-white font-black text-xs uppercase tracking-widest">Expertise TI</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="py-32 px-6 relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="glass-card p-12 border border-[#00A651]/20 bg-[#050505]/60 rounded-3xl backdrop-blur-lg text-center">
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-12">Iniciar Atendimento</h2>
              <button className="w-full py-6 bg-[#00A651] hover:scale-[1.02] transition-all text-white rounded-2xl flex items-center justify-center gap-3 text-sm font-black tracking-[0.2em]">
                <Send size={18} /> ENVIAR VIA WHATSAPP
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default Index;
