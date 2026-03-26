// ... (mantenha os imports iguais)

const Index = () => {
  // ... (mantenha a lógica de produtos igual)

  return (
    // Adicionamos o fundo aqui para que ele pegue a página toda
    <div className="relative flex flex-col min-h-screen bg-black">
      
      {/* BACKGROUND IMAGE FIXO */}
      <div 
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Faz a imagem ficar parada enquanto o site rola
        }}
      />

      {/* Camada de Gradiente para garantir leitura do texto */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black/60 via-black/80 to-black pointer-events-none" />

      <Header />

      {/* O conteúdo agora precisa de z-10 para ficar acima do fundo fixo */}
      <div className="relative z-10">
        
        {/* HERO SECTION */}
        <section id="inicio" className="min-h-screen flex items-center justify-center px-6 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00A651]/10 border border-[#00A651]/20 mb-8">
              <Zap size={14} className="text-[#00A651]" />
              <span className="text-[#00A651] font-black uppercase tracking-[0.3em] text-[10px]">SÃO BERNARDO DO CAMPO • SP</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.85] text-white">
              ASSISTÊNCIA TÉCNICA<br/>
              <span className="text-[#00A651] drop-shadow-[0_0_15px_rgba(0,166,81,0.5)]">ESPECIALIZADA</span><br/>
              <span className="text-white/90">CELULARES & NOTEBOOKS</span>
            </h1>
            
            <p className="mt-10 text-gray-400 font-bold uppercase tracking-widest text-sm md:text-base max-w-2xl mx-auto">
              Reparos avançados em hardware, micro-soldagem e software com garantia de excelência.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-14 justify-center">
              <a href="https://wa.me/5511940562933" target="_blank" className="flex items-center justify-center gap-3 px-10 py-5 bg-[#00A651] text-white font-black uppercase italic rounded-2xl hover:scale-105 transition-all">
                <MessageCircle size={22} /> ORÇAMENTO RÁPIDO
              </a>
              <Link to="/loja" className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl font-black uppercase text-sm text-white hover:bg-white/10 transition-all">
                <ShoppingBag size={22} /> ACESSAR LOJA
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Mantenha o restante das seções (Carrossel, Serviços, Contato) aqui dentro da div z-10 */}
        
      </div> {/* Fim da div z-10 */}
      
      <Footer />
    </div>
  );
};

export default Index;
