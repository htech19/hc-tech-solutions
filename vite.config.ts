import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    // Usar 0.0.0.0 é mais estável para containers e deploys que o ::
    host: "0.0.0.0", 
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    // O filter(Boolean) garante que o plugin só rode se o componentTagger existir
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
