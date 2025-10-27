// src/services/api.js
const DATA_URL = "/assets/data.json";

export const filmAPI = {
  // Fetch semua data
  async getAllData() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching all data:", error);
      throw error;
    }
  },

  // Fetch data hero
  async getHeroData() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.dataHero || [];
    } catch (error) {
      console.error("Error fetching hero data:", error);
      throw error;
    }
  },

  // Fetch data movies
  async getMovies() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.dataMovies || [];
    } catch (error) {
      console.error("Error fetching movies:", error);
      throw error;
    }
  },

  // Fetch top movies
  async getTopMovies() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.topMovies || [];
    } catch (error) {
      console.error("Error fetching top movies:", error);
      throw error;
    }
  },

  // Fetch new releases
  async getNewReleases() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.newReleaseMovies || [];
    } catch (error) {
      console.error("Error fetching new releases:", error);
      throw error;
    }
  },

  // Fetch trending movies
  async getTrendingMovies() {
    try {
      const response = await fetch(DATA_URL);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data.trendingMovies || [];
    } catch (error) {
      console.error("Error fetching trending movies:", error);
      throw error;
    }
  },

  // Fetch movie by ID
  async getMovieById(id) {
    try {
      const allData = await this.getAllData();
      const allMovies = [
        ...(allData.dataMovies || []),
        ...(allData.topMovies || []),
        ...(allData.newReleaseMovies || []),
        ...(allData.trendingMovies || []),
      ];
      return allMovies.find((movie) => movie.id === parseInt(id));
    } catch (error) {
      console.error("Error fetching movie by ID:", error);
      throw error;
    }
  },
};
