// Adicione o import das películas no topo da LojaPage.tsx
import { peliculas } from "@/data/peliculas-data";

// Dentro do componente LojaPage, atualize a lógica do filteredProducts:
const filteredProducts = useMemo(() => {
  const searchLower = search.toLowerCase();
  
  // Filtra produtos normais
  const shopItems = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchLower);
    const matchCat = activeCategory === "Todos" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  // Se a categoria for "Películas" ou "Todos", adiciona a lógica de busca do arquivo de películas
  if (activeCategory === "Películas" || (activeCategory === "Todos" && search.length > 2)) {
    const peliculaItems = peliculas
      .filter(p => p.model.toLowerCase().includes(searchLower) || p.marca.toLowerCase().includes(searchLower))
      .map(p => ({
        id: `pel-${p.model}`,
        name: `Película ${p.marca} ${p.model}`,
        category: "Películas",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500", // Imagem padrão para películas
        badge: "Disponível"
      }));
    
    return [...shopItems, ...peliculaItems];
  }

  return shopItems;
}, [search, activeCategory]);
