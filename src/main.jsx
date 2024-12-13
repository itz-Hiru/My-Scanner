import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/My-Scanner">
    <App />
  </BrowserRouter>
);
