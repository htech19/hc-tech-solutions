import { corsHeaders } from "@supabase/supabase-js/cors";

// ──────────────────────────────────────────────────────────────
// MAIA — Atendente HC Tech
// Cascata: Regras locais → Lovable AI → Anthropic → Gemini → Grok → Fallback
// ──────────────────────────────────────────────────────────────

const WA = "https://wa.me/5511940562933";
const SITE = "https://hctechinfocell.com.br";

const SYSTEM_PROMPT = `Você é a MAIA, atendente virtual da HC Tech — assistência técnica premium em São Bernardo do Campo, SP.
Atenda em português do Brasil, com cortesia, autoridade técnica e tom acolhedor.
Use no MÁXIMO 3 frases curtas. Nunca invente preços exatos.
Quando faltar info, peça apenas: marca, modelo e defeito principal.
Encerre orientando: continuar pelo chat ou abrir o WhatsApp (11) 94056-2933.`;

// ──────────── Respostas locais (variadas) ────────────
const RESPOSTAS_LOCAIS: Record<string, string[]> = {
  saudacao: [
    "👋 Olá! Aqui é a Maia, da HC Tech. Me conta qual o aparelho e o defeito principal que já encaminho seu atendimento.",
    "Oi! Bem-vindo(a) à HC Tech ✨ Qual o problema do seu dispositivo hoje?",
    "Olá! 🤝 Pode me passar a marca e o modelo do seu aparelho e o que está acontecendo?",
  ],
  preco: [
    "💼 Para passar um valor preciso preciso saber: marca, modelo e tipo de defeito. Pode me informar?",
    "🔍 Os valores variam conforme aparelho e peça. Me diz o modelo e o defeito que sigo com o orçamento.",
  ],
  tela: [
    "🔨 Trocamos telas com peças selecionadas e garantia HC Tech. Apenas o vidro quebrou ou o touch também parou? Qual o modelo?",
    "📺 Tela quebrada? Trabalhamos com Incell, OLED, Nacional e linha COM ARO. Me passa o modelo do aparelho.",
  ],
  bateria: [
    "⚡ Bateria original ou premium com 90 dias de garantia. Seu aparelho descarrega rápido, não liga ou está estufada?",
    "🔋 Trocamos bateria com garantia. Me diz o modelo do aparelho.",
  ],
  naoliga: [
    "❌ Diagnóstico elétrico avançado e reparo SMD. Caiu, molhou, ou simplesmente parou? Qual o modelo?",
  ],
  agua: [
    "💧 Higienização interna e desoxidação. Quanto tempo faz que molhou? E qual o modelo do aparelho?",
  ],
  software: [
    "🔄 Corrigimos loop, brick, lentidão e travamentos. Qual o modelo e o que está acontecendo?",
  ],
  conector: [
    "🔌 Trocamos conector USB-C, Lightning e Micro USB com garantia. Qual o modelo?",
  ],
  camera: [
    "📷 Trocamos câmera traseira, frontal, lente e flex. Qual o modelo?",
  ],
  audio: [
    "🔊 Reparo de alto-falante, fone, microfone e vibracall. Qual o modelo?",
  ],
  teclado: [
    "⌨️ Trocamos teclado de notebook. Me passa marca e modelo.",
  ],
  garantia: [
    "✅ Trabalhamos com 90 dias de garantia em peças e mão de obra. Posso ajudar em algo mais?",
  ],
  duracao: [
    "⏱️ Telas e baterias normalmente saem no mesmo dia. Reparo de placa ou dano por água: 2 a 5 dias úteis.",
  ],
  whatsapp: [
    `📲 Claro! Fala direto com a gente: ${WA} — nosso técnico responde rapidinho.`,
  ],
  local: [
    "📍 Atendemos em São Bernardo do Campo, SP. Posso te enviar a localização exata pelo WhatsApp.",
  ],
  horario: [
    "🕐 Funcionamos de segunda a sábado, das 9h às 18h. Precisa de outro horário? Me avisa pelo WhatsApp.",
  ],
  site: [
    `🌐 Confira nosso catálogo completo em ${SITE}`,
  ],
  agradecimento: [
    "Por nada! 🤝 Qualquer coisa estou por aqui.",
    "Disponha! ✨ Conte com a HC Tech.",
  ],
};

