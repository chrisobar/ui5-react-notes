import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/Assets.d.ts";
import "@ui5/webcomponents-fiori/dist/Assets.d.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);
