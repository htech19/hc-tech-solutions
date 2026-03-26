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

  // --- FONES COM FIO / GAMER ---
  { id: 20, name: "Fone de Ouvido HD Esterio lef 1002", category: "Fones com Fio & Gamer", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 22, name: "Fone Gamer Knc-029", category: "Fones com Fio & Gamer", image: "https://images.unsplash.com/photo-1546435770-a3e426ff472b?w=500" },

  // --- CABOS E CONECTIVIDADE ---
  { id: 30, name: "Cabo de Dados Altomex AL-305 (V8/IPH/TYPE-C)", category: "Cabos & Conectividade", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500" },
  { id: 35, name: "Cabo Turbo Kaidi KD-306", category: "Cabos & Conectividade", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500", badge: "Turbo" },
  { id: 40, name: "Cabo HDMI Profissional", category: "Cabos & Conectividade", image: "https://images.unsplash.com/photo-1601574901083-086938d2121e?w=500" },

  // --- CARREGADORES E POWER BANKS ---
  { id: 101, name: "Carregador 20w Tipo C", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500", badge: "Top Venda" },
  { id: 164, name: "Fonte Universal LEY-668", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500" },
  { id: 50, name: "Power Bank AL-913 10.000mAh", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500" },

  // --- SOM AUTOMOTIVO ---
  { id: 200, name: "Som Automotivo Mp3 LEY-1920", category: "Som Automotivo", image: "https://images.unsplash.com/photo-1558531156-611af02270bc?w=500" },
  { id: 201, name: "Som Automotivo Mp5 Ley-1852", category: "Som Automotivo", image: "https://images.unsplash.com/photo-1558531156-611af02270bc?w=500" },

  // --- CONTROLES, DRONES E CÂMERAS ---
  { id: 300, name: "Drone Al-2725 Profissional", category: "Controles & Câmeras", image: "https://images.unsplash.com/photo-1473968512647-3e44a224fe8f?w=500" },
  { id: 301, name: "Câmera Altomex 5 Antenas WiFi", category: "Controles & Câmeras", image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500", badge: "Segurança" },
  { id: 310, name: "Controle Remoto Smart TV Samsung/LG", category: "Controles & Câmeras", image: "https://images.unsplash.com/photo-1593414220166-085ca80e927b?w=500" },

  // --- SMARTWATCHES ---
  { id: 167, name: "Smartwatch Kw62max Original", category: "Smartwatches", image: "https://images.unsplash.com/photo-1544117518-30dd07835b6d?w=500", badge: "Premium" },
  { id: 168, name: "Smartwatch G 5mini T", category: "Smartwatches", image: "https://images.unsplash.com/photo-1544117518-30dd07835b6d?w=500" },

  // --- ARMAZENAMENTO ---
  { id: 400, name: "Cartão de Memória 32GB/64GB Class 10", category: "Armazenamento", image: "https://images.unsplash.com/photo-1560762484-813fc97650a0?w=500" },
  { id: 405, name: "Pendrive 64GB / 128GB Lelong", category: "Armazenamento", image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=500" },

  // --- PELÍCULAS ---
  { id: "pel-01", name: "Películas de Vidro 3D/Privacidade (Todas as marcas)", category: "Películas", image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500", badge: "Sob Consulta" }
];
