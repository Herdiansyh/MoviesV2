// src/pages/Film.jsx
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import { filmAPI } from "../services/api";

export default function Film({ footer, datahero }) {
  // State untuk menyimpan data
  const [moviesData, setMoviesData] = useState({
    dataMovies: [],
    imgVertikal: [],
    newReleaseMovies: [],
    topMovies: [],
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

  // Randomize data setelah data di-fetch
  const datamovies = [...moviesData.dataMovies].sort(() => Math.random() - 0.5);
  const topmovies = [...moviesData.topMovies].sort(() => Math.random() - 0.5);
  const newmovies = [...moviesData.newReleaseMovies].sort(
    () => Math.random() - 0.5
  );
  const imgvertikal = [...moviesData.imgVertikal].sort(
    () => Math.random() - 0.5
  );
  const dataheroRandom = [...datahero].sort(() => Math.random() - 0.5);

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
      <Hero datahero={dataheroRandom} />
      <main className="px-6 md:px-20 py-10 space-y-10">
        <MovieSection
          title="Melanjutkan Tontonan series"
          moviesvertikal={imgvertikal}
          type="vertikal"
        />
        <MovieSection
          title="Series dari chill"
          topmovies={topmovies}
          type="topmovies"
        />
        <MovieSection
          title="Top Rating Series Hari ini"
          movies={datamovies}
          type="movies"
        />
        <MovieSection
          title="Series Trending"
          type="topmovies"
          topmovies={topmovies}
        />
        <MovieSection
          title="Rilis Baru"
          type="newmovies"
          newmovies={newmovies}
        />
      </main>
      <Footer footers={footer} />
    </div>
  );
}
