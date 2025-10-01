import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonMasuk from "./ButtonMasuk";

export default function FormLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Ambil semua user dari localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Cari user yang username & password cocok
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      alert("Login berhasil!");
      // Bisa simpan status login ke localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/"); // Redirect ke halaman home
    } else {
      alert("Username atau password salah!");
      return;
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleLogin}>
      <div>
        <label htmlFor="username" className="block text-gray-300 mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full p-3 rounded-2xl bg-[#272727CC] border border-gray-600 text-white"
          placeholder="Masukkan username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-gray-300 mb-1">
          Kata Sandi
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            className="w-full p-3 rounded-2xl bg-[#272727CC] border border-gray-600 text-white"
            placeholder="Masukkan kata sandi"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-3 text-gray-400 w-5 h-5"
          >
            👁
          </button>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-400 mb-5">
        <span>
          Belum punya akun?{" "}
          <Link to="/register" className="text-white">
            Daftar
          </Link>
        </span>
        <Link to="#" className="text-white">
          Lupa kata sandi?
        </Link>
      </div>

      <ButtonMasuk />
    </form>
  );
}
