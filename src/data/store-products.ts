"use client"; // Necessário para estados interativos em Next.js App Router

import { useState, useEffect } from 'react';
// Importe seus dados aqui (ajuste o caminho conforme sua pasta)
// import { products, categories } from './seu-arquivo-de-dados'; 

// --- COLE SEUS DADOS AQUI (ou importe o arquivo) ---
export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  whatsappUrl: string;
}

const SEU_NUMERO = "551194056293"; // Garanta que esteja correto
const generateWaLink = (productName: string) =>
  `https://wa.me/${SEU_NUMERO}?text=${encodeURIComponent(`Olá! Vi a loja online e tenho interesse no produto: ${productName}`)}`;

export const productsData: Product[] = [
  // ... (Cole aqui toda a lista de objetos 'products' que você mandou) ...
  // Exemplo abreviado:
  { id: 1, name: "Fone Bluetooth KD-790", price: "R$ 79,90", category: "Fones & Headsets", image: "https://i.ibb.co/7v3Q3mQ/fone-kd790.jpg", whatsappUrl: generateWaLink("Fone Bluetooth KD-790") },
  // ... Cole o restante dos produtos abaixo ...
];

export const categoriesList = [
  "Todos",
  "Fones & Headsets",
  "Cabos",
  "Carregadores & Fontes",
  "Power Banks",
  "Caixas de Som",
  "Informática & Periféricos",
  "Acessórios",
  "Eletrônicos",
  "Smartwatches",
  "Utilidades",
];
// --- FIM DOS DADOS ---

export default function LojaPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [loading, setLoading] = useState(true);

  // Simula carregamento inicial
  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  // Lógica de Filtro
  useEffect(() => {
    if (activeCategory === "Todos") {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(
        (product) => product.category === activeCategory
      );
      setFilteredProducts(filtered);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rola pro topo ao mudar cat
  }, [activeCategory]);

  // Handler de erro de imagem (O "Pulo do Gato" pra imagens quebradas)
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.onerror = null; // Prevem loop infinito
    target.src = "https://via.placeholder.com/400x400?text=Imagem+Indisponivel"; // Placeholder genérico ou uma imagem sua de reserva
    target.className += " opacity-80 grayscale"; // Estilo visual de erro
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* --- CABEÇALHO DA LOJA --- */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-4 text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-2">HC Tech Info Cell</h1>
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Os melhores acessórios de tecnologia com entrega rápida e segurança. 
          Escolha o produto e fale conosco pelo WhatsApp!
        </p>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* --- MENU DE FILTROS (CATEGORIAS) --- */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center sticky top-0 z-10 bg-gray-50 py-4 border-b border-gray-200 shadow-sm backdrop-blur-sm bg-opacity-95">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-md transform scale-105"
                  : "bg-white text-gray-600 border-gray-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- GRADE DE PRODUTOS --- */}
        {loading ? (
          <div className="flex justify-center py-20">
             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                
                {/* Imagem com tratamento de erro */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                   {/* Tag de Desconto/Promoção (Opcional) */}
                   {/* <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">OFERTA</span> */}
                   
                   <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    onError={handleImageError} 
                    loading="lazy"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">
                      {product.category}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-gray-900 leading-snug min-h-[40px]">
                      {product.name}
                    </h3>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-lg font-extrabold text-green-600">
                      {product.price}
                    </span>
                  </div>
                </div>

                {/* Botão de Ação */}
                <div className="px-4 pb-4">
                  <a
                    href={product.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Comprar
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Estado Vazio */
          <div className="text-center py-12 bg-white rounded-lg border border-dashed border-gray-300">
            <p className="text-gray-500">Nenhum produto encontrado nesta categoria.</p>
          </div>
        )}
        
        {/* Contador de resultados */}
        {!loading && filteredProducts.length > 0 && (
          <div className="mt-8 text-center text-sm text-gray-500">
            Exibindo {filteredProducts.length} produto(s)
          </div>
        )}

      </main>
      
      {/* Footer Simples */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12 text-sm">
        <p>© 2023 HC Tech Info Cell - Todos os direitos reservados.</p>
        <p className="opacity-70 mt-1">Paginação segura e atendimento via WhatsApp</p>
      </footer>
    </div>
  );
}
