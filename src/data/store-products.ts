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
  {
    id: "1",
    name: "SSD NVMe 1TB Kingston NV2 - Ultra Velocidade",
    category: "Armazenamento",
    price: "Indisponível",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800",
    badge: "+Vendido"
  },
  {
    id: "2",
    name: "Manutenção Preventiva: Limpeza + Pasta Térmica Silver",
    category: "Assistência Técnica",
    price: "Indisponível",
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=800",
    badge: "Novo"
  },
  {
    id: "3",
    name: "Mouse Gamer Pro RGB 16000 DPI Sensor Óptico",
    category: "Periféricos & Informática",
    price: "Indisponível",
    image: "https://images.unsplash.com/photo-1527814732934-94a857bd8629?q=80&w=800",
    badge: "Oferta"
  },
  {
    id: "4",
    name: "Troca de Tela Smartphone (Original / Premium)",
    category: "Assistência Técnica",
    price: "Indisponível",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=800",
  },
  {
    id: "5",
    name: "Memória RAM 16GB DDR4 3200MHz HyperX",
    category: "Armazenamento",
    price: "Indisponível",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=800",
  },
  {
    id: "6",
    name: "Carregador Rápido 20W USB-C Premium",
    category: "Carregadores & Cabos",
    price: "Indisponível",
    image: "https://images.unsplash.com/photo-1625517406127-7c1f23c9ceb1?q=80&w=800",
    badge: "+Vendido"
  }
];

export const categories = [
  "Assistência Técnica",
  "Armazenamento",
  "Periféricos & Informática",
  "Carregadores & Cabos",
  "Capas & Proteção"
];
