import React, { useState } from "react";

type Product = {
  name: string;
  category: string;
};

const products: Product[] = [
  // FONES
  { name: "Fone Bluetooth KD-790", category: "Fones" },
  { name: "Fone Bluetooth KD-788", category: "Fones" },
  { name: "Fone Bluetooth Knc-4219", category: "Fones" },
  { name: "Headphone Bluetooth KD-750", category: "Fones" },
  { name: "Headset Gamer Kaidi KD-632", category: "Fones" },
  { name: "Fone Bluetooth LE-366B", category: "Fones" },
  { name: "Fone Bluetooth P9", category: "Fones" },

  // CABOS
  { name: "Cabo USB V8 2 Metros", category: "Cabos" },
  { name: "Cabo USB Tipo-C", category: "Cabos" },
  { name: "Cabo Lightning", category: "Cabos" },
  { name: "Cabo HDMI 5 Metros", category: "Cabos" },

  // CARREGADORES
  { name: "Carregador Rápido Tipo-C", category: "Carregadores" },
  { name: "Carregador Turbo Tipo-C", category: "Carregadores" },
  { name: "Carregador iPhone Lightning", category: "Carregadores" },

  // POWER BANK
  { name: "Power Bank 5000mah", category: "Power Bank" },
  { name: "Power Bank 10000mah", category: "Power Bank" },
  { name: "Power Bank 20000mah", category: "Power Bank" },

  // CAIXAS
  { name: "Caixa de Som KD-850", category: "Caixas de Som" },
  { name: "Caixa de Som KD-833", category: "Caixas de Som" },
  { name: "Boombox 50W", category: "Caixas de Som" },

  // PERIFÉRICOS
  { name: "Teclado Gamer RGB", category: "Periféricos" },
  { name: "Mouse com Fio", category: "Periféricos" },
  { name: "Kit Teclado + Mouse", category: "Periféricos" },

  // SMARTWATCH
  { name: "Smartwatch KW51", category: "Smartwatch" },
  { name: "Smartwatch S10 Pro", category: "Smartwatch" },
];

const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

const ProductPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filteredProducts = products.filter((p) => {
    const matchName = p.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "Todos" || p.category === category;
    return matchName && matchCategory;
  });

  const handleWhatsApp = (productName: string) => {
    const message = `Olá, quero informações sobre ${productName}`;
    const url = `https://wa.me/5511940562933?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      
      <h2 style={{ textAlign: "center" }}>
        🚚 Entrega no mesmo dia para região do ABC
      </h2>

      {/* BUSCA */}
      <input
        type="text"
        placeholder="Buscar produto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          margin: "20px 0",
          borderRadius: "8px",
          border: "1px solid #ccc"
        }}
      />

      {/* FILTRO */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: "8px 12px",
              borderRadius: "20px",
              border: "none",
              background: category === cat ? "#25D366" : "#eee",
              color: category === cat ? "#fff" : "#000",
              cursor: "pointer"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              transition: "0.3s",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
            }}
          >
            <h3>{product.name}</h3>
            <p style={{ fontSize: "12px", color: "#666" }}>{product.category}</p>

            <button
              onClick={() => handleWhatsApp(product.name)}
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                background: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Consultar via WhatsApp
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductPage;
