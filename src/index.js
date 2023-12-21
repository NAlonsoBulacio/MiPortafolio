import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import LanguageProvider from "./componentes/Language/LanguageContext";
import MetaPixel from "./componentes/MetaPixel/MetaPixel";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <MetaPixel />
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </BrowserRouter>
);

reportWebVitals();
