export interface Product {
  id: string;
  name: string;
  category: string;
  price: number | "Indisponível";
  originalPrice?: number;
  image: string;
  badge?: "+Vendido" | "Novo" | "Oferta" | "Tendência";
}

export const products: Product[] = [
  // --- ÁUDIO / FONES (KAIDI & LEHMOX) ---
  { id: "kd799", name: "Fone Bluetooth Kaidi KD-799 TWS", category: "Áudio", price: "Indisponível", originalPrice: 42.00, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", badge: "+Vendido" },
  { id: "kdg1", name: "Fone Gamer Kaidi KD-G1 - Baixa Latência", category: "Áudio", price: "Indisponível", originalPrice: 60.00, image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400", badge: "Tendência" },
  { id: "kd777", name: "Fone Bluetooth Kaidi KD-777 High Fidelity", category: "Áudio", price: "Indisponível", originalPrice: 48.00, image: "https://images.unsplash.com/photo-1572536147743-6593f6089ecf?q=80&w=400" },
  { id: "kd7102", name: "Fone TWS Kaidi KD-7102 Smart Touch", category: "Áudio", price: "Indisponível", originalPrice: 54.00, image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=400" },
  { id: "p9max", name: "Headphone P9 Max Wireless High-End", category: "Áudio", price: "Indisponível", originalPrice: 22.00, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400", badge: "Oferta" },
  { id: "le362", name: "Fone Bluetooth Lehmox LE-362/366", category: "Áudio", price: "Indisponível", originalPrice: 38.00, image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=400" },
  
  // --- CARREGAMENTO & ENERGIA ---
  { id: "kd922", name: "Power Bank Kaidi 20.000mAh Turbo PD", category: "Energia", price: "Indisponível", originalPrice: 165.00, image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400", badge: "+Vendido" },
  { id: "turbo20w", name: "Carregador Turbo 20W PD + Cabo USB-C", category: "Energia", price: "Indisponível", originalPrice: 17.00, image: "https://images.unsplash.com/photo-1625517406127-7c1f23c9ceb1?q=80&w=400", badge: "Novo" },
  { id: "cabo3m", name: "Cabo iPhone Lightning 3 Metros Nylon", category: "Energia", price: "Indisponível", originalPrice: 11.00, image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=400" },
  { id: "kd951", name: "Power Bank Slim Kaidi 5.000mAh", category: "Energia", price: "Indisponível", originalPrice: 36.00, image: "https://images.unsplash.com/photo-1620211110006-25f0580970d4?q=80&w=400" },

  // --- ACESSÓRIOS & SUPORTES ---
  { id: "le014", name: "Suporte Veicular Magnético IT-Blue LE-014", category: "Acessórios", price: "Indisponível", originalPrice: 8.00, image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=400" },
  { id: "ley2112", name: "Suporte para Moto c/ Garra Alumínio", category: "Acessórios", price: "Indisponível", originalPrice: 18.00, image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400" },
  { id: "s10ultra", name: "Smartwatch S10 Ultra + Pulseira Ocean", category: "Wearables", price: "Indisponível", originalPrice: 138.00, image: "https://images.unsplash.com/photo-1508685096489-7aac29125346?q=80&w=400", badge: "Tendência" },
  { id: "fbg9006", name: "Controle Remoto TV Box Universal FBG", category: "Acessórios", price: "Indisponível", originalPrice: 6.00, image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=400" },

  // --- CAIXAS DE SOM ---
  { id: "kd850", name: "Caixa de Som Kaidi KD-850 Bluetooth", category: "Áudio", price: "Indisponível", originalPrice: 156.00, image: "https://images.unsplash.com/photo-1608155613957-30f03d29994b?q=80&w=400" },
  { id: "boombox", name: "Caixa de Som Boombox Eletromex 50W", category: "Áudio", price: "Indisponível", originalPrice: 110.00, image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400", badge: "Oferta" }
];

export const categories = ["Áudio", "Energia", "Acessórios", "Wearables"];
