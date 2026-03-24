export interface Product {
  id: string;
  name: string;
  category: string;
  price: number | "Indisponível";
  originalPrice?: number;
  image: string;
  badge?: "+Vendido" | "Novo" | "Oferta";
}

export const products: Product[] = [
  { id: "1", name: "SSD NVMe 1TB Kingston NV2", category: "Armazenamento", price: "Indisponível", image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=400", badge: "+Vendido" },
  { id: "2", name: "Limpeza + Pasta Térmica Silver", category: "Assistência", price: "Indisponível", image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=400", badge: "Novo" },
  { id: "3", name: "Mouse Gamer RGB 16000 DPI", category: "Periféricos", price: "Indisponível", image: "https://images.unsplash.com/photo-1527814732934-94a857bd8629?q=80&w=400", badge: "Oferta" },
  { id: "4", name: "Troca de Tela Smartphone Premium", category: "Assistência", price: "Indisponível", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=400" },
  { id: "5", name: "Memória RAM 16GB DDR4 3200MHz", category: "Armazenamento", price: "Indisponível", image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=400" },
  { id: "6", name: "Carregador Rápido 20W USB-C", category: "Acessórios", price: "Indisponível", image: "https://images.unsplash.com/photo-1625517406127-7c1f23c9ceb1?q=80&w=400", badge: "+Vendido" },
  { id: "7", name: "Teclado Mecânico RGB Switch Blue", category: "Periféricos", price: "Indisponível", image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=400" },
  { id: "8", name: "Headset Gamer 7.1 Surround", category: "Periféricos", price: "Indisponível", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400" },
  { id: "9", name: "Cabo USB-C Nylon Reforçado 2m", category: "Acessórios", price: "Indisponível", image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=400" },
  { id: "10", name: "Reparo de Placa Mãe (Micro-soldagem)", category: "Assistência", price: "Indisponível", image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=400", badge: "Novo" },
  { id: "11", name: "Película de Cerâmica 9D Privativa", category: "Proteção", price: "Indisponível", image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=400" },
  { id: "12", name: "SSD SATA 480GB Kingston A400", category: "Armazenamento", price: "Indisponível", image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?q=80&w=400" }
];

export const categories = ["Assistência", "Armazenamento", "Periféricos", "Acessórios", "Proteção"];
