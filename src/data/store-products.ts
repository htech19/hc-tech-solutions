export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  badge?: "Mais Vendido" | "Lançamento" | "Premium";
}

export const products: Product[] = [
  { id: "kd799", name: "Fone Kaidi KD-799 TWS", category: "Áudio", image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400", badge: "Mais Vendido" },
  { id: "kdg1", name: "Fone Gamer Kaidi KD-G1", category: "Áudio", image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400", badge: "Premium" },
  { id: "kd7102", name: "Fone Kaidi KD-7102 Smart Touch", category: "Áudio", image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=400", badge: "Lançamento" },
  { id: "kd922", name: "Power Bank Kaidi 20.000mAh Turbo", category: "Energia", image: "https://images.unsplash.com/photo-1609091839311-d5364f9bc271?q=80&w=400", badge: "Mais Vendido" },
  { id: "lef1211", name: "Headset Lehmox LEF-1211 Pro", category: "Gamer", image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=400", badge: "Premium" },
  { id: "kd850", name: "Caixa de Som Kaidi KD-850 Bluetooth", category: "Som", image: "https://images.unsplash.com/photo-1608155613957-30f03d29994b?q=80&w=400" },
  { id: "boombox", name: "Boombox Eletromex 50W Extreme", category: "Som", image: "https://images.unsplash.com/photo-1543512214-318c7553f230?q=80&w=400" },
  { id: "ley2112", name: "Suporte Moto Garra Alumínio", category: "Acessórios", image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=400" }
];

export const categories = ["Áudio", "Gamer", "Energia", "Som", "Acessórios"];
