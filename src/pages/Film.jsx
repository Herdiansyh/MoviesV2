import React from "react";
import {
  dataMovies,
  imgVertikal,
  newReleaseMovies,
  topMovies,
} from "../assets/datafilm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";

export default function Film({ footer, datahero }) {
  const datamovies = [...dataMovies].sort(() => Math.random() - 0.5);
  const topmovies = [...topMovies].sort(() => Math.random() - 0.5);
  const newmovies = [...newReleaseMovies].sort(() => Math.random() - 0.5);
  const imgvertikal = [...imgVertikal].sort(() => Math.random() - 0.5);
  const dataheroRandom = [...datahero].sort(() => Math.random() - 0.5);
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
