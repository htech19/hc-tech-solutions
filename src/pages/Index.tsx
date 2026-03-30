{/* SEÇÃO: SOBRE NÓS */}
<section id="sobre-nos" className="py-32 px-8 relative bg-zinc-900/20">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
    <motion.div 
      className="w-full lg:w-1/2"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <span className="text-[#00A651] font-black text-xs uppercase tracking-[0.4em]">Nossa Identidade</span>
      <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mt-4 mb-8">
        SOBRE <span className="text-[#00A651]">NÓS</span>
      </h2>
      
      <div className="space-y-6">
        <p className="text-white font-black text-xl italic leading-tight uppercase tracking-tighter">
          Líder em soluções tecnológicas e reparos avançados no ABC Paulista.
        </p>
        
        <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base uppercase tracking-wide">
          A <span className="text-white font-black">HC TECH INFOCELL</span> é uma empresa de tecnologia de elite, composta por especialistas com formação acadêmica em TI e vasta experiência em infraestrutura. 
          Não somos apenas uma assistência; somos o centro de soluções definitivas para seus dispositivos.
        </p>

        <p className="text-gray-500 font-medium leading-relaxed text-sm uppercase">
          Oferecemos um ecossistema completo: desde o reparo especializado em celulares e notebooks até a compra, venda e manutenção preventiva de hardware de alto desempenho. 
          Nosso compromisso com a sua produtividade é absoluto, por isso operamos com <span className="text-[#00A651] font-bold">serviço exclusivo de leva e traz</span>, garantindo comodidade total e a segurança de que seu equipamento está em mãos profissionais.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center group hover:border-[#00A651]/50 transition-all">
          <ShieldCheck className="text-[#00A651] mx-auto mb-3" size={32} />
          <span className="block text-white font-black text-xl italic tracking-tighter uppercase">Garantia</span>
          <span className="text-gray-500 font-black text-[10px] uppercase">Total</span>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center group hover:border-[#00A651]/50 transition-all">
          <Clock className="text-[#00A651] mx-auto mb-3" size={32} />
          <span className="block text-white font-black text-xl italic tracking-tighter uppercase">Delivery</span>
          <span className="text-gray-500 font-black text-[10px] uppercase">Leva e Traz</span>
        </div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-center group hover:border-[#00A651]/50 transition-all">
          <Award className="text-[#00A651] mx-auto mb-3" size={32} />
          <span className="block text-white font-black text-xl italic tracking-tighter uppercase">Formação</span>
          <span className="text-gray-500 font-black text-[10px] uppercase">Expertise TI</span>
        </div>
      </div>
    </motion.div>
    
    <motion.div 
      className="w-full lg:w-1/2 relative"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
    >
      <div className="aspect-square rounded-3xl overflow-hidden border border-[#00A651]/30 relative group">
        <img 
          src="/hero-bg.jpg" 
          alt="HC Tech Lab" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-8 left-8">
           <h3 className="text-3xl font-black italic text-white uppercase tracking-tighter">HC TECH LAB</h3>
           <span className="text-[#00A651] font-black uppercase text-xs tracking-[0.3em]">Engenharia e Precisão</span>
        </div>
      </div>
    </motion.div>
  </div>
</section>
