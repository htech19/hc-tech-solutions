export interface Product {
  id: number | string;
  name: string;
  category: string;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  // == FONES & HEADSETS ==
  { id: 1, name: "Fone Bluetooth KD-790", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", badge: "Consultar no Whats" },
  { id: 2, name: "Fone Bluetooth KD-788", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1572536141079-56d93a175ee2?w=500", badge: "Consultar no Whats" },
  { id: 3, name: "Fone Bluetooth Knc-4219", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", badge: "Consultar no Whats" },
  { id: 4, name: "Fone Bluetooth Knc-5601", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500", badge: "Consultar no Whats" },
  { id: 5, name: "Headset Bluetooth Kaidi KD-752", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1618366712277-721626c13867?w=500", badge: "Consultar no Whats" },
  { id: 6, name: "Headset Gamer Kaidi KD-632", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=500", badge: "Consultar no Whats" },
  { id: 7, name: "Fone de Ouvido Bluetooth P9", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500", badge: "Consultar no Whats" },
  { id: 8, name: "Headset de Gatinho LEF-1058", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500", badge: "Consultar no Whats" },

  // == CARREGADORES & POWER BANKS ==
  { id: 9, name: "Power Bank 20000mah", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500", badge: "Consultar no Whats" },
  { id: 10, name: "Power Bank 10000mah KD-952", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500", badge: "Consultar no Whats" },
  { id: 11, name: "Power Bank 10000mah KD-999", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500", badge: "Consultar no Whats" },
  { id: 12, name: "Cabo Usb/V8 (2 Metros)", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1619193100630-f5a63968600d?w=500", badge: "Consultar no Whats" },
  { id: 13, name: "Tipo-C/Tipo-C", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500", badge: "Consultar no Whats" },
  { id: 14, name: "Carregador Turbo Iphone/Lightning", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500", badge: "Consultar no Whats" },
  { id: 15, name: "Carregador 50W Tipo-C/Tipo-C", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500", badge: "Consultar no Whats" },
  { id: 16, name: "Carregador Veícular Com Cabo Tipo-C", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500", badge: "Consultar no Whats" },

  // == SMARTWATCHES ==
  { id: 17, name: "Smartwatch Kw62max", category: "Smartwatches", image: "https://images.unsplash.com/photo-1544117518-30dd07835b6d?w=500", badge: "Consultar no Whats" },
  { id: 18, name: "Smartwatch 10mini", category: "Smartwatches", image: "https://images.unsplash.com/photo-1508685096489-775b0ef3f973?w=500", badge: "Consultar no Whats" },
  { id: 19, name: "Smartwatch Bei ultra mini", category: "Smartwatches", image: "https://images.unsplash.com/photo-1544117518-30dd07835b6d?w=500", badge: "Consultar no Whats" },
  { id: 20, name: "Smartwatch S10 pro", category: "Smartwatches", image: "https://images.unsplash.com/photo-1508685096489-775b0ef3f973?w=500", badge: "Consultar no Whats" },
  { id: 21, name: "Smartwatch ultra 4 pro", category: "Smartwatches", image: "https://images.unsplash.com/photo-1544117518-30dd07835b6d?w=500", badge: "Consultar no Whats" },

  // == INFORMÁTICA & PERIFÉRICOS ==
  { id: 22, name: "Teclado Gamer RBG LEY-2088", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", badge: "Consultar no Whats" },
  { id: 23, name: "Mouse com Fio e Led LEY-172", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", badge: "Consultar no Whats" },
  { id: 24, name: "Pendrive 64GB AL-8U-64", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500", badge: "Consultar no Whats" },
  { id: 25, name: "Cartão de Memória 32GB", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1558244402-286dd748c593?w=500", badge: "Consultar no Whats" },
  { id: 26, name: "Teclado Mecânico RBG Ley-2080", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", badge: "Consultar no Whats" },

  // == CAIXAS DE SOM ==
  { id: 27, name: "Caixa de som KNC-828", category: "Caixas de Som", image: "https://images.unsplash.com/photo-1589003020619-4786ec018593?w=500", badge: "Consultar no Whats" },
  { id: 28, name: "Caixa de Som Al-9999", category: "Caixas de Som", image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500", badge: "Consultar no Whats" },
  { id: 29, name: "Boombox Eletromex 50w", category: "Caixas de Som", image: "https://images.unsplash.com/photo-1589003020619-4786ec018593?w=500", badge: "Consultar no Whats" },

  // == ELETRÔNICOS & ACESSÓRIOS ==
  { id: 30, name: "Suporte de Celular para Carro LEY-1694", category: "Acessórios", image: "https://images.unsplash.com/photo-1586105251261-72a756657311?w=500", badge: "Consultar no Whats" },
  { id: 31, name: "Drone Al-2768", category: "Eletrônicos & Drones", image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=500", badge: "Consultar no Whats" },
  { id: 32, name: "Câmera Altomex 5 Antenas", category: "Eletrônicos & Drones", image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500", badge: "Consultar no Whats" },
  { id: 33, name: "Som Automotivo Mp5 Ley-1852", category: "Automotivo", image: "https://images.unsplash.com/photo-1593123024833-28682e703923?w=500", badge: "Consultar no Whats" },
  { id: 34, name: "Marmita Elétrica Inox LEY-2200", category: "Utilidades", image: "https://images.unsplash.com/photo-1584263343369-058f44483756?w=500", badge: "Consultar no Whats" },
];

export const categories = [
  "Todos",
  "Fones & Headsets",
  "Carregadores & Power Banks",
  "Smartwatches",
  "Informática & Periféricos",
  "Caixas de Som",
  "Acessórios",
  "Eletrônicos & Drones",
  "Automotivo",
  "Utilidades",
  "Serviços Digitais"
];
