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
  { id: 1, name: "Fone Bluetooth KD-790", category: "Fones & Headsets", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", badge: "Mais Vendido" },
  { id: 101, name: "Carregador 20w Tipo C", category: "Carregadores & Power Banks", image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500", badge: "Top Venda" },
  { id: 167, name: "Smartwatch Kw62max Original", category: "Smartwatches", image: "https://images.unsplash.com/photo-1544117518-30dd07835b6d?w=500", badge: "Premium" },
  { id: "serv-01", name: "Configuração WhatsApp Business", category: "Serviços Digitais", image: "https://images.unsplash.com/photo-1614680376593-902f74cc0d41?w=500", badge: "Consultoria" }
];
