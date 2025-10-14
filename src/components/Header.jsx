import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    const isConfirmed = confirm("Apakah Anda yakin ingin logout?");
    if (!isConfirmed) {
      return;
    } else {
      localStorage.removeItem("loggedInUser");
      navigate("/login");
    }
  };

  return (
    <header className="bg-[#181A1C] flex justify-between z-70 w-full fixed  items-center py-[10px] px-[20px] sm:px-[80px] sm:py-[25px] ">
      <div className="flex items-center sm:gap-[80px] gap-[12px] ">
        <Link to="/home">
          <img
            src="/img/logoChil.png"
            alt="Logo Chill"
            className=" hidden sm:block w-24"
          />
          <img
            src="/img/logoChil2.png"
            alt="Logo Chill"
            className="w-7  sm:hidden"
          />
        </Link>
        <nav className="flex gap-[12px] md:gap-[80px] text-[10px] sm:text-[18px]">
          <NavLink
            to="/series"
            className={({ isActive }) =>
              isActive ? "text-gray-700" : "hover:text-gray-700 text-white"
            }
          >
            Series
          </NavLink>
          <NavLink
            to="/film"
            className={({ isActive }) =>
              isActive ? "text-gray-700" : "hover:text-gray-700 text-white"
            }
          >
            Film
          </NavLink>
          <NavLink
            to="/daftar-saya"
            className={({ isActive }) =>
              isActive ? "text-gray-700" : "hover:text-gray-700 text-white"
            }
          >
            Daftar Saya
          </NavLink>
        </nav>
      </div>

      {/* Tombol Profile */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 focus:outline-none hover:cursor-pointer"
        >
          <div
            className="w-8 h-8 rounded-full bg-cover"
            style={{ backgroundImage: "url(/img/profile.png)" }}
          ></div>
          <span className="text-white">▼</span>
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-[#2d2d2d] rounded-md shadow-lg py-2 z-50">
            <p className="px-4 py-2 text-sm text-white border-b">
              {user ? `Hi, ${user.username}` : "Belum login"}
            </p>
            <button className="block px-4 py-2 text-sm hover:text-blue-700 hover:cursor-pointer w-full text-left">
              <i className="fi fi-sr-user"></i> Profile
            </button>
            <button className="block px-4 py-2 text-sm hover:text-blue-700 hover:cursor-pointer w-full text-left">
              <i className="fi fi-sr-star"></i> Premium
            </button>
            <button
              onClick={handleLogout}
              className="block px-4 py-2 text-sm text-red-600 hover:text-blue-700 hover:cursor-pointer w-full text-left"
            >
              <i className="fi fi-sr-exit"></i> Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
