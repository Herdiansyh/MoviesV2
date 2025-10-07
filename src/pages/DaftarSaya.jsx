import React from "react";
import Header from "../components/Header";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import { useMyList } from "../components/context/MyListContext";

export default function DaftarSaya({ footer }) {
  const { myList } = useMyList();
  console.log(myList);
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />

      <main className="px-6 md:px-20 flex flex-col py-10 space-y-10">
        {myList.length > 0 ? (
          <MovieSection
            title="Daftar Saya"
            daftarsaya={myList}
            type="daftar-saya"
          />
        ) : (
          <h2 className="pt-20 text-white text-center ">
            Daftar Kosong! Movie belum ditambahkan
          </h2>
        )}
      </main>
      <Footer footers={footer} />
    </div>
  );
}
