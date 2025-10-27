// src/pages/Series.jsx
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import { filmAPI } from "../services/api";

export default function Series({ footer, datahero }) {
  // State untuk menyimpan data
  const [moviesData, setMoviesData] = useState({
    dataMovies: [],
    imgVertikal: [],
    newReleaseMovies: [],
    topMovies: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data series
  useEffect(() => {
    const fetchSeriesData = async () => {
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
        console.error("Error fetching series data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSeriesData();
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
      <div className="bg-[#181A1C] text-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-400">Memuat series...</p>
          </div>
        </div>
        <Footer footers={footer} />
      </div>
    );
  }

  // Error component
  if (error) {
    return (
      <div className="bg-[#181A1C] text-white min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex justify-center items-center">
          <div className="text-center">
            <div className="text-red-500 text-6xl mb-4">📺</div>
            <h2 className="text-2xl font-bold text-red-500 mb-2">
              Gagal Memuat Series
            </h2>
            <p className="text-gray-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
            >
              Muat Ulang
            </button>
          </div>
        </div>
        <Footer footers={footer} />
      </div>
    );
  }

  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <Hero datahero={dataheroRandom} />
      <main className="px-6 md:px-20 py-10 space-y-10">
        <MovieSection
          title="Melanjutkan Tontonan Series"
          moviesvertikal={imgvertikal}
          type="vertikal"
        />
        <MovieSection
          title="Series dari Chill"
          topmovies={topmovies}
          type="topmovies"
        />
        <MovieSection
          title="Top Rating Series Hari Ini"
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
