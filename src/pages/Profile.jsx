import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile({ footer }) {
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <div className="flex w-full m-auto h-10"> </div>

      <div className="flex gap-3 p-10">
        <div className="flex  w-full p-5 m-auto gap-6">
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2">
              <img
                src="img/profile.png"
                alt="fotoprofile"
                className="w-25  rounded-full"
              />
              <div className="flex flex-col gap-2">
                <button className="w-20 h-7 text-sm border border-solid rounded-full text-blue-700 border-blue-600 ">
                  Ubah Foto
                </button>
                <span className="text-sm">Maksimal 2MB</span>
              </div>
            </div>
            <div className="mb-5 p-1 w-full h-14 bg-gray-800 border border-solid border-gray-500">
              <label htmlFor="name" className="block">
                Nama Pengguna
              </label>
              <input type="text" name="name" id="name" placeholder="username" />
            </div>
            <div className="p-1 mb-5 w-full h-14 bg-gray-800 border border-solid border-gray-500">
              <label htmlFor="name" className="block">
                Nama Pengguna
              </label>
              <input type="text" name="name" id="name" placeholder="username" />
            </div>
            <div className="p-1 w-full h-14 bg-gray-800 border border-solid border-gray-500">
              <label htmlFor="name" className="block">
                Nama Pengguna
              </label>
              <input type="text" name="name" id="name" placeholder="username" />
            </div>
            <button className="w-20 h-10 mt-5 rounded-full bg-blue-700">
              Simpan
            </button>
          </div>
          <div className="w-full bg-gray-700 border border-solid rounded-2xl p-2 border-gray-500 h-40">
            <div className="">
              <span className="text-xl block">
                Anda belum berlangganan saat ini!
              </span>
              <span className="text-sm">Dapatkan akses!</span>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
