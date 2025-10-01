import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function FormRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // ambil data user lama dari localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // cek apakah username sudah ada
    const isExist = users.find((u) => u.username === username);
    if (isExist) {
      alert("Username sudah terdaftar!");
      return;
    }
    // validasi konfirmasi password
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }

    // simpan user baru
    const newUser = { username, password };
    if (newUser.username === "" || newUser.password === "") {
      alert("Username dan password tidak boleh kosong!");
      return;
    } else {
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      alert("Registrasi berhasil!");
      setUsername("");
      setPassword("");
      // redirect ke halaman login
      navigate("/login");
    }
  };
  return (
    <form className="space-y-5" onSubmit={handleRegister}>
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
      <div>
        <label htmlFor="confirm-password" className="block text-gray-300 mb-1">
          Konfirmasi Kata Sandi
        </label>
        <div className="relative">
          <input
            type="password"
            id="confirm-password"
            className="w-full p-3 rounded-2xl bg-[#272727CC] border border-gray-600 text-white"
            placeholder="Konfirmasi kata sandi"
            onChange={(e) => setConfirmPassword(e.target.value)}
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
          Sudah punya akun?{" "}
          <Link to="/login" className="text-white">
            Masuk
          </Link>
        </span>
      </div>
      <button
        type="submit"
        className="w-full bg-gray-500 hover:bg-gray-600 p-3 rounded-2xl"
      >
        Daftar
      </button>
    </form>
  );
}
