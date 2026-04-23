import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, ChevronRight, Home } from 'lucide-react';
import screenCatalog from './screenCatalog.json';

// ────────────────────────────────────────────────────────────────
// TIPOS
// ────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface MenuState {
  current: 'inicio' | 'servicos' | 'tipo' | 'telas' | 'marca' | 'modelo' | 'tipo_tela' | 'orcamento';
  servico?: string;
  marca?: string;
  modelo?: string;
}

// ────────────────────────────────────────────────────────────────
// CONFIGURAÇÃO
// ────────────────────────────────────────────────────────────────
const CONFIG = {
  wa_numero: import.meta.env.VITE_WHATSAPP_NUMERO || '5511940562933',
  site_url: import.meta.env.VITE_SITE_URL || 'https://hctechinfocell.com.br',
  anthropic_key: import.meta.env.VITE_ANTHROPIC_API_KEY || '',
  openrouter_key: import.meta.env.VITE_OPENROUTER_API_KEY || '',
  groq_key: import.meta.env.VITE_GROQ_API_KEY || '',
};

const SERVICOS_CELULAR = {
  tela: { icon: '🔨', label: 'Troca de Tela', desc: 'Display, touch e vidro com garantia' },
  bateria: { icon: '⚡', label: 'Troca de Bateria', desc: 'Original ou premium 90 dias garantia' },
  naoliga: { icon: '❌', label: 'Não Liga / Dano de Placa', desc: 'Diagnóstico e reparo SMD' },
  agua: { icon: '💧', label: 'Dano por Líquido', desc: 'Higienização e desoxidação' },
  software: { icon: '🔄', label: 'Reparo de Software', desc: 'Loop, brick, reinício automático' },
  conector: { icon: '🔌', label: 'Conector de Carga', desc: 'USB-C, Lightning ou Micro USB' },
  camera: { icon: '📷', label: 'Câmera com Defeito', desc: 'Traseira, frontal ou lente' },
  audio: { icon: '🔊', label: 'Áudio / Microfone', desc: 'Alto-falante, fone ou microfone' },
  outro: { icon: '🛠️', label: 'Outro Problema', desc: 'Conte-nos o problema' },
};

const SERVICOS_NOTEBOOK = {
  tela: { icon: '📺', label: 'Troca de Tela', desc: 'Display, manchas, backlight' },
  teclado: { icon: '⌨️', label: 'Troca de Teclado', desc: 'Teclas, líquido derramado' },
  bateria: { icon: '🔋', label: 'Bateria', desc: 'Substituição ou diagnóstico' },
  hd: { icon: '💾', label: 'SSD / HD', desc: 'Troca ou recuperação' },
  cooler: { icon: '❄️', label: 'Cooler / Ventilação', desc: 'Limpeza, óleo ou troca' },
  placa: { icon: '⚙️', label: 'Placa-mãe', desc: 'Diagnóstico e reparo' },
  conector: { icon: '🔌', label: 'Conector de Carga', desc: 'Jack ou porta USB-C' },
  outro: { icon: '🛠️', label: 'Outro Problema', desc: 'Descreva o problema' },
};

// ────────────────────────────────────────────────────────────────
// UTILITÁRIOS
// ────────────────────────────────────────────────────────────────
const wa_link = (mensagem: string) => {
  const msg = encodeURIComponent(mensagem);
  return `https://wa.me/${CONFIG.wa_numero}?text=${msg}`;
};

const detectar_intencao = (texto: string): string => {
  const t = texto.toLowerCase();
  
  const padroes: [RegExp, string][] = [
    (/tela|display|vidro|quebrad/i, 'tela'),
    (/bateria|carga|energia|carrega/i, 'bateria'),
    (/não liga|dead|não funciona|brick/i, 'naoliga'),
    (/água|chuva|molhad|líquido|derramad/i, 'agua'),
    (/lento|travad|loop|reinicia|reinício|lag/i, 'software'),
    (/carregador|conector|jack|usb|lightning|tipo[ -]c/i, 'conector'),
    (/câmera|foto|imagem|lente|blur/i, 'camera'),
    (/som|áudio|alto[ -]falante|microfone|fone|speaker/i, 'audio'),
    (/teclado|tecla|digita/i, 'teclado'),
    (/preço|tabela|valor|quanto/i, 'preco'),
    (/orçamento|orcamento|quanto custa|tabela/i, 'orcamento'),
  ];

  for (const [regex, intencao] of padroes) {
    if (regex.test(t)) return intencao;
  }
  return 'outro';
};

