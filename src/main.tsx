import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  // Due to StrictMode Mode api call twice in development
  // <StrictMode>
  <App />
  // </StrictMode>
);
