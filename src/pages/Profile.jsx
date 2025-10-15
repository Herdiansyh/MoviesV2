import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile({ footer }) {
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <div className="flex m-auto h-10">
        <div className="flex gap-3 p-10">
          <div className="flex flex-col w-full p-5 m-auto">
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
              <button className="w-20 h-10 bg-blue-700">Simpan</button>
              <input type="text" name="name" id="name" placeholder="username" />
            </div>
          </div>
          <div className="m-auto"></div>
        </div>
      </div>
    </div>
  );
}
