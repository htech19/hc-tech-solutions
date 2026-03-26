{/* SEÇÃO DE SERVIÇOS (SOLUÇÕES) */}
<section id="servicos" className="py-32 px-8">
  <div className="max-w-7xl mx-auto">
    <div className="mb-20 text-center">
      <span className="text-[#00A651] font-black text-xs uppercase tracking-[0.4em]">Expertise Técnica</span>
      <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter mt-4">
        NOSSAS <span className="text-[#00A651]">SOLUÇÕES</span>
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* CARD 1 - ANDROID */}
      <div className="glass-card p-8 border border-white/5 rounded-3xl bg-white/[0.02] hover:border-[#00A651]/30 transition-all group">
        <div className="bg-[#00A651]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
          <Smartphone size={28} className="text-[#00A651]" />
        </div>
        <h3 className="text-xl font-black text-white uppercase italic mb-6">Android</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Troca de Tela e Vidro
          </li>
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Reparo de Conector de Carga
          </li>
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Substituição de Bateria
          </li>
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Atualização de Software
          </li>
        </ul>
      </div>

      {/* CARD 2 - IPHONE */}
      <div className="glass-card p-8 border border-white/5 rounded-3xl bg-white/[0.02] hover:border-[#00A651]/30 transition-all group">
        <div className="bg-[#00A651]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
          <Zap size={28} className="text-[#00A651]" />
        </div>
        <h3 className="text-xl font-black text-white uppercase italic mb-6">iPhone</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Telas Premium/Originais
          </li>
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Reparo de Face ID
          </li>
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Bateria (Sem Mensagem)
          </li>
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Reparo Avançado em Placa
          </li>
        </ul>
      </div>

      {/* CARD 3 - COMPUTADORES */}
      <div className="glass-card p-8 border border-white/5 rounded-3xl bg-white/[0.02] hover:border-[#00A651]/30 transition-all group">
        <div className="bg-[#00A651]/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
          <Laptop size={28} className="text-[#00A651]" />
        </div>
        <h3 className="text-xl font-black text-white uppercase italic mb-6">Notebook & PC</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Upgrade de SSD e RAM
          </li>
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Formatação e Backup
          </li>
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Limpeza e Térmica
          </li>
          <li className="flex items-center gap-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            <CheckCircle size={14} className="text-[#00A651]" /> Teclados e Telas
          </li>
        </ul>
      </div>

      {/* CARD 4 - HARDWARE AVANÇADO */}
      <div className="glass-card p-8 border border-[#00A651]/30 rounded-3xl bg-[#00A651]/5 hover:bg-[#00A651]/10 transition-all group">
        <div className="bg-[#00A651] w-14 h-14 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(0,166,81,0.4)]">
          <Monitor size={28} className="text-white" />
        </div>
        <h3 className="text-xl font-black text-white uppercase italic mb-6">Hardware Pro</h3>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-gray-200 text-xs font-black uppercase tracking-wider">
            <Zap size={14} className="text-[#00A651]" /> Reparo em Placa-Mãe
          </li>
          <li className="flex items-center gap-3 text-gray-200 text-xs font-black uppercase tracking-wider">
            <Zap size={14} className="text-[#00A651]" /> Reballing & Chipsets
          </li>
          <li className="flex items-center gap-3 text-gray-200 text-xs font-black uppercase tracking-wider">
            <Zap size={14} className="text-[#00A651]" /> Montagem High-End Gamer
          </li>
          <li className="flex items-center gap-3 text-gray-200 text-xs font-black uppercase tracking-wider">
            <Zap size={14} className="text-[#00A651]" /> Recuperação de Circuitos
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
