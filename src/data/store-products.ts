export const categories = [
  "Todos",
  "Fones & Headsets",
  "Fones com Fio & Gamer",
  "Cabos & Conectividade",
  "Carregadores & Power Banks",
  "Som Automotivo",
  "Controles & Câmeras",
  "Armazenamento",
  "Serviços Digitais",
  "Smartwatches",
  "Películas",
  "Diversos"
];

export interface Product {
  id: number | string;
  name: string;
  category: string;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  // --- SERVIÇOS DIGITAIS ---
  { id: "serv-01", name: "Configuração WhatsApp Business & Catálogo", category: "Serviços Digitais", image: "https://images.unsplash.com/photo-1614680376593-902f74cc0d41?w=500", badge: "Consultoria" },
  { id: "serv-02", name: "Anúncios Google Ads (Tráfego Pago)", category: "Serviços Digitais", image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500", badge: "Google" },
  { id: "serv-03", name: "Gestão de Facebook & Instagram Ads", category: "Serviços Digitais", image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500", badge: "Social" },

  // --- FONES BLUETOOTH / HEADSETS ---
  { id: 1, name: "Fone Bluetooth KD-790", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", badge: "Mais Vendido" },
  { id: 2, name: "Fone Bluetooth KD-788", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 3, name: "Fone Bluetooth Knc-4219", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 4, name: "Fone Bluetooth Knc-5601", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 7, name: "Headphone Bluetooth KD-750", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500" },
  { id: 8, name: "Headset Bluetooth Kaidi KD-752", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500" },
  { id: 9, name: "Headset Gamer Kaidi KD-632", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1546435770-a3e426ff472b?w=500", badge: "Gamer" },
  { id: 15, name: "Fone de Ouvido Bluetooth P9", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },

  // --- CABOS E CONECTIVIDADE ---
  { id: 30, name: "Cabo de Dados Altomex AL-305 (V8/IPH/TYPE-C)", category: "Cabos & Conectividade", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500" },
  { id: 35, name: "Cabo Turbo Kaidi KD-306", category: "Cabos & Conectividade", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500", badge: "Turbo" },

  // --- CARREGADORES E POWER BANKS ---
  { id: 101, name: "Carregador 20w Tipo C", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500", badge: "Top Venda" },
  { id: 167, name: "Smartwatch Kw62max Original", category: "Smartwatches", image: "https://images.unsplash.com/photo-1544117518-30dd07835b6d?w=500", badge: "Premium" }
];