const resposta_local = (intencao: string): string => {
  const respostas: Record<string, string> = {
    tela: '🔨 Trocamos telas de celular e notebook com peças selecionadas e garantia HC Tech. Qual é seu aparelho?',
    bateria: '⚡ Temos bateria original e premium com garantia. Qual modelo seu aparelho?',
    naoliga: '❌ Fazemos diagnóstico e reparo em nível de componente. Mande foto ou descreva o problema.',
    agua: '💧 Higienização e desoxidação com técnica profissional. Qual seu aparelho?',
    software: '🔄 Corrigimos loop, brick, lentidão e travamentos. Qual modelo?',
    conector: '🔌 Trocamos conector USB-C, Lightning e Micro USB com garantia.',
    camera: '📷 Trocamos câmera traseira, frontal ou lente. Qual seu aparelho?',
    audio: '🔊 Reparamos alto-falante, fone e microfone. Qual seu modelo?',
    teclado: '⌨️ Trocamos teclado de notebook. Qual modelo você tem?',
    preco: '💰 Consulte nossa tabela de preços usando o menu de telas. Qual marca/modelo?',
    orcamento: '💎 Faça seu orçamento conosco! Qual é seu aparelho e qual o problema principal?',
    outro: '👋 Olá! Somos a HC Tech. Como podemos ajudar? (tela, bateria, software, etc.)',
  };
  return respostas[intencao] || respostas.outro;
};

// ────────────────────────────────────────────────────────────────
// INTEGRAÇÃO COM IA
// ────────────────────────────────────────────────────────────────
interface IAProvider {
  name: string;
  call: (messages: Array<{ role: string; content: string }>) => Promise<string>;
}

const createAnthropicProvider = (): IAProvider => ({
  name: 'Anthropic',
  call: async (messages) => {
    if (!CONFIG.anthropic_key) throw new Error('Anthropic API key not configured');
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CONFIG.anthropic_key,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 500,
        system: `Você é um assistente de atendimento premium da HC Tech, empresa especializada em consertos e vendas de eletrônicos.
Persona: HC Tech IA Elite - Atencioso, rápido e objetivo.
Responda em português brasileiro natural.
Se não conseguir resolver, sempre ofereça contato via WhatsApp.
Seja conversacional mas eficiente.`,
        messages: messages.map(m => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Anthropic API error');
    }

    const data = await response.json();
    return data.content[0].text;
  },
});

