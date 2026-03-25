import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/store-products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="bg-[#050505] text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Produto não encontrado</h1>
            <Button asChild variant="outline">
              <Link to="/loja">Voltar ao catálogo</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Header />
      <main className="pt-28 pb-20 container mx-auto px-4">
        <Link to="/loja" className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-500 transition-colors mb-8 text-sm">
          <ArrowLeft size={16} /> Voltar ao catálogo
        </Link>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800/40">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {product.badge && (
              <span className="absolute top-6 left-6 bg-emerald-500 text-black px-3 py-1 rounded text-xs font-black uppercase">
                {product.badge}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-black text-emerald-500/60 uppercase tracking-widest mb-2">{product.category}</span>
            <h1 className="text-3xl md:text-4xl font-black mb-4">{product.name}</h1>
            <p className="text-zinc-400 text-sm mb-8">
              Produto disponível sob consulta. Entre em contato para verificar disponibilidade e condições especiais.
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800/40 rounded-2xl p-6 mb-6">
              <span className="text-zinc-500 text-xs uppercase tracking-widest font-bold">Preço</span>
              <p className="text-2xl font-black text-emerald-500 mt-1">Sob Consulta</p>
            </div>

            <Button className="w-full h-14 rounded-xl font-black uppercase tracking-widest text-sm bg-white text-black hover:bg-emerald-500 transition-all" asChild>
              <a href={`https://wa.me/5511940562933?text=Olá Harrison! Tenho interesse no ${product.name}. Pode me passar o valor?`} target="_blank">
                <MessageCircle size={18} className="mr-2" />
                Consultar via WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-xl font-black uppercase tracking-widest mb-8 text-zinc-400">Produtos Relacionados</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {related.map((r) => (
                <Link key={r.id} to={`/loja/${r.id}`} className="group bg-zinc-900/20 rounded-2xl border border-zinc-800/40 overflow-hidden hover:border-emerald-500/30 transition-all">
                  <div className="aspect-square overflow-hidden bg-zinc-950">
                    <img src={r.image} alt={r.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-bold text-zinc-300 line-clamp-2">{r.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductPage;
