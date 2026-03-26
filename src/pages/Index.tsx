import { MessageCircle, ShoppingBag, Zap, Send, Smartphone, Laptop, Monitor, CheckCircle } from "lucide-react";
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
    <div className="relative flex flex-col min-h-screen bg-black overflow-x-hidden">
      
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

        {/* CARROSSEL INFINITO - VELOCIDADE REDUZIDA */}
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
                    <a href={`https://wa.me/5511940562933?text=Olá! Tenho interesse no item: ${p.name}`} target="_blank" className="mt-6 w-full py-4 bg-white/5 border border-white/10 rounded-xl text-[11px] font-black text-center block hover:bg-[#00A651] hover:text-white transition-all uppercase tracking-widest">
                      CONSULTAR PREÇO
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SEÇÃO NOSSOS SERVIÇOS - MELHORADA */}
        <section id="servicos" className="py-32 px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A651]/[0.03] to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div 
              className="mb-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#00A651] font-black text-xs uppercase tracking-[0.4em]">Expertise Técnica</span>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mt-4">
                NOSSOS <span className="text-[#00A651]">SERVIÇOS</span>
              </h2>
              <p className="mt-6 text-gray-500 font-bold uppercase tracking-widest text-xs max-w-2xl mx-auto">
                Soluções completas para celulares, notebooks e hardware avançado
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Smartphone size={28} className="text-[#00A651]" />,
                  title: "Android",
                  items: ["Troca de Tela e Vidro", "Conector de Carga", "Troca de Bateria", "Softwares/Atualização"],
                  highlight: false,
                },
                {
                  icon: <Zap size={28} className="text-[#00A651]" />,
                  title: "iPhone",
                  items: ["Telas Originais/Premium", "Reparo de Face ID", "Bateria (Sem Mensagem)", "Reparo de Placa"],
                  highlight: false,
                },
                {
                  icon: <Laptop size={28} className="text-[#00A651]" />,
                  title: "Notebook & PC",
                  items: ["Formatação e Backup", "Upgrade SSD e RAM", "Limpeza e Térmica", "Telas e Teclados"],
                  highlight: false,
                },
                {
                  icon: <Monitor size={28} className="text-white" />,
                  title: "Hardware Pro",
                  items: ["Reparo em Placa-Mãe", "Reballing & Chipsets", "Troca de Chipset", "Montagem PC Gamer"],
                  highlight: true,
                },
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`group p-8 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${
                    service.highlight
                      ? "border border-[#00A651]/40 bg-[#00A651]/10 shadow-[0_0_40px_rgba(0,166,81,0.1)] hover:shadow-[0_0_60px_rgba(0,166,81,0.2)]"
                      : "glass-card border border-white/5 bg-[#050505]/40 hover:border-[#00A651]/30"
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${
                    service.highlight
                      ? "bg-[#00A651] shadow-[0_0_20px_rgba(0,166,81,0.5)]"
                      : "bg-[#00A651]/10 group-hover:bg-[#00A651]/20"
                  }`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase italic mb-6">{service.title}</h3>
                  <ul className="space-y-4">
                    {service.items.map((item) => (
                      <li key={item} className={`flex items-center gap-3 text-xs font-bold uppercase tracking-wider ${
                        service.highlight ? "text-gray-200 font-black" : "text-gray-400"
                      }`}>
                        {service.highlight 
                          ? <Zap size={14} className="text-[#00A651]" /> 
                          : <CheckCircle size={14} className="text-[#00A651]" />
                        }
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`https://wa.me/5511940562933?text=Olá! Gostaria de saber mais sobre o serviço: ${service.title}`}
                    target="_blank"
                    className={`mt-8 w-full py-3.5 rounded-xl text-[10px] font-black text-center block uppercase tracking-widest transition-all duration-300 ${
                      service.highlight
                        ? "bg-[#00A651] text-white hover:shadow-[0_0_20px_rgba(0,166,81,0.4)] hover:scale-[1.02]"
                        : "bg-white/5 border border-white/10 text-gray-400 hover:bg-[#00A651] hover:text-white hover:border-transparent"
                    }`}
                  >
                    SOLICITAR ORÇAMENTO
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULÁRIO FALE CONOSCO */}
        <section id="contato" className="py-32 px-6 relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="glass-card p-12 border-[#00A651]/20 relative overflow-hidden bg-[#050505]/60 rounded-3xl backdrop-blur-lg">
              <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-4 text-center">Iniciar Atendimento</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 mb-8">
                <input type="text" placeholder="SEU NOME" className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#00A651] text-white font-black text-xs" />
                <input type="text" placeholder="MODELO DO APARELHO" className="bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#00A651] text-white font-black text-xs" />
              </div>
              <textarea placeholder="DESCREVA O PROBLEMA" rows={4} className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl outline-none focus:border-[#00A651] text-white font-black text-xs mb-8"></textarea>
              <button className="w-full py-6 bg-[#00A651] hover:scale-[1.02] transition-all text-white rounded-2xl flex items-center justify-center gap-3 text-sm font-black tracking-[0.2em]">
                <Send size={18} /> ENVIAR VIA WHATSAPP
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
