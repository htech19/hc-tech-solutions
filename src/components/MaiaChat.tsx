import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL: Msg = { role: "assistant", content: "👋 Olá! Eu sou a Maia. Como posso te ajudar?" };

export default function MaiaChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: text }]);
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("maia-chat", { body: { message: text } });
      if (error) throw error;
      setMessages(prev => [...prev, { role: "assistant", content: data?.reply || "Pode repetir?" }]);
    } catch (e) {
      console.error(e);
      setMessages(prev => [...prev, { role: "assistant", content: "Fale conosco no WhatsApp: (11) 94056-2933 📲" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-24 z-50 bg-[#00A651] text-white p-4 rounded-full shadow-[0_0_20px_rgba(0,166,81,0.5)] hover:scale-110 transition-all ${open ? "hidden" : "flex"}`}
        aria-label="Abrir chat com Maia"
      >
        <MessageCircle size={26} />
      </button>

      {/* Janela do chat */}
      {open && (
        <div className="fixed bottom-6 right-6 z-[60] w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-zinc-950 border border-[#00A651]/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#00A651] to-[#008c44] text-white">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div className="leading-tight">
                <p className="font-black uppercase italic text-sm">Maia</p>
                <p className="text-[10px] opacity-90">Assistente HC Tech • Online</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="hover:opacity-70" aria-label="Fechar">
              <X size={20} />
            </button>
          </div>

          {/* Mensagens */}
          <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-black/40">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-snug ${
                  m.role === "user"
                    ? "bg-[#00A651] text-white rounded-br-sm"
                    : "bg-zinc-800 text-gray-100 rounded-bl-sm"
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 text-gray-300 px-3 py-2 rounded-2xl rounded-bl-sm text-sm">
                  <span className="inline-flex gap-1">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.3s]" />
                  </span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 bg-zinc-950 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && send()}
              maxLength={300}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-zinc-900 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#00A651]"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="bg-[#00A651] text-white p-2 rounded-xl hover:bg-[#008c44] disabled:opacity-50 transition-colors"
              aria-label="Enviar"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
