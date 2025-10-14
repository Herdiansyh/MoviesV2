import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Profile({ footer }) {
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <div className="flex m-auto h-10"></div>
      <div className="flex gap-3 p-10 bg-amber-200">
        <div className="flex flex-col p-5 m-auto">
          <div className="flex">
            <img
              src="img/profile.png"
              alt="fotoprofile"
              className="w-20 h-20 rounded-full"
            />
            <button className="w-20 ">Ubah Foto</button>
          </div>
        </div>
        <div className="m-auto"></div>
      </div>
    </div>
  );
}
