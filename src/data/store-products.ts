export interface Product {
  id: string;
  name: string;
  category: string;
  price: number | "Indisponível";
  originalPrice?: number;
  image: string;
  badge?: "Mais Vendido" | "Lançamento" | "Premium" | "+Vendido" | "Novo" | "Oferta";
}

export const products: Product[] = [
  // --- PRODUTOS DO CATÁLOGO (KAIDI/LEHMOX) ---
  { id: "kd799", name: "Fone Kaidi KD-799 TWS", category: "Áudio", price: "Indisponível", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", badge: "Mais Vendido" },
  { id: "kdg1", name: "Fone Gamer Kaidi KD-G1", category: "Áudio", price: "Indisponível", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400", badge: "Premium" },
  { id: "kd7102", name: "Fone Kaidi KD-7102 Smart Touch", category: "Áudio", price: "Indisponível", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=400", badge: "Lançamento" },
  { id: "kd922", name: "Power Bank Kaidi 20.000mAh Turbo", category: "Energia", price: "Indisponível", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400", badge: "Mais Vendido" },
  { id: "lef1211", name: "Headset Lehmox LEF-1211 Pro", category: "Gamer", price: "Indisponível", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400", badge: "Premium" },
  { id: "kd850", name: "Caixa de Som Kaidi KD-850 Bluetooth", category: "Som", price: "Indisponível", image: "https://images.unsplash.com/photo-1608155613957-30f03d29994b?q=80&w=400" },
  { id: "boombox", name: "Boombox Eletromex 50W Extreme", category: "Som", price: "Indisponível", image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400" },
  { id: "ley2112", name: "Suporte Moto Garra Alumínio", category: "Acessórios", price: "Indisponível", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400" },

  // --- SERVIÇOS E HARDWARE ---
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

export const categories = [
  "Áudio", 
  "Gamer", 
  "Energia", 
  "Som", 
  "Assistência", 
  "Armazenamento", 
  "Periféricos", 
  "Acessórios", 
  "Proteção"
];
