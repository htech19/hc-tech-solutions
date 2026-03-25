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
  { name: "Caixa de Som KD-850", category: "Caixas de Som" },
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
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      padding: "30px",
      color: "#fff"
    }}>

      <h1 style={{
        textAlign: "center",
        marginBottom: "10px",
        fontSize: "28px"
      }}>
        🚀 Loja HCTECH
      </h1>

      <p style={{
        textAlign: "center",
        marginBottom: "30px",
        color: "#94a3b8"
      }}>
        🚚 Entrega no mesmo dia para região do ABC
      </p>

      {/* BUSCA */}
      <input
        placeholder="Buscar produtos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "12px",
          border: "none",
          marginBottom: "20px",
          outline: "none",
          fontSize: "14px"
        }}
      />

      {/* FILTRO */}
      <div style={{
        display: "flex",
        gap: "10px",
        marginBottom: "25px",
        flexWrap: "wrap"
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
              background: category === cat ? "#22c55e" : "#334155",
              color: "#fff",
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
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "20px"
      }}>
        {filtered.map((product, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.1)",
              transition: "0.3s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <h3 style={{ fontSize: "16px", marginBottom: "5px" }}>
              {product.name}
            </h3>

            <p style={{
              fontSize: "12px",
              color: "#94a3b8",
              marginBottom: "15px"
            }}>
              {product.category}
            </p>

            <button
              onClick={() => handleWhatsApp(product.name)}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(90deg, #22c55e, #16a34a)",
                color: "#fff",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "0.2s"
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.opacity = "0.9")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.opacity = "1")
              }
            >
              💬 Consultar no WhatsApp
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductPage;
