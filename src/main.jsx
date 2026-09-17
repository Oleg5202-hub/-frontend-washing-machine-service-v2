import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import "./styles/style.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error('Не знайдено елемент #root у index.html');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
