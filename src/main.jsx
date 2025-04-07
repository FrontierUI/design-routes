import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { HelmetProvider } from 'react-helmet-async';
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </StrictMode>
);
