// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DaftarSaya from "./pages/DaftarSaya";
import Series from "./pages/Series";

export default function App() {
  const footers = [
    {
      title: "Genre",
      links: ["Action", "Romance", "Anime", "Horror", "Thriller"],
    },
    {
      title: "Bantuan",
      links: ["FAQ", "Kontak Kami", "Privasi", "Syarat & Ketentuan"],
    },
    { title: "Tentang Kami", links: ["Tentang Chill", "Blog"] },
  ];
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home footer={footers} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/series" element={<Series footer={footers} />} />
        <Route path="/daftar-saya" element={<DaftarSaya footer={footers} />} />
      </Routes>
    </Router>
  );
}
