import { ShoppingCart, ArrowLeft, Smartphone, Laptop, Tablet } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const products = [
  { id: 1, name: "Tela iPhone 13 OLED", price: 850, category: "Peças", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbea?w=400" },
  { id: 2, name: "Bateria MacBook Air M1", price: 450, category: "Peças", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" },
  { id: 3, name: "Cabo USB-C 20W Apple", price: 120, category: "Acessórios", image: "https://images.unsplash.com/photo-1583860812120-4f29b77a06a3?w=400" },
];

const LojaPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20">
      <header className="container mx-auto px-4 mb-12 flex items-center justify-between">
        <div>
          <Link to="/" className="flex items-center gap-2 text-[#00A651] mb-4 hover:underline">
            <ArrowLeft size={16} />
            Voltar para Início
          </Link>
          <h1 className="text-4xl font-black italic uppercase tracking-tighter">
            HC TECH <span className="text-[#00A651]">STORE</span>
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-[#00A651]/50 transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold text-[#00A651] uppercase tracking-widest">{product.category}</span>
                <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black">R$ {product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-[#00A651] p-3 rounded-xl hover:scale-110 transition-all"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LojaPage;
