import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // Configurações do servidor de desenvolvimento
  server: {
    host: "0.0.0.0",
    port: 8080,
  },
  // Plugins: Usamos apenas o plugin oficial do React para máxima estabilidade
  plugins: [
    react(),
    // IMPORTANTE: Removidos plugins externos como 'lovable-tagger' que travavam o build
  ],
  resolve: {
    alias: {
      // Define o atalho '@' para a pasta 'src', facilitando as importações
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Otimizações para o processo de build no GitHub Actions
  build: {
    outDir: "dist",
    reportCompressedSize: false, // Acelera o build
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
