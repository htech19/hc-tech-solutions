export interface Product {
  id: number | string;
  name: string;
  category: string;
  image: string;
  badge?: string;
  whatsappUrl: string; // Nova propriedade para UX de conversão
}

// Configuração do seu WhatsApp - CORRIGIDO
const SEU_NUMERO = "5511940562933"; // Seu número HC Tech
const generateWaLink = (productName: string) => 
  `https://wa.me/${SEU_NUMERO}?text=Olá! Gostaria de consultar o valor do produto: ${encodeURIComponent(productName)}`;

export const products: Product[] = [
  // == FONES & HEADSETS ==
  { id: 1, name: "Fone Bluetooth KD-790", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-kd790.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth KD-790") },
  { id: 2, name: "Fone Bluetooth KD-788", category: "Fones & Headsets", image: "https://i.ibb.co/3yN2bP8/fone-kd788.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth KD-788") },
  { id: 3, name: "Fone Bluetooth Knc-4219", category: "Fones & Headsets", image: "https://i.ibb.co/6gZfK9R/fone-knc4219.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth Knc-4219") },
  { id: 4, name: "Fone Bluetooth Knc-5601", category: "Fones & Headsets", image: "https://i.ibb.co/wMhQf3L/fone-knc5601.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth Knc-5601") },
  { id: 5, name: "Headset Bluetooth Kaidi KD-752", category: "Fones & Headsets", image: "https://i.ibb.co/2P8rL5n/headset-kd752.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Headset Bluetooth Kaidi KD-752") },
  { id: 6, name: "Headset Gamer Kaidi KD-632", category: "Fones & Headsets", image: "https://i.ibb.co/1vYp9jQ/headset-gamer-kd632.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Headset Gamer Kaidi KD-632") },
  { id: 7, name: "Fone de Ouvido Bluetooth P9", category: "Fones & Headsets", image: "https://i.ibb.co/k2mJ8h2/fone-p9pro.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone de Ouvido Bluetooth P9") },
  { id: 8, name: "Headset de Gatinho LEF-1058", category: "Fones & Headsets", image: "https://i.ibb.co/99mK3p1/headset-gatinho.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Headset de Gatinho LEF-1058") },

  // == CARREGADORES & POWER BANKS ==
  { id: 9, name: "Power Bank 20000mah", category: "Carregadores & Power Banks", image: "https://i.ibb.co/0jR5b6r/powerbank-20000mah.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Power Bank 20000mah") },
  { id: 10, name: "Power Bank 10000mah KD-952", category: "Carregadores & Power Banks", image: "https://i.ibb.co/KsGq9tY/powerbank-kd952.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Power Bank 10000mah KD-952") },
  { id: 11, name: "Power Bank 10000mah KD-999", category: "Carregadores & Power Banks", image: "https://i.ibb.co/hF3mP2w/powerbank-kd999.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Power Bank 10000mah KD-999") },
  { id: 12, name: "Cabo Usb/V8 (2 Metros)", category: "Carregadores & Power Banks", image: "https://i.ibb.co/3hW5qY8/cabo-usb-v8-2m.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Cabo Usb/V8 (2 Metros)") },
  { id: 13, name: "Tipo-C/Tipo-C", category: "Carregadores & Power Banks", image: "https://i.ibb.co/5nR8vL2/cabo-tipo-c-tipo-c.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Tipo-C/Tipo-C") },
  { id: 14, name: "Carregador Turbo Iphone/Lightning", category: "Carregadores & Power Banks", image: "https://i.ibb.co/W2p8n5R/carregador-iphone.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Carregador Turbo Iphone/Lightning") },
  { id: 15, name: "Carregador 50W Tipo-C/Tipo-C", category: "Carregadores & Power Banks", image: "https://i.ibb.co/7tYb3mQ/carregador-50w.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Carregador 50W Tipo-C/Tipo-C") },
  { id: 16, name: "Carregador Veícular Com Cabo Tipo-C", category: "Carregadores & Power Banks", image: "https://i.ibb.co/4PqZf6L/carregador-veicular.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Carregador Veícular Com Cabo Tipo-C") },

  // == SMARTWATCHES ==
  { id: 17, name: "Smartwatch Kw62max", category: "Smartwatches", image: "https://i.ibb.co/6YRmP9w/smartwatch-kw62max.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch Kw62max") },
  { id: 18, name: "Smartwatch 10mini", category: "Smartwatches", image: "https://i.ibb.co/2kW5L8r/smartwatch-10mini.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch 10mini") },
  { id: 19, name: "Smartwatch Bei ultra mini", category: "Smartwatches", image: "https://i.ibb.co/qMh3n2P/smartwatch-beiultra.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch Bei ultra mini") },
  { id: 20, name: "Smartwatch S10 pro", category: "Smartwatches", image: "https://i.ibb.co/DwQ8b6Y/smartwatch-s10pro.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch S10 pro") },
  { id: 21, name: "Smartwatch ultra 4 pro", category: "Smartwatches", image: "https://i.ibb.co/1J9mP3L/smartwatch-ultra4pro.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Smartwatch ultra 4 pro") },

  // == INFORMÁTICA & PERIFÉRICOS ==
  { id: 22, name: "Teclado Gamer RBG LEY-2088", category: "Informática & Periféricos", image: "https://i.ibb.co/8X3qY6R/teclado-ley2088.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Teclado Gamer RBG LEY-2088") },
  { id: 23, name: "Mouse com Fio e Led LEY-172", category: "Informática & Periféricos", image: "https://i.ibb.co/wB5mK9w/mouse-ley172.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Mouse com Fio e Led LEY-172") },
  { id: 24, name: "Pendrive 64GB AL-8U-64", category: "Informática & Periféricos", image: "https://i.ibb.co/7rP2vL8/pendrive-64gb.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Pendrive 64GB AL-8U-64") },
  { id: 25, name: "Cartão de Memória 32GB", category: "Informática & Periféricos", image: "https://i.ibb.co/3yN2bP8/cartao-memoria-32gb.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Cartão de Memória 32GB") },
  { id: 26, name: "Teclado Mecânico RBG Ley-2080", category: "Informática & Periféricos", image: "https://i.ibb.co/DwQ8b6Y/teclado-ley2080.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Teclado Mecânico RBG Ley-2080") },

  // == CAIXAS DE SOM ==
  { id: 27, name: "Caixa de som KNC-828", category: "Caixas de Som", image: "https://i.ibb.co/6YRmP9w/caixa-som-knc828.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Caixa de som KNC-828") },
  { id: 28, name: "Caixa de Som Al-9999", category: "Caixas de Som", image: "https://i.ibb.co/2kW5L8r/caixa-som-al9999.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Caixa de Som Al-9999") },
  { id: 29, name: "Boombox Eletromex 50w", category: "Caixas de Som", image: "https://i.ibb.co/qMh3n2P/boombox-eletromex.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Boombox Eletromex 50w") },

  // == ELETRÔNICOS & ACESSÓRIOS ==
  { id: 30, name: "Suporte de Celular para Carro LEY-1694", category: "Acessórios", image: "https://i.ibb.co/1J9mP3L/suporte-carro-ley1694.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Suporte de Celular para Carro LEY-1694") },
  { id: 31, name: "Drone Al-2768", category: "Eletrônicos & Drones", image: "https://i.ibb.co/8X3qY6R/drone-al2768.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Drone Al-2768") },
  { id: 32, name: "Câmera Altomex 5 Antenas", category: "Eletrônicos & Drones", image: "https://i.ibb.co/wB5mK9w/camera-altomex.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Câmera Altomex 5 Antenas") },
  { id: 33, name: "Som Automotivo Mp5 Ley-1852", category: "Automotivo", image: "https://i.ibb.co/7rP2vL8/som-mp5-ley1852.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Som Automotivo Mp5 Ley-1852") },
  { id: 34, name: "Marmita Elétrica Inox LEY-2200", category: "Utilidades", image: "https://i.ibb.co/3hW5qY8/marmita-eletrica.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Marmita Elétrica Inox LEY-2200") },
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
