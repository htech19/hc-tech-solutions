{/* CTA BUTTONS - WHATSAPP & TELEGRAM */}
<div className="flex flex-col gap-6 mt-14 items-center">
  {/* Texto de apoio para distinguir as escolhas */}
  <p className="text-[#00A651] font-black text-[10px] uppercase tracking-[0.4em] mb-[-10px] animate-pulse">
    SOLICITE SEU ORÇAMENTO PELA SUA REDE PREFERIDA
  </p>
  
  <div className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-3xl px-4">
    {/* BOTÃO WHATSAPP */}
    <a 
      href="https://wa.me/5511940562933" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white font-black uppercase italic rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)]"
    >
      <MessageCircle size={24} /> 
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] opacity-80 mb-1">Atendimento via</span>
        <span className="text-sm tracking-tighter">WhatsApp</span>
      </div>
    </a>

    {/* BOTÃO TELEGRAM BOT */}
    <a 
      href="https://t.me/hctechinfocell_bot" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-[#24A1DE] text-white font-black uppercase italic rounded-2xl hover:scale-105 transition-all shadow-[0_0_20px_rgba(36,161,222,0.3)]"
    >
      <Send size={24} /> 
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] opacity-80 mb-1">Suporte via Bot</span>
        <span className="text-sm tracking-tighter">Telegram</span>
      </div>
    </a>
  </div>

  {/* BOTÃO LOJA (SECUNDÁRIO) */}
  <Link 
    to="/loja" 
    className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 px-12 py-4 rounded-2xl font-black uppercase text-[10px] text-gray-400 hover:text-white hover:bg-white/10 transition-all backdrop-blur-sm mt-4 tracking-[0.2em]"
  >
    <ShoppingBag size={18} /> ACESSAR NOSSA LOJA
  </Link>
</div>
