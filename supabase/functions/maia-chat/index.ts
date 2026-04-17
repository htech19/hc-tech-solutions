import { corsHeaders } from '@supabase/supabase-js/cors';

interface Rule {
  keywords: string[];
  reply: string;
}

const rules: Rule[] = [
  { keywords: ["oi", "olá", "ola", "bom dia", "boa tarde", "boa noite"], reply: "👋 Olá! Eu sou a Maia. Me diga o modelo do aparelho e o problema." },
  { keywords: ["preço", "preco", "valor", "orçamento", "orcamento", "quanto custa"], reply: "Me informe o modelo do aparelho para te passar o valor 📱" },
  { keywords: ["tela", "display", "vidro", "touch"], reply: "Apenas o vidro ou o touch também parou? E qual o modelo do aparelho?" },
  { keywords: ["bateria", "carga", "carregar"], reply: "Seu aparelho descarrega rápido ou não liga? Me passe o modelo 🔋" },
  { keywords: ["endereço", "endereco", "onde", "localização", "localizacao"], reply: "Estamos em São Bernardo do Campo. Posso te passar a localização exata pelo WhatsApp 📍" },
  { keywords: ["horário", "horario", "funciona", "aberto"], reply: "Atendemos de segunda a sábado. Para agendamento, fale conosco no WhatsApp 🕐" },
  { keywords: ["garantia"], reply: "Sim! Todos os reparos têm garantia em peças e mão de obra ✅" },
  { keywords: ["whatsapp", "zap", "telefone"], reply: "Fale conosco no WhatsApp: (11) 94056-2933 📲" },
];

function checkRules(message: string): string | null {
  const msg = message.toLowerCase();
  for (const rule of rules) {
    if (rule.keywords.some(k => msg.includes(k))) return rule.reply;
  }
  return null;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Mensagem inválida" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const trimmed = message.slice(0, 300);

    // 1. Regras locais (custo zero)
    const localReply = checkRules(trimmed);
    if (localReply) {
      return new Response(JSON.stringify({ reply: localReply, source: "local" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 2. Fallback IA (modo econômico)
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY não configurado");

    const aiResp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${LOVABLE_API_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          { role: "system", content: "Você é Maia, atendente técnica da HC Tech (assistência de celular e notebook em São Bernardo). Responda em até 20 palavras, em português, direto e sem repetir contexto. Sempre peça o modelo do aparelho se faltar." },
          { role: "user", content: trimmed },
        ],
        max_tokens: 80,
      }),
    });

    if (aiResp.status === 429) {
      return new Response(JSON.stringify({ reply: "Estou com muitos atendimentos. Fale direto no WhatsApp: (11) 94056-2933 📲", source: "fallback" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (aiResp.status === 402) {
      return new Response(JSON.stringify({ reply: "Para um atendimento mais rápido, fale conosco no WhatsApp: (11) 94056-2933 📲", source: "fallback" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!aiResp.ok) {
      const t = await aiResp.text();
      console.error("AI error:", aiResp.status, t);
      return new Response(JSON.stringify({ reply: "Posso te ajudar melhor pelo WhatsApp: (11) 94056-2933 📲", source: "fallback" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await aiResp.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || "Pode me passar o modelo do aparelho?";

    return new Response(JSON.stringify({ reply, source: "ai" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("maia-chat error:", e);
    return new Response(JSON.stringify({ reply: "Tive um problema. Fale no WhatsApp: (11) 94056-2933 📲", source: "error" }), {
      status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
