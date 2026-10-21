import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/data/index.css";
import App from "./assets/data/App.tsx";
import { applyTheme, getInitialTheme } from "./assets/utils/theme";

applyTheme(getInitialTheme());

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
