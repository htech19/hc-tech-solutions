import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Anti-clickjacking (frame-buster) — fallback p/ ambientes sem header HTTP
if (window.top !== window.self) {
  try {
    window.top!.location.href = window.self.location.href;
  } catch {
    document.body.style.display = "none";
  }
}

createRoot(document.getElementById("root")!).render(<App />);
