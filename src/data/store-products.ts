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
  // --- ÁUDIO (Baseado no PDF) ---
  { 
    id: "kd799", 
    name: "Fone Bluetooth Kaidi KD-799 TWS", 
    category: "Áudio", 
    price: "Indisponível", 
    originalPrice: 42.00,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", 
    badge: "+Vendido" 
  },
  { 
    id: "kdg1", 
    name: "Fone Gamer Kaidi KD-G1 Baixa Latência", 
    category: "Áudio", 
    price: "Indisponível", 
    originalPrice: 60.00,
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400", 
    badge: "Tendência" 
  },
  { 
    id: "p9max", 
    name: "Headphone P9 Max Bluetooth High Fidelity", 
    category: "Áudio", 
    price: "Indisponível", 
    originalPrice: 22.00,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400", 
    badge: "Oferta" 
  },

  // --- CARREGAMENTO & ENERGIA (Baseado no PDF) ---
  { 
    id: "turbo20w", 
    name: "Carregador Turbo 20W PD + Cabo Tipo-C", 
    category: "Energia", 
    price: "Indisponível", 
    originalPrice: 17.00,
    image: "https://images.unsplash.com/photo-1625517406127-7c1f23c9ceb1?q=80&w=400", 
    badge: "Novo" 
  },
  { 
    id: "kd922", 
    name: "Power Bank Kaidi 20.000mAh Turbo PD", 
    category: "Energia", 
    price: "Indisponível", 
    originalPrice: 165.00,
    image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400", 
    badge: "+Vendido" 
  },
  { 
    id: "cabo3m", 
    name: "Cabo Lightning iPhone 3 Metros Reforçado", 
    category: "Acessórios", 
    price: "Indisponível", 
    originalPrice: 11.00,
    image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=400" 
  },

  // --- AUTOMOTIVO & SUPORTES ---
  { 
    id: "le014", 
    name: "Suporte Veicular Magnético IT-Blue", 
    category: "Automotivo", 
    price: "Indisponível", 
    originalPrice: 8.00,
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?q=80&w=400" 
  },
  { 
    id: "ley2112", 
    name: "Suporte para Moto c/ Garra de Alumínio", 
    category: "Automotivo", 
    price: "Indisponível", 
    originalPrice: 18.00,
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400" 
  },

  // --- CAIXAS DE SOM ---
  { 
    id: "kd850", 
    name: "Caixa de Som Kaidi KD-850 Bluetooth", 
    category: "Áudio", 
    price: "Indisponível", 
    originalPrice: 156.00,
    image: "https://images.unsplash.com/photo-1608155613957-30f03d29994b?q=80&w=400" 
  },
  { 
    id: "boombox", 
    name: "Caixa de Som Boombox 50W Eletromex", 
    category: "Áudio", 
    price: "Indisponível", 
    originalPrice: 110.00,
    image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400", 
    badge: "Oferta" 
  },

  // --- SMARTWATCHES & OUTROS ---
  { 
    id: "s10ultra", 
    name: "Smartwatch S10 Ultra + Pulseira Oceano", 
    category: "Wearables", 
    price: "Indisponível", 
    originalPrice: 138.00,
    image: "https://images.unsplash.com/photo-1508685096489-7aac29125346?q=80&w=400", 
    badge: "Tendência" 
  },
  { 
    id: "fbg9006", 
    name: "Controle Remoto TV Box Universal", 
    category: "Acessórios", 
    price: "Indisponível", 
    originalPrice: 6.00,
    image: "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?q=80&w=400" 
  }
];

export const categories = ["Áudio", "Energia", "Acessórios", "Automotivo", "Wearables"];
