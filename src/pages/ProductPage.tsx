import React from "react";

type Product = {
  name: string;
  category: string;
};

const products: Product[] = [
  // FONES BLUETOOTH / HEADSETS
  { name: "Fone Bluetooth KD-790", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth KD-788", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth Knc-4219", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth Knc-5601", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth Knc-5602", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth Knc-5603", category: "Fones Bluetooth" },
  { name: "Headphone Bluetooth KD-750", category: "Fones Bluetooth" },
  { name: "Headset Bluetooth Kaidi KD-752", category: "Fones Bluetooth" },
  { name: "Headset Gamer Kaidi KD-632", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth LE-366B", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth LE-362", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth LE-391-1", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth Le-365", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth J-90 Pro", category: "Fones Bluetooth" },
  { name: "Fone de Ouvido Bluetooth P9", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth St-158", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth ST-159", category: "Fones Bluetooth" },
  { name: "Fone Bluetooth ST-160", category: "Fones Bluetooth" },

  // CABOS
  { name: "Cabo Usb/V8 (2 Metros)", category: "Cabos" },
  { name: "Usb/V8 (Com Silicone)", category: "Cabos" },
  { name: "Usb/V8 (Sem Silicone)", category: "Cabos" },
  { name: "Usb/Micro (3 Metros)", category: "Cabos" },
  { name: "Usb/Tipo-C", category: "Cabos" },
  { name: "Usb/Lightning", category: "Cabos" },
  { name: "Cabo HDMI (5 Metros)", category: "Cabos" },

  // CARREGADORES
  { name: "Fonte de Carregamento Duplo USB", category: "Carregadores" },
  { name: "Carregador Rápido Tipo-C", category: "Carregadores" },
  { name: "Carregador Turbo Tipo-C", category: "Carregadores" },
  { name: "Carregador iPhone Lightning", category: "Carregadores" },

  // POWER BANK
  { name: "Power Bank 5000mah", category: "Power Bank" },
  { name: "Power Bank 10000mah", category: "Power Bank" },
  { name: "Power Bank 20000mah", category: "Power Bank" },

  // CAIXAS DE SOM
  { name: "Caixa de Som KD-850", category: "Caixas de Som" },
  { name: "Caixa de Som KD-833", category: "Caixas de Som" },
  { name: "Caixinha de Som Knc-826", category: "Caixas de Som" },
  { name: "Boombox 50W", category: "Caixas de Som" },

  // PERIFÉRICOS
  { name: "Teclado Gamer RGB", category: "Periféricos" },
  { name: "Mouse com Fio", category: "Periféricos" },
  { name: "Teclado e Mouse Kit", category: "Periféricos" },

  // SUPORTES
  { name: "Suporte Celular Carro", category: "Suportes" },
  { name: "Suporte Celular Moto", category: "Suportes" },

  // MEMÓRIA
  { name: "Cartão de Memória 32GB", category: "Memória" },
  { name: "Pendrive 64GB", category: "Memória" },

  // SMARTWATCH
  { name: "Smartwatch KW51", category: "Smartwatch" },
  { name: "Smartwatch S10 Pro", category: "Smartwatch" },
];

const ProductPage: React.FC = () => {
  const handleWhatsApp = (productName: string) => {
    const message = `Olá, quero informações sobre ${productName}`;
    const url = `https://wa.me/5511940562933?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🚚 Entrega no mesmo dia para região do ABC
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {products.map((product, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "16px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget.style.transform = "scale(1.03)"),
              (e.currentTarget.style.boxShadow =
                "0 4px 16px rgba(0,0,0,0.2)"))
            }
            onMouseLeave={(e) =>
              ((e.currentTarget.style.transform = "scale(1)"),
              (e.currentTarget.style.boxShadow =
                "0 2px 8px rgba(0,0,0,0.1)"))
            }
          >
            <h3 style={{ fontSize: "16px" }}>{product.name}</h3>
            <p style={{ fontSize: "12px", color: "#666" }}>
              {product.category}
            </p>

            <button
              style={{
                marginTop: "10px",
                width: "100%",
                padding: "10px",
                background: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
              onClick={() => handleWhatsApp(product.name)}
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
