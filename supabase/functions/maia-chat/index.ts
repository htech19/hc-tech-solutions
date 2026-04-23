import { corsHeaders } from "@supabase/supabase-js/cors";

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
    if (rule.keywords.some((k) => msg.includes(k))) return rule.reply;
  }
  return null;
}

const SYSTEM_PROMPT =
  "Você é Maia, atendente técnica da HC Tech (assistência de celular e notebook em São Bernardo). Responda em até 20 palavras, em português, direto e sem repetir contexto. Sempre peça o modelo do aparelho se faltar.";

const FALLBACK_WA = "Posso te ajudar melhor pelo WhatsApp: (11) 94056-2933 📲";

// ──────────── Provedores de IA (chaves via Deno.env, nunca logadas) ────────────
async function callAnthropic(message: string): Promise<string | null> {
  const key = Deno.env.get("ANTHROPIC_API_KEY");
  if (!key) return null;
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 80,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: message }],
      }),
    });
    if (!r.ok) {
      console.error("Anthropic error status:", r.status);
      return null;
    }
    const data = await r.json();
    return data?.content?.[0]?.text?.trim() ?? null;
  } catch (e) {
    console.error("Anthropic exception");
    return null;
  }
}

async function callGemini(message: string): Promise<string | null> {
  const key = Deno.env.get("GEMINI_API_KEY");
  if (!key) return null;
  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents: [{ role: "user", parts: [{ text: message }] }],
          generationConfig: { maxOutputTokens: 80, temperature: 0.4 },
        }),
      },
    );
    if (!r.ok) {
      console.error("Gemini error status:", r.status);
      return null;
    }
    const data = await r.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? null;
  } catch (e) {
    console.error("Gemini exception");
    return null;
  }
}

async function callGrok(message: string): Promise<string | null> {
  const key = Deno.env.get("GROK_API_KEY");
  if (!key) return null;
  try {
    const r = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "grok-2-latest",
        max_tokens: 80,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
      }),
    });
    if (!r.ok) {
      console.error("Grok error status:", r.status);
      return null;
    }
    const data = await r.json();
    return data?.choices?.[0]?.message?.content?.trim() ?? null;
  } catch (e) {
    console.error("Grok exception");
    return null;
  }
}

// Cascata: Anthropic → Gemini → Grok
async function callAI(message: string): Promise<string | null> {
  return (
    (await callAnthropic(message)) ??
    (await callGemini(message)) ??
    (await callGrok(message))
  );
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const { message } = await req.json();
    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Mensagem inválida" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
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

    // 2. Cascata de IA (Anthropic → Gemini → Grok)
    const aiReply = await callAI(trimmed);
    if (aiReply) {
      return new Response(JSON.stringify({ reply: aiReply, source: "ai" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 3. Fallback final
    return new Response(JSON.stringify({ reply: FALLBACK_WA, source: "fallback" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("maia-chat error");
    return new Response(
      JSON.stringify({ reply: "Tive um problema. Fale no WhatsApp: (11) 94056-2933 📲", source: "error" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