const createOpenRouterProvider = (): IAProvider => ({
  name: 'OpenRouter',
  call: async (messages) => {
    if (!CONFIG.openrouter_key) throw new Error('OpenRouter API key not configured');
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CONFIG.openrouter_key}`,
        'HTTP-Referer': CONFIG.site_url,
        'X-Title': 'HC Tech Chat',
      },
      body: JSON.stringify({
        model: 'meta-llama/llama-3.3-70b-instruct:free',
        max_tokens: 500,
        messages: messages.map(m => ({
          role: m.role,
          content: m.content,
        })),
        system: `Você é um assistente de atendimento da HC Tech - especialista em consertos de eletrônicos.
Responda em português brasileiro, seja amigável e objetivo.
Ofereça sempre opções de contato (WhatsApp, chat).`,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'OpenRouter error');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  },
});

const createGroqProvider = (): IAProvider => ({
  name: 'Groq',
  call: async (messages) => {
    if (!CONFIG.groq_key) throw new Error('Groq API key not configured');
    
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${CONFIG.groq_key}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        max_tokens: 500,
        messages: messages.map(m => ({
          role: m.role,
          content: m.content,
        })),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || 'Groq error');
    }

    const data = await response.json();
    return data.choices[0].message.content;
  },
});

const consultarIA = async (messages: Array<{ role: string; content: string }>): Promise<string | null> => {
  const providers: IAProvider[] = [];
  
  if (CONFIG.anthropic_key) providers.push(createAnthropicProvider());
  if (CONFIG.openrouter_key) providers.push(createOpenRouterProvider());
  if (CONFIG.groq_key) providers.push(createGroqProvider());

  for (const provider of providers) {
    try {
      console.log(`[IA] Tentando ${provider.name}...`);
      return await provider.call(messages);
    } catch (error) {
      console.warn(`[IA] ${provider.name} falhou:`, error);
      continue;
    }
  }
  
  return null;
};

// ────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ────────────────────────────────────────────────────────────────
export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [menu, setMenu] = useState<MenuState>({ current: 'inicio' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      role,
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    addMessage('user', userMessage);
    setLoading(true);

    try {
      // Construir contexto para IA
      const context = messages.map(m => ({
        role: m.role,
        content: m.content,
      })).concat({
        role: 'user',
        content: userMessage,
      });

      // Tentar IA (Anthropic → OpenRouter → Groq)
      let resposta = await consultarIA(context);

      // Fallback local se IA falhar
      if (!resposta) {
        const intencao = detectar_intencao(userMessage);
        resposta = resposta_local(intencao);
      }

      addMessage('assistant', resposta);
    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
      const intencao = detectar_intencao(userMessage);
      const resposta = resposta_local(intencao);
      addMessage('assistant', resposta);
    } finally {
      setLoading(false);
    }
  };

  const renderMenu = () => {
    switch (menu.current) {
      case 'tipo':
        return (
          <div className="space-y-2">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setMenu({ current: 'servicos', servico: 'celular' })}
                className="flex-1 bg-gradient-to-r from-[#00A651] to-[#008a3d] hover:from-[#008a3d] hover:to-[#006b2f] text-white py-3 rounded-lg font-medium transition-all"
              >
                📱 Celular
              </button>
              <button
                onClick={() => setMenu({ current: 'servicos', servico: 'notebook' })}
                className="flex-1 bg-gradient-to-r from-[#00A651] to-[#008a3d] hover:from-[#008a3d] hover:to-[#006b2f] text-white py-3 rounded-lg font-medium transition-all"
              >
                💻 Notebook
              </button>
            </div>
            <button
              onClick={() => setMenu({ current: 'telas' })}
              className="w-full bg-[#2a2a2a] hover:bg-[#353535] text-[#C0C2C0] py-2 rounded-lg transition-colors text-sm"
            >
              📊 Consultar Preço de Tela
            </button>
            <button
              onClick={() => setMenu({ current: 'inicio' })}
              className="w-full bg-[#2a2a2a] hover:bg-[#353535] text-[#C0C2C0] py-2 rounded-lg transition-colors text-sm"
            >
              <Home className="w-4 h-4 inline mr-2" /> Voltar
            </button>
          </div>
        );

      case 'servicos':
        const servicos = menu.servico === 'celular' ? SERVICOS_CELULAR : SERVICOS_NOTEBOOK;
        return (
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {Object.entries(servicos).map(([key, service]) => (
              <button
                key={key}
                onClick={() => {
                  addMessage('user', `Problema: ${service.label}`);
                  addMessage('assistant', `${service.icon} ${service.label}\n\n${service.desc}\n\nPode detalhar mais sobre seu aparelho?`);
                  setMenu({ current: 'inicio' });
                }}
                className="w-full text-left p-3 bg-[#2a2a2a] hover:bg-[#353535] rounded-lg transition-colors border-l-4 border-[#00A651]"
              >
                <div className="font-medium text-white">{service.icon} {service.label}</div>
                <div className="text-xs text-[#999] mt-1">{service.desc}</div>
              </button>
            ))}
            <button
              onClick={() => setMenu({ current: 'tipo' })}
              className="w-full bg-[#2a2a2a] hover:bg-[#353535] text-[#C0C2C0] py-2 rounded-lg transition-colors text-sm flex items-center justify-center gap-2"
            >
              ← Voltar
            </button>
          </div>
        );

      case 'telas':
        const marcas = screenCatalog.meta.marcas;
        return (
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {marcas.map(marca => (
              <button
                key={marca}
                onClick={() => setMenu({ current: 'marca', marca })}
                className="w-full p-3 bg-[#2a2a2a] hover:bg-[#353535] rounded-lg transition-colors flex items-center justify-between group"
              >
                <span className="text-white font-medium">{marca}</span>
                <ChevronRight className="w-4 h-4 text-[#00A651] group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
            <button
              onClick={() => setMenu({ current: 'tipo' })}
              className="w-full bg-[#2a2a2a] hover:bg-[#353535] text-[#C0C2C0] py-2 rounded-lg transition-colors text-sm"
            >
              ← Voltar
            </button>
          </div>
        );

      case 'marca':
        const modelos = Object.keys(screenCatalog.catalog[menu.marca!] || {});
        return (
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {modelos.map(modelo => (
              <button
                key={modelo}
                onClick={() => setMenu({ current: 'modelo', marca: menu.marca, modelo })}
                className="w-full p-3 bg-[#2a2a2a] hover:bg-[#353535] rounded-lg transition-colors flex items-center justify-between group text-left"
              >
                <span className="text-white font-medium text-sm">{modelo}</span>
                <ChevronRight className="w-4 h-4 text-[#00A651] group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
            <button
              onClick={() => setMenu({ current: 'telas' })}
              className="w-full bg-[#2a2a2a] hover:bg-[#353535] text-[#C0C2C0] py-2 rounded-lg transition-colors text-sm"
            >
              ← Voltar
            </button>
          </div>
        );

      case 'modelo':
        const tipos = Object.keys(screenCatalog.catalog[menu.marca!]?.[menu.modelo!] || {});
        return (
          <div className="space-y-2">
            {tipos.map(tipo => {
              const item = screenCatalog.catalog[menu.marca!][menu.modelo!][tipo];
              return (
                <div key={tipo} className="p-3 bg-[#2a2a2a] rounded-lg border border-[#00A651]/30">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-white">{menu.marca} {menu.modelo}</div>
                      <div className="text-xs text-[#C0C2C0]">{tipo}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#00A651] font-bold">{item.valor_str}</div>
                      <div className="text-xs text-[#666]">{item.codigo}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const msg = `💬 Quero orçamento para tela ${menu.marca} ${menu.modelo} (${tipo}) - ${item.valor_str}`;
                      addMessage('user', msg);
                      addMessage('assistant', `Perfeito! ${msg}\n\nPode me passar seu WhatsApp ou falar comigo aqui mesmo? Vou anotar e passar para nosso time.`);
                      setMenu({ current: 'inicio' });
                    }}
                    className="w-full mt-2 bg-[#00A651] hover:bg-[#008a3d] text-white text-sm py-1 rounded transition-colors"
                  >
                    Solicitar
                  </button>
                </div>
              );
            })}
            <button
              onClick={() => setMenu({ current: 'marca', marca: menu.marca })}
              className="w-full bg-[#2a2a2a] hover:bg-[#353535] text-[#C0C2C0] py-2 rounded-lg transition-colors text-sm"
            >
              ← Voltar
            </button>
          </div>
        );

      default:
        return (
          <div className="space-y-3">
            <div className="text-white text-sm mb-4">
              <div className="font-bold mb-2">👋 Olá! Bem-vindo à HC Tech</div>
              <div className="text-[#999] text-xs">Especialista em conserto de celulares e notebooks 📱💻</div>
            </div>
            <button
              onClick={() => setMenu({ current: 'tipo' })}
              className="w-full bg-gradient-to-r from-[#00A651] to-[#008a3d] hover:from-[#008a3d] hover:to-[#006b2f] text-white py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              💎 Solicitar Orçamento
            </button>
            <button
              onClick={() => setMenu({ current: 'telas' })}
              className="w-full bg-[#00A651]/20 hover:bg-[#00A651]/30 text-[#00A651] border border-[#00A651] py-2 rounded-lg font-medium transition-all flex items-center justify-center gap-2"
            >
              📊 Consultar Preço de Tela
            </button>
            <a
              href={wa_link('Olá! Vim pelo chat da HC Tech. 👋')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block bg-[#25D366] hover:bg-[#20ba5a] text-white py-2 rounded-lg font-medium transition-all text-center"
            >
              💬 WhatsApp Direto
            </a>
            <a
              href={CONFIG.site_url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block text-[#00A651] hover:text-[#008a3d] text-center py-2 text-sm transition-colors"
            >
              🌐 Visitar Site
            </a>
          </div>
        );
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-[#00A651] to-[#008a3d] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all flex items-center justify-center text-white z-40 animate-pulse"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-[#1a1a1a] rounded-2xl shadow-2xl flex flex-col z-50 border border-[#333]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#00A651] to-[#008a3d] p-4 rounded-t-2xl flex items-center justify-between">
        <div>
          <div className="font-bold text-white">HC Tech 🚀</div>
          <div className="text-xs text-[#00A651]/80">Online</div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#1a1a1a]">
        {messages.length === 0 && menu.current === 'inicio' && (
          <div className="h-full flex items-center justify-center">
            <div className="text-center text-[#666]">
              <MessageCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <div className="text-sm">Comece uma conversa!</div>
            </div>
          </div>
        )}
        
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap text-sm ${
                msg.role === 'user'
                  ? 'bg-[#00A651] text-white'
                  : 'bg-[#2a2a2a] text-[#e0e0e0]'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-[#2a2a2a] text-[#999] px-4 py-2 rounded-lg text-sm">
              Digitando<span className="animate-pulse">...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Menu ou Input */}
      {menu.current === 'inicio' && messages.length > 0 ? (
        <div className="p-4 bg-[#1a1a1a] border-t border-[#333]">
          {renderMenu()}
        </div>
      ) : menu.current !== 'inicio' ? (
        <div className="p-4 bg-[#1a1a1a] border-t border-[#333] max-h-64 overflow-y-auto">
          {renderMenu()}
        </div>
      ) : (
        <div className="p-4 bg-[#1a1a1a] border-t border-[#333]">
          {renderMenu()}
        </div>
      )}

      {/* Input Area */}
      {menu.current === 'inicio' && (
        <div className="p-4 bg-[#1a1a1a] border-t border-[#333] flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
            placeholder="Sua mensagem..."
            className="flex-1 bg-[#2a2a2a] border border-[#333] rounded-lg px-3 py-2 text-white text-sm placeholder-[#666] focus:outline-none focus:border-[#00A651] transition-colors"
            disabled={loading}
          />
          <button
            onClick={handleSendMessage}
            disabled={loading}
            className="bg-[#00A651] hover:bg-[#008a3d] disabled:opacity-50 text-white p-2 rounded-lg transition-colors"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
