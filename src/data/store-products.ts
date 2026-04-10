export interface Product {
  id: number | string;
  name: string;
  category: string;
  image: string;
  badge?: string;
  whatsappUrl: string; // Nova propriedade para UX de conversão
}

// Configuração do seu WhatsApp
const SEU_NUMERO = "5511999999999"; // Substitua pelo seu número real (DDI + DDD + Número)
const generateWaLink = (productName: string) => 
  `https://wa.me/${SEU_NUMERO}?text=Olá! Gostaria de consultar o valor do produto: ${encodeURIComponent(productName)}`;

export const products: Product[] = [
  // == FONES & HEADSETS ==
  { id: 1, name: "Fone Bluetooth KD-790", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth KD-790") },
  { id: 2, name: "Fone Bluetooth KD-788", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1572536141079-56d93a175ee2?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth KD-788") },
  { id: 3, name: "Fone Bluetooth Knc-4219", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth Knc-4219") },
  { id: 4, name: "Fone Bluetooth Knc-5601", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth Knc-5601") },
  { id: 5, name: "Headset Bluetooth Kaidi KD-752", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Headset Bluetooth Kaidi KD-752") },
  { id: 6, name: "Headset Gamer Kaidi KD-632", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Headset Gamer Kaidi KD-632") },
  { id: 7, name: "Fone de Ouvido Bluetooth P9", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone de Ouvido Bluetooth P9") },
  { id: 8, name: "Headset de Gatinho LEF-1058", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Headset de Gatinho LEF-1058") },

  // == CARREGADORES & POWER BANKS ==
  { id: 9, name: "Power Bank 20000mah", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Power Bank 20000mah") },
  { id: 10, name: "Power Bank 10000mah KD-952", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1585338665814-15b8ec523192?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Power Bank 10000mah KD-952") },
  { id: 11, name: "Power Bank 10000mah KD-999", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Power Bank 10000mah KD-999") },
  { id: 12, name: "Cabo Usb/V8 (2 Metros)", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Cabo Usb/V8 (2 Metros)") },
  { id: 13, name: "Tipo-C/Tipo-C", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Tipo-C/Tipo-C") },
  { id: 14, name: "Carregador Turbo Iphone/Lightning", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Carregador Turbo Iphone/Lightning") },
  { id: 15, name: "Carregador 50W Tipo-C/Tipo-C", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1592892111425-15e04305f961?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Carregador 50W Tipo-C/Tipo-C") },
  { id: 16, name: "Carregador Veícular Com Cabo Tipo-C", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1579591919791-0e3737ae3808?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Carregador Veícular Com Cabo Tipo-C") },

  // == SMARTWATCHES ==
  { id: 17, name: "Smartwatch Kw62max", category: "Smartwatches", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch Kw62max") },
  { id: 18, name: "Smartwatch 10mini", category: "Smartwatches", image: "https://images.unsplash.com/photo-1434494878577-86c23bdd0639?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch 10mini") },
  { id: 19, name: "Smartwatch Bei ultra mini", category: "Smartwatches", image: "https://images.unsplash.com/photo-1508685096489-775b0ef3f973?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch Bei ultra mini") },
  { id: 20, name: "Smartwatch S10 pro", category: "Smartwatches", image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch S10 pro") },
  { id: 21, name: "Smartwatch ultra 4 pro", category: "Smartwatches", image: "https://images.unsplash.com/photo-1544117518-30dd07835b6d?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch ultra 4 pro") },

  // == INFORMÁTICA & PERIFÉRICOS ==
  { id: 22, name: "Teclado Gamer RBG LEY-2088", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Teclado Gamer RBG LEY-2088") },
  { id: 23, name: "Mouse com Fio e Led LEY-172", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Mouse com Fio e Led LEY-172") },
  { id: 24, name: "Pendrive 64GB AL-8U-64", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1600007184954-18c7fb45696d?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Pendrive 64GB AL-8U-64") },
  { id: 25, name: "Cartão de Memória 32GB", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1558244402-286dd748c593?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Cartão de Memória 32GB") },
  { id: 26, name: "Teclado Mecânico RBG Ley-2080", category: "Informática & Periféricos", image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Teclado Mecânico RBG Ley-2080") },

  // == CAIXAS DE SOM ==
  { id: 27, name: "Caixa de som KNC-828", category: "Caixas de Som", image: "https://images.unsplash.com/photo-1608156639585-b3a032ef9689?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Caixa de som KNC-828") },
  { id: 28, name: "Caixa de Som Al-9999", category: "Caixas de Som", image: "https://images.unsplash.com/photo-1589003020619-4786ec018593?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Caixa de Som Al-9999") },
  { id: 29, name: "Boombox Eletromex 50w", category: "Caixas de Som", image: "https://images.unsplash.com/photo-1612198088191-d7311c58634e?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Boombox Eletromex 50w") },

  // == ELETRÔNICOS & ACESSÓRIOS ==
  { id: 30, name: "Suporte de Celular para Carro LEY-1694", category: "Acessórios", image: "https://images.unsplash.com/photo-1586105251261-72a756657311?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Suporte de Celular para Carro LEY-1694") },
  { id: 31, name: "Drone Al-2768", category: "Eletrônicos & Drones", image: "https://images.unsplash.com/photo-1507504031003-b417219a0fde?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Drone Al-2768") },
  { id: 32, name: "Câmera Altomex 5 Antenas", category: "Eletrônicos & Drones", image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Câmera Altomex 5 Antenas") },
  { id: 33, name: "Som Automotivo Mp5 Ley-1852", category: "Automotivo", image: "https://images.unsplash.com/photo-1563960232434-b90958e8eeb6?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Som Automotivo Mp5 Ley-1852") },
  { id: 34, name: "Marmita Elétrica Inox LEY-2200", category: "Utilidades", image: "https://images.unsplash.com/photo-1584263343369-058f44483756?w=500", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Marmita Elétrica Inox LEY-2200") },
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
