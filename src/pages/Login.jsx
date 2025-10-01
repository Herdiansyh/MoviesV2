// src/pages/Login.jsx

import ButtonMasukGoogle from "../components/ButtonMasukGoogle";
import FormLogin from "../components/FormLogin";

export default function Login() {
  return (
    <div className="bg-[url('/img/bg-login.jpg')] bg-cover bg-center min-h-screen flex justify-center items-center p-4">
      <div className="bg-[#272727CC] p-8 rounded-2xl w-full  max-w-md">
        <div className="flex justify-center lg:mb-6 mb-4">
          <img src="/img/logoChil.png" alt="Logo" className="lg:w-40 w-30" />
        </div>
        <div className="text-center mb-6">
          <h2 className="lg:text-xl text-lg mb-1 text-gray-400">Masuk</h2>
          <p className="text-gray-400 text-sm">Selamat datang kembali!</p>
        </div>
        <FormLogin />
        <div className="text-center text-gray-400 my-4">Atau</div>
        <ButtonMasukGoogle />
      </div>
    </div>
  );
}
