import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginHeader from "./components/loginHeader/LoginHeader";
import Header from "./components/header/Header";
import QRReader from "./pages/qrReader/QRReader";
import About from "./pages/about/About";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginHeader />} />
      <Route path="/header" element={<Header />} />
      <Route path="//qrreder" element={<QRReader />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default App;
