export interface Product {
  id: number | string;
  name: string;
  category: string;
  image: string;
  badge?: string;
  whatsappUrl: string;
}

// ✅ NÚMERO CORRIGIDO: SEM ZERO, SEM TRAÇO
const SEU_NUMERO = "551194056293"; 
const generateWaLink = (productName: string) => 
  `https://wa.me/${SEU_NUMERO}?text=Olá!%20Gostaria%20de%20consultar%20o%20valor%20do%20produto:%20${encodeURIComponent(productName)}`;

export const products: Product[] = [
  { id: 1, name: "Fone Bluetooth KD-790", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-kd790.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth KD-790") },
  { id: 2, name: "Fone Bluetooth KD-788", category: "Fones & Headsets", image: "https://i.ibb.co/3yN2bP8/fone-kd788.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth KD-788") },
  { id: 3, name: "Fone Bluetooth Knc-4219", category: "Fones & Headsets", image: "https://i.ibb.co/6gZfK9R/fone-knc4219.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth Knc-4219") },
  { id: 4, name: "Fone Bluetooth Knc-5601", category: "Fones & Headsets", image: "https://i.ibb.co/wMhQf3L/fone-knc5601.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone Bluetooth Knc-5601") },
  { id: 5, name: "Headset Bluetooth Kaidi KD-752", category: "Fones & Headsets", image: "https://i.ibb.co/2P8rL5n/headset-kd752.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Headset Bluetooth Kaidi KD-752") },
  { id: 6, name: "Headset Gamer Kaidi KD-632", category: "Fones & Headsets", image: "https://i.ibb.co/1vYp9jQ/headset-gamer-kd632.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Headset Gamer Kaidi KD-632") },
  { id: 7, name: "Fone de Ouvido Bluetooth P9", category: "Fones & Headsets", image: "https://i.ibb.co/k2mJ8h2/fone-p9pro.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Fone de Ouvido Bluetooth P9") },
  { id: 8, name: "Headset de Gatinho LEF-1058", category: "Fones & Headsets", image: "https://i.ibb.co/99mK3p1/headset-gatinho.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Headset de Gatinho LEF-1058") },

  // Resto dos produtos igual...
  { id: 9, name: "Power Bank 20000mah", category: "Carregadores & Power Banks", image: "https://i.ibb.co/0jR5b6r/powerbank-20000mah.jpg", badge: "Consultar no Whats", whatsappUrl: generateWaLink("Power Bank 20000mah") },
  // ... (todos os outros produtos seguem o mesmo padrão)
];

export const categories = [
  "Todos", "Fones & Headsets", "Carregadores & Power Banks", "Smartwatches",
  "Informática & Periféricos", "Caixas de Som", "Acessórios", 
  "Eletrônicos & Drones", "Automotivo", "Utilidades", "Serviços Digitais"
];
