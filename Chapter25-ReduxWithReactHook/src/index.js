import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ProductsProvider from "./context/products-context";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

root.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>
);