const INTENCOES: Record<string, string[]> = {
  saudacao: ["oi", "olá", "ola", "opa", "bom dia", "boa tarde", "boa noite", "hey", "hello", "eai", "e ai"],
  agradecimento: ["obrigado", "obrigada", "valeu", "vlw", "agradecido", "thanks"],
  preco: ["quanto custa", "preço", "preco", "valor", "tabela", "orçamento", "orcamento", "custo", "quanto fica", "quanto sai"],
  tela: ["tela", "display", "vidro", "touch", "trincou", "rachou", "quebrou a tela"],
  bateria: ["bateria", "carga", "descarrega", "estufada", "estufou", "não segura"],
  naoliga: ["não liga", "nao liga", "morreu", "apagou", "não acende", "nao acende"],
  agua: ["molhou", "molhei", "água", "agua", "caiu na agua", "caiu na água", "líquido", "liquido", "chuva"],
  software: ["lento", "travando", "travado", "loop", "reinicia", "reinício", "brick", "lentidão", "lentidao"],
  conector: ["conector", "carregador", "não carrega", "nao carrega", "porta de carga", "usb", "tipo c", "tipo-c", "lightning"],
  camera: ["câmera", "camera", "lente", "foto borrada", "foco"],
  audio: ["som", "áudio", "audio", "alto-falante", "alto falante", "microfone", "fone", "vibracall"],
  teclado: ["teclado", "tecla", "digitar"],
  garantia: ["garantia", "garantido"],
  duracao: ["quanto tempo", "demora", "prazo", "fica pronto", "entrega"],
  whatsapp: ["whatsapp", "zap", "telefone", "humano", "atendente", "ligar"],
  local: ["onde", "endereço", "endereco", "fica", "localização", "localizacao"],
  horario: ["horário", "horario", "aberto", "fecha", "funciona", "funcionamento"],
  site: ["site", "página", "pagina", "link"],
};

function detectarIntencao(texto: string): string | null {
  const t = texto.toLowerCase();
  for (const [intencao, palavras] of Object.entries(INTENCOES)) {
    if (palavras.some((p) => t.includes(p))) return intencao;
  }
  return null;
}

function respostaLocal(intencao: string): string {
  const opts = RESPOSTAS_LOCAIS[intencao];
  if (!opts || opts.length === 0) return null as unknown as string;
  return opts[Math.floor(Math.random() * opts.length)];
}

function textoRuim(t: string | null | undefined): boolean {
  if (!t || t.trim().length < 8) return true;
  const ruins = ["rate limit", "too many requests", "cannot assist", "api key", "authentication", "i'm sorry", "as an ai"];
  return ruins.some((r) => t.toLowerCase().includes(r));
}

// ──────────── Provedores de IA ────────────
async function callLovableAI(message: string): Promise<string | null> {
  const key = Deno.env.get("LOVABLE_API_KEY");
  if (!key) return null;
  try {
    const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
        max_tokens: 150,
      }),
    });
    if (!r.ok) {
      console.error("LovableAI status:", r.status);
      return null;
    }
    const data = await r.json();
    return data?.choices?.[0]?.message?.content?.trim() ?? null;
  } catch {
    console.error("LovableAI exception");
    return null;
  }
}

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
        max_tokens: 150,
        system: SYSTEM_PROMPT,
        messages: [{ role: "user", content: message }],
      }),
    });
    if (!r.ok) { console.error("Anthropic status:", r.status); return null; }
    const data = await r.json();
    return data?.content?.[0]?.text?.trim() ?? null;
  } catch { console.error("Anthropic exception"); return null; }
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
          generationConfig: { maxOutputTokens: 150, temperature: 0.4 },
        }),
      },
    );
    if (!r.ok) { console.error("Gemini status:", r.status); return null; }
    const data = await r.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? null;
  } catch { console.error("Gemini exception"); return null; }
}

async function callGrok(message: string): Promise<string | null> {
  const key = Deno.env.get("GROK_API_KEY");
  if (!key) return null;
  try {
    const r = await fetch("https://api.x.ai/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "grok-2-latest",
        max_tokens: 150,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message },
        ],
      }),
    });
    if (!r.ok) { console.error("Grok status:", r.status); return null; }
    const data = await r.json();
    return data?.choices?.[0]?.message?.content?.trim() ?? null;
  } catch { console.error("Grok exception"); return null; }
}

// Cascata IA: Lovable → Anthropic → Gemini → Grok
async function callAI(message: string): Promise<string | null> {
  const providers = [callLovableAI, callAnthropic, callGemini, callGrok];
  for (const fn of providers) {
    const reply = await fn(message);
    if (reply && !textoRuim(reply)) return reply;
  }
  return null;
}

// ──────────── Handler ────────────
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

    const trimmed = message.slice(0, 300).trim();

    // 1) Intenção local primeiro (custo zero, instantâneo)
    const intencao = detectarIntencao(trimmed);
    if (intencao) {
      const local = respostaLocal(intencao);
      if (local) {
        return new Response(JSON.stringify({ reply: local, source: `local:${intencao}` }), {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
    }

    // 2) IA em cascata
    const aiReply = await callAI(trimmed);
    if (aiReply) {
      return new Response(JSON.stringify({ reply: aiReply, source: "ai" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // 3) Fallback amigável (não só "vai pro WhatsApp")
    const fallback = `🤔 Posso te ajudar melhor se me passar a marca, o modelo e o defeito do aparelho. Se preferir, fale direto no WhatsApp: ${WA}`;
    return new Response(JSON.stringify({ reply: fallback, source: "fallback" }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("maia-chat error:", e);
    return new Response(
      JSON.stringify({ reply: `Tive um probleminha. Fale com a gente no WhatsApp: ${WA}`, source: "error" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
