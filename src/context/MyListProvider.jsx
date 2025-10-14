import React, { useState, useEffect } from "react";
import { MyListContext } from "./MyListContext";

export function MyListProvider({ children }) {
  const [myList, setMyList] = useState(() => {
    // ambil data dari localStorage saat pertama kali load
    const stored = localStorage.getItem("myList");
    return stored ? JSON.parse(stored) : [];
  });

  // simpan ke localStorage setiap kali myList berubah
  useEffect(() => {
    localStorage.setItem("myList", JSON.stringify(myList));
  }, [myList]);

  const addToMyList = (movie) => {
    if (!myList.some((m) => m.title === movie.title)) {
      setMyList([...myList, movie]);
      alert(`${movie.title} telah ditambahkan ke Daftar Saya`);
    }
  };

  const removeFromMyList = (title) => {
    setMyList(myList.filter((m) => m.title !== title));
    alert(`${title} telah dihapus dari Daftar Saya`);
  };

  return (
    <MyListContext.Provider value={{ myList, addToMyList, removeFromMyList }}>
      {children}
    </MyListContext.Provider>
  );
}
