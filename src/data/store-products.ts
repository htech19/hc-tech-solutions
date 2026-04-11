export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  whatsappUrl: string;
}

const SEU_NUMERO = "551194056293";
const generateWaLink = (productName: string) =>
  `https://wa.me/${SEU_NUMERO}?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${productName}`)}`;

export const products: Product[] = [
  // == FONES & HEADSETS ==
  { id: 1, name: "Fone Bluetooth KD-790", price: "R$ 79,90", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-kd790.jpg", whatsappUrl: generateWaLink("Fone Bluetooth KD-790") },
  { id: 2, name: "Fone Bluetooth KD-788", price: "R$ 59,90", category: "Fones & Headsets", image: "https://i.ibb.co/3yN2bP8/fone-kd788.jpg", whatsappUrl: generateWaLink("Fone Bluetooth KD-788") },
  { id: 3, name: "Fone Bluetooth Knc-4219", price: "R$ 129,90", category: "Fones & Headsets", image: "https://i.ibb.co/6gZfK9R/fone-knc4219.jpg", whatsappUrl: generateWaLink("Fone Bluetooth Knc-4219") },
  { id: 4, name: "Fone Bluetooth Knc-5601", price: "R$ 54,90", category: "Fones & Headsets", image: "https://i.ibb.co/wMhQf3L/fone-knc5601.jpg", whatsappUrl: generateWaLink("Fone Bluetooth Knc-5601") },
  { id: 5, name: "Fone Bluetooth Knc-5602", price: "R$ 69,90", category: "Fones & Headsets", image: "https://i.ibb.co/wMhQf3L/fone-knc5602.jpg", whatsappUrl: generateWaLink("Fone Bluetooth Knc-5602") },
  { id: 6, name: "Fone Bluetooth Knc-5603", price: "R$ 69,90", category: "Fones & Headsets", image: "https://i.ibb.co/wMhQf3L/fone-knc5603.jpg", whatsappUrl: generateWaLink("Fone Bluetooth Knc-5603") },
  { id: 7, name: "Headphone Bluetooth KD-750", price: "R$ 139,00", category: "Fones & Headsets", image: "https://i.ibb.co/2P8rL5n/headphone-kd750.jpg", whatsappUrl: generateWaLink("Headphone Bluetooth KD-750") },
  { id: 8, name: "Headset Bluetooth Kaidi KD-752", price: "R$ 99,90", category: "Fones & Headsets", image: "https://i.ibb.co/2P8rL5n/headset-kd752.jpg", whatsappUrl: generateWaLink("Headset Bluetooth Kaidi KD-752") },
  { id: 9, name: "Headset Gamer Kaidi KD-632", price: "R$ 199,00", category: "Fones & Headsets", image: "https://i.ibb.co/1vYp9jQ/headset-gamer-kd632.jpg", whatsappUrl: generateWaLink("Headset Gamer Kaidi KD-632") },
  { id: 10, name: "Fone Bluetooth LE-366B/362/365", price: "R$ 84,90", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-le366.jpg", whatsappUrl: generateWaLink("Fone Bluetooth LE-366B/362/365") },
  { id: 11, name: "Fone Bluetooth LE-391-1", price: "R$ 64,90", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-le391.jpg", whatsappUrl: generateWaLink("Fone Bluetooth LE-391-1") },
  { id: 12, name: "Fone Bluetooth J-90 Pro", price: "R$ 79,90", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-j90pro.jpg", whatsappUrl: generateWaLink("Fone Bluetooth J-90 Pro") },
  { id: 13, name: "Fone de Ouvido Bluetooth P9", price: "R$ 49,90", category: "Fones & Headsets", image: "https://i.ibb.co/k2mJ8h2/fone-p9pro.jpg", whatsappUrl: generateWaLink("Fone de Ouvido Bluetooth P9") },
  { id: 14, name: "Fone Bluetooth St-158/159", price: "R$ 39,90", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-st158.jpg", whatsappUrl: generateWaLink("Fone Bluetooth St-158/159") },
  { id: 15, name: "Fone Bluetooth ST-160", price: "R$ 44,90", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-st160.jpg", whatsappUrl: generateWaLink("Fone Bluetooth ST-160") },
  { id: 16, name: "Fone HD Estéreo LEF-1002", price: "R$ 29,90", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-lef1002.jpg", whatsappUrl: generateWaLink("Fone HD Estéreo LEF-1002") },
  { id: 17, name: "Fone Gamer LEF-1210", price: "R$ 139,00", category: "Fones & Headsets", image: "https://i.ibb.co/1vYp9jQ/fone-gamer-lef1210.jpg", whatsappUrl: generateWaLink("Fone Gamer LEF-1210") },
  { id: 18, name: "Headset Lehmox LEF-1211", price: "R$ 94,90", category: "Fones & Headsets", image: "https://i.ibb.co/1vYp9jQ/headset-lef1211.jpg", whatsappUrl: generateWaLink("Headset Lehmox LEF-1211") },
  { id: 19, name: "Headset de Gatinho LEF-1058", price: "R$ 59,90", category: "Fones & Headsets", image: "https://i.ibb.co/99mK3p1/headset-gatinho.jpg", whatsappUrl: generateWaLink("Headset de Gatinho LEF-1058") },
  { id: 20, name: "Fones LEF-1217/1030/1057", price: "R$ 15,00", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fones-lef1217.jpg", whatsappUrl: generateWaLink("Fones LEF-1217/1030/1057") },
  { id: 21, name: "Fones LE-295 / St-1020", price: "R$ 15,00", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fones-le295.jpg", whatsappUrl: generateWaLink("Fones LE-295 / St-1020") },

  // == CABOS ==
  { id: 22, name: "Cabo Usb/V8 (2 Metros)", price: "R$ 19,90", category: "Cabos", image: "https://i.ibb.co/3hW5qY8/cabo-usb-v8-2m.jpg", whatsappUrl: generateWaLink("Cabo Usb/V8 (2 Metros)") },
  { id: 23, name: "Usb/V8 Silicone", price: "R$ 18,00", category: "Cabos", image: "https://i.ibb.co/3hW5qY8/cabo-usb-v8-silicone.jpg", whatsappUrl: generateWaLink("Usb/V8 Silicone") },
  { id: 24, name: "Usb/V8 Comum", price: "R$ 15,00", category: "Cabos", image: "https://i.ibb.co/3hW5qY8/cabo-usb-v8-comum.jpg", whatsappUrl: generateWaLink("Usb/V8 Comum") },
  { id: 25, name: "Usb/Micro (3 Metros)", price: "R$ 24,90", category: "Cabos", image: "https://i.ibb.co/3hW5qY8/cabo-usb-micro-3m.jpg", whatsappUrl: generateWaLink("Usb/Micro (3 Metros)") },
  { id: 26, name: "Usb/V8 (Reforçado)", price: "R$ 29,90", category: "Cabos", image: "https://i.ibb.co/3hW5qY8/cabo-usb-v8-reforcado.jpg", whatsappUrl: generateWaLink("Usb/V8 (Reforçado)") },
  { id: 27, name: "Usb/Tipo-C Silicone", price: "R$ 18,00", category: "Cabos", image: "https://i.ibb.co/5nR8vL2/cabo-usb-tipoc-silicone.jpg", whatsappUrl: generateWaLink("Usb/Tipo-C Silicone") },
  { id: 28, name: "Tipo-C/Tipo-C (Simples)", price: "R$ 18,00", category: "Cabos", image: "https://i.ibb.co/5nR8vL2/cabo-tipo-c-tipo-c.jpg", whatsappUrl: generateWaLink("Tipo-C/Tipo-C (Simples)") },
  { id: 29, name: "Tipo-C/Tipo-C (16,00)", price: "R$ 39,90", category: "Cabos", image: "https://i.ibb.co/5nR8vL2/cabo-tipo-c-tipo-c-16.jpg", whatsappUrl: generateWaLink("Tipo-C/Tipo-C (16,00)") },
  { id: 30, name: "Usb/Tipo-C 2M", price: "R$ 24,90", category: "Cabos", image: "https://i.ibb.co/5nR8vL2/cabo-usb-tipoc-2m.jpg", whatsappUrl: generateWaLink("Usb/Tipo-C 2M") },
  { id: 31, name: "Usb/Lightning Silicone", price: "R$ 18,00", category: "Cabos", image: "https://i.ibb.co/W2p8n5R/cabo-usb-lightning-silicone.jpg", whatsappUrl: generateWaLink("Usb/Lightning Silicone") },
  { id: 32, name: "Tipo-C/Lightning (6W)", price: "R$ 19,90", category: "Cabos", image: "https://i.ibb.co/W2p8n5R/cabo-tipoc-light-6w.jpg", whatsappUrl: generateWaLink("Tipo-C/Lightning (6W)") },
  { id: 33, name: "Tipo-C/Lightning (12W)", price: "R$ 29,90", category: "Cabos", image: "https://i.ibb.co/W2p8n5R/cabo-tipoc-light-12w.jpg", whatsappUrl: generateWaLink("Tipo-C/Lightning (12W)") },
  { id: 34, name: "Tipo-C/Lightning (17W)", price: "R$ 44,90", category: "Cabos", image: "https://i.ibb.co/W2p8n5R/cabo-tipoc-light-17w.jpg", whatsappUrl: generateWaLink("Tipo-C/Lightning (17W)") },
  { id: 35, name: "Usb/Lightning (13W)", price: "R$ 34,90", category: "Cabos", image: "https://i.ibb.co/W2p8n5R/cabo-usb-lightning-13w.jpg", whatsappUrl: generateWaLink("Usb/Lightning (13W)") },
  { id: 36, name: "Cabo HDMI 5M LEY-10", price: "R$ 39,90", category: "Cabos", image: "https://i.ibb.co/3hW5qY8/cabo-hdmi-5m.jpg", whatsappUrl: generateWaLink("Cabo HDMI 5M LEY-10") },

  // == CARREGADORES & FONTES ==
  { id: 37, name: "Fonte Duplo Usb", price: "R$ 24,90", category: "Carregadores & Fontes", image: "https://i.ibb.co/W2p8n5R/fonte-duplo-usb.jpg", whatsappUrl: generateWaLink("Fonte Duplo Usb") },
  { id: 38, name: "Fonte Saída Tipo-C", price: "R$ 39,90", category: "Carregadores & Fontes", image: "https://i.ibb.co/W2p8n5R/fonte-tipoc.jpg", whatsappUrl: generateWaLink("Fonte Saída Tipo-C") },
  { id: 39, name: "Fonte Usb + Tipo-C", price: "R$ 44,90", category: "Carregadores & Fontes", image: "https://i.ibb.co/W2p8n5R/fonte-usb-tipoc.jpg", whatsappUrl: generateWaLink("Fonte Usb + Tipo-C") },
  { id: 40, name: "Carregador Rápido (12W)", price: "R$ 34,90", category: "Carregadores & Fontes", image: "https://i.ibb.co/W2p8n5R/carregador-rapido.jpg", whatsappUrl: generateWaLink("Carregador Rápido (12W)") },
  { id: 41, name: "Carregador Turbo T-C 17W", price: "R$ 44,90", category: "Carregadores & Fontes", image: "https://i.ibb.co/7tYb3mQ/carregador-turbo-tc.jpg", whatsappUrl: generateWaLink("Carregador Turbo T-C 17W") },
  { id: 42, name: "Carregador Turbo 50W T-C/T-C", price: "R$ 39,90", category: "Carregadores & Fontes", image: "https://i.ibb.co/7tYb3mQ/carregador-50w.jpg", whatsappUrl: generateWaLink("Carregador Turbo 50W T-C/T-C") },
  { id: 43, name: "Carregador 33W iPhone/Lightning", price: "R$ 29,90", category: "Carregadores & Fontes", image: "https://i.ibb.co/W2p8n5R/carregador-iphone.jpg", whatsappUrl: generateWaLink("Carregador 33W iPhone/Lightning") },
  { id: 44, name: "Carregador Veicular KD-501S", price: "R$ 24,90", category: "Carregadores & Fontes", image: "https://i.ibb.co/4PqZf6L/carregador-veicular.jpg", whatsappUrl: generateWaLink("Carregador Veicular KD-501S") },
  { id: 45, name: "Veicular + Cabo Light/T-C", price: "R$ 49,90", category: "Carregadores & Fontes", image: "https://i.ibb.co/4PqZf6L/veicular-cabo.jpg", whatsappUrl: generateWaLink("Veicular + Cabo Light/T-C") },

  // == POWER BANKS ==
  { id: 46, name: "Power Bank 5000mah KD-951", price: "R$ 79,90", category: "Power Banks", image: "https://i.ibb.co/KsGq9tY/powerbank-kd951.jpg", whatsappUrl: generateWaLink("Power Bank 5000mah KD-951") },
  { id: 47, name: "Power Bank 10000mah KD-952", price: "R$ 95,00", category: "Power Banks", image: "https://i.ibb.co/KsGq9tY/powerbank-kd952.jpg", whatsappUrl: generateWaLink("Power Bank 10000mah KD-952") },
  { id: 48, name: "Power Bank 20000mah KD-922", price: "R$ 299,00", category: "Power Banks", image: "https://i.ibb.co/0jR5b6r/powerbank-20000mah.jpg", whatsappUrl: generateWaLink("Power Bank 20000mah KD-922") },
  { id: 49, name: "Power Bank 20.000mah KD-955", price: "R$ 139,00", category: "Power Banks", image: "https://i.ibb.co/0jR5b6r/powerbank-kd955.jpg", whatsappUrl: generateWaLink("Power Bank 20.000mah KD-955") },

  // == CAIXAS DE SOM ==
  { id: 50, name: "Caixa de Som AM-552 3000W", price: "R$ 249,00", category: "Caixas de Som", image: "https://i.ibb.co/6YRmP9w/caixa-som-am552.jpg", whatsappUrl: generateWaLink("Caixa de Som AM-552 3000W") },
  { id: 51, name: "Caixa de Som KD-833", price: "R$ 449,00", category: "Caixas de Som", image: "https://i.ibb.co/6YRmP9w/caixa-som-kd833.jpg", whatsappUrl: generateWaLink("Caixa de Som KD-833") },
  { id: 52, name: "Caixa de Som Al-9999", price: "R$ 229,00", category: "Caixas de Som", image: "https://i.ibb.co/2kW5L8r/caixa-som-al9999.jpg", whatsappUrl: generateWaLink("Caixa de Som Al-9999") },
  { id: 53, name: "Caixinha de Som LES-887", price: "R$ 29,90", category: "Caixas de Som", image: "https://i.ibb.co/2kW5L8r/caixinha-les887.jpg", whatsappUrl: generateWaLink("Caixinha de Som LES-887") },
  { id: 54, name: "Boombox Eletromex 50W", price: "R$ 219,00", category: "Caixas de Som", image: "https://i.ibb.co/qMh3n2P/boombox-eletromex.jpg", whatsappUrl: generateWaLink("Boombox Eletromex 50W") },

  // == INFORMÁTICA & PERIFÉRICOS ==
  { id: 55, name: "Teclado Mecânico LEY-2080", price: "R$ 189,00", category: "Informática & Periféricos", image: "https://i.ibb.co/DwQ8b6Y/teclado-ley2080.jpg", whatsappUrl: generateWaLink("Teclado Mecânico LEY-2080") },
  { id: 56, name: "Teclado Gamer RGB LEY-2088", price: "R$ 74,90", category: "Informática & Periféricos", image: "https://i.ibb.co/8X3qY6R/teclado-ley2088.jpg", whatsappUrl: generateWaLink("Teclado Gamer RGB LEY-2088") },
  { id: 57, name: "Mouse a Pilha LEY-28", price: "R$ 19,90", category: "Informática & Periféricos", image: "https://i.ibb.co/wB5mK9w/mouse-ley28.jpg", whatsappUrl: generateWaLink("Mouse a Pilha LEY-28") },
  { id: 58, name: "Cartão de Memória 32GB", price: "R$ 69,90", category: "Informática & Periféricos", image: "https://i.ibb.co/3yN2bP8/cartao-memoria-32gb.jpg", whatsappUrl: generateWaLink("Cartão de Memória 32GB") },
  { id: 59, name: "Pendrive 64GB", price: "R$ 54,90", category: "Informática & Periféricos", image: "https://i.ibb.co/7rP2vL8/pendrive-64gb.jpg", whatsappUrl: generateWaLink("Pendrive 64GB") },

  // == ACESSÓRIOS ==
  { id: 60, name: "Suporte Celular Carro LEY-1694", price: "R$ 29,90", category: "Acessórios", image: "https://i.ibb.co/1J9mP3L/suporte-carro-ley1694.jpg", whatsappUrl: generateWaLink("Suporte Celular Carro LEY-1694") },
  { id: 61, name: "Suporte Moto LEY-2112", price: "R$ 44,90", category: "Acessórios", image: "https://i.ibb.co/1J9mP3L/suporte-moto-ley2112.jpg", whatsappUrl: generateWaLink("Suporte Moto LEY-2112") },
  { id: 62, name: "Suporte Moto/Bicicleta 1602", price: "R$ 34,90", category: "Acessórios", image: "https://i.ibb.co/1J9mP3L/suporte-moto-1602.jpg", whatsappUrl: generateWaLink("Suporte Moto/Bicicleta 1602") },
  { id: 63, name: "Lanterna AL-B1990", price: "R$ 139,00", category: "Acessórios", image: "https://i.ibb.co/1J9mP3L/lanterna-alb1990.jpg", whatsappUrl: generateWaLink("Lanterna AL-B1990") },

  // == ELETRÔNICOS ==
  { id: 64, name: "Som Automotivo MP3 LEY-1920", price: "R$ 299,00", category: "Eletrônicos", image: "https://i.ibb.co/7rP2vL8/som-mp3-ley1920.jpg", whatsappUrl: generateWaLink("Som Automotivo MP3 LEY-1920") },
  { id: 65, name: "Som MP5 Player LEY-2070", price: "R$ 279,00", category: "Eletrônicos", image: "https://i.ibb.co/7rP2vL8/som-mp5-ley2070.jpg", whatsappUrl: generateWaLink("Som MP5 Player LEY-2070") },
  { id: 66, name: "Drone Al-2725", price: "R$ 279,00", category: "Eletrônicos", image: "https://i.ibb.co/8X3qY6R/drone-al2725.jpg", whatsappUrl: generateWaLink("Drone Al-2725") },
  { id: 67, name: "Câmera Altomex 5 Antenas", price: "R$ 139,00", category: "Eletrônicos", image: "https://i.ibb.co/wB5mK9w/camera-altomex.jpg", whatsappUrl: generateWaLink("Câmera Altomex 5 Antenas") },

  // == SMARTWATCHES ==
  { id: 68, name: "Smartwatch Kw62max", price: "R$ 259,00", category: "Smartwatches", image: "https://i.ibb.co/6YRmP9w/smartwatch-kw62max.jpg", whatsappUrl: generateWaLink("Smartwatch Kw62max") },
  { id: 69, name: "Smartwatch S10 Pro", price: "R$ 119,00", category: "Smartwatches", image: "https://i.ibb.co/DwQ8b6Y/smartwatch-s10pro.jpg", whatsappUrl: generateWaLink("Smartwatch S10 Pro") },
  { id: 70, name: "Smartwatch Ultra 4 Pro", price: "R$ 229,00", category: "Smartwatches", image: "https://i.ibb.co/1J9mP3L/smartwatch-ultra4pro.jpg", whatsappUrl: generateWaLink("Smartwatch Ultra 4 Pro") },

  // == UTILIDADES ==
  { id: 71, name: "Marmita Elétrica LEY-2200", price: "R$ 129,00", category: "Utilidades", image: "https://i.ibb.co/3hW5qY8/marmita-eletrica.jpg", whatsappUrl: generateWaLink("Marmita Elétrica LEY-2200") },
  { id: 72, name: "Máquina de Cabelo Al-2927", price: "R$ 59,90", category: "Utilidades", image: "https://i.ibb.co/3hW5qY8/maquina-cabelo-al2927.jpg", whatsappUrl: generateWaLink("Máquina de Cabelo Al-2927") },
];

export const categories = [
  "Todos",
  "Fones & Headsets",
  "Cabos",
  "Carregadores & Fontes",
  "Power Banks",
  "Caixas de Som",
  "Informática & Periféricos",
  "Acessórios",
  "Eletrônicos",
  "Smartwatches",
  "Utilidades",
];
