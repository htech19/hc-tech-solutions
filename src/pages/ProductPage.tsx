import React, { useState } from "react";

type Product = {
  name: string;
  category: string;
};

const products: Product[] = [
  { name: "Fone Bluetooth KD-790", category: "Fones" },
  { name: "Fone Bluetooth KD-788", category: "Fones" },
  { name: "Headphone Bluetooth KD-750", category: "Fones" },
  { name: "Cabo USB Tipo-C", category: "Cabos" },
  { name: "Carregador Turbo Tipo-C", category: "Carregadores" },
  { name: "Power Bank 10000mah", category: "Power Bank" },
  { name: "Caixa de Som KD-850", category: "Som" },
  { name: "Teclado Gamer RGB", category: "Periféricos" },
  { name: "Smartwatch S10 Pro", category: "Smartwatch" },
];

const categories = ["Todos", ...Array.from(new Set(products.map(p => p.category)))];

const ProductPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todos");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "Todos" || p.category === category)
  );

  const handleWhatsApp = (name: string) => {
    const url = `https://wa.me/5511940562933?text=${encodeURIComponent(
      `Olá, quero informações sobre ${name}`
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ background: "#f5f6f8", minHeight: "100vh", padding: "20px" }}>

      {/* HEADER */}
      <div style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <h1 style={{ margin: 0 }}>HCTECH Store</h1>
        <p style={{ color: "#666", marginTop: "5px" }}>
          🚚 Entrega no mesmo dia para região do ABC
        </p>
      </div>

      {/* BUSCA */}
      <input
        placeholder="🔍 Buscar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px"
        }}
      />

      {/* FILTROS */}
      <div style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        marginBottom: "20px"
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{
              padding: "8px 14px",
              borderRadius: "20px",
              border: "none",
              cursor: "pointer",
              background: category === cat ? "#22c55e" : "#e5e7eb",
              color: category === cat ? "#fff" : "#000",
              fontSize: "12px"
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "16px"
      }}>
        {filtered.map((product, i) => (
          <div key={i} style={{
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            transition: "0.2s"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
          >

            {/* IMAGEM FAKE */}
            <div style={{
              height: "140px",
              background: "linear-gradient(135deg, #e2e8f0, #cbd5f5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "#555"
            }}>
              📦 {product.category}
            </div>

            <div style={{ padding: "12px" }}>
              
              {/* BADGE */}
              <span style={{
                fontSize: "10px",
                background: "#22c55e",
                color: "#fff",
                padding: "3px 6px",
                borderRadius: "6px"
              }}>
                Entrega Rápida
              </span>

              <h3 style={{
                fontSize: "14px",
                margin: "8px 0"
              }}>
                {product.name}
              </h3>

              <button
                onClick={() => handleWhatsApp(product.name)}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "none",
                  background: "#25D366",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                💬 Consultar
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductPage;
