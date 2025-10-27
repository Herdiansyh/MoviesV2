// src/pages/Home.jsx
import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { filmAPI } from "../services/api";

export default function Home({ footer, datahero }) {
  const navigate = useNavigate();
  const hasChecked = useRef(false);

  // State untuk menyimpan data
  const [moviesData, setMoviesData] = useState({
    dataHero: [],
    dataMovies: [],
    topMovies: [],
    newReleaseMovies: [],
    trendingMovies: [],
    imgVertikal: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data movies
  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        setLoading(true);
        const allData = await filmAPI.getAllData();
        setMoviesData({
          dataHero: allData.dataHero || [],
          trendingMovies: allData.trendingMovies || [],
          dataMovies: allData.dataMovies || [],
          imgVertikal: allData.imgVertikal || [],
          newReleaseMovies: allData.newReleaseMovies || [],
          topMovies: allData.topMovies || [],
        });
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching movies data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesData();
  }, []);

  // Check authentication
  useEffect(() => {
    if (!hasChecked.current) {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!user) {
        alert("Silakan login terlebih dahulu!");
        navigate("/login");
      }
      hasChecked.current = true;
    }
  }, [navigate]);

  // Loading component
  if (loading) {
    return (
      <div className="bg-[#181A1C] text-white min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error component
  if (error) {
    return (
      <div className="bg-[#181A1C] text-white min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Error Loading Data
          </h2>
          <p className="text-gray-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <Hero datahero={datahero} />
      <main className="px-6 md:px-20 py-10 space-y-10">
        <MovieSection
          title="Melanjutkan Tontonan Film series"
          moviesvertikal={moviesData.imgVertikal}
          type="vertikal"
        />
        <MovieSection
          title="Persembahan dari chill"
          topmovies={moviesData.topMovies}
          type="topmovies"
        />
        <MovieSection
          title="Top Rating Film dan Series Hari ini"
          movies={moviesData.dataMovies}
          type="movies"
        />
        <MovieSection
          title="Film Trending"
          type="topmovies"
          topmovies={moviesData.topMovies}
        />
        <MovieSection
          title="Rilis Baru"
          type="newmovies"
          newmovies={moviesData.newReleaseMovies}
        />
      </main>
      <Footer footers={footer} />
    </div>
  );
}
