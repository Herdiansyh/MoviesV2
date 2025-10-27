// src/hooks/useFilmData.js
import { useState, useEffect } from "react";
import { filmAPI } from "../services/api";

export const useFilmData = () => {
  const [data, setData] = useState({
    dataHero: [],
    dataMovies: [],
    topMovies: [],
    newReleaseMovies: [],
    trendingMovies: [],
    imgVertikal: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const allData = await filmAPI.getAllData();
        setData(allData);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching film data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
