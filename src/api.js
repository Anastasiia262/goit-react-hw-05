import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjdmY2VmZTgxMDVlNDU0M2I2ZDVjNjEwN2I4OThjMCIsIm5iZiI6MTcyMzQ1MTQxMy4wNDg2NjEsInN1YiI6IjY2YjljNWQyOWRmODU0M2I5NDRhODRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HLItb51CN4rF641qsfgpDxBS9EMCqY5Nk5eLWTBufIo",
  },
};

export const getTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", options);
  return response.data.results;
};
export const getSearchMovies = async (query) => {
  const response = await axios.get("/search/movie", {
    params: {
      query: query,
    },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjdmY2VmZTgxMDVlNDU0M2I2ZDVjNjEwN2I4OThjMCIsIm5iZiI6MTcyMzQ1MTQxMy4wNDg2NjEsInN1YiI6IjY2YjljNWQyOWRmODU0M2I5NDRhODRhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HLItb51CN4rF641qsfgpDxBS9EMCqY5Nk5eLWTBufIo",
    },
  });
  return response.data;
};
export const getMovieDetails = async (id) => {
  const response = await axios.get(`/movie/${id}`, options);
  return response.data;
};
export const getMovieCast = async (id) => {
  const response = await axios.get(`/movie/${id}/credits`, options);
  return response.data.cast;
};
export const getMovieReviews = async (id) => {
  const response = await axios.get(`/movie/${id}/reviews`, options);
  return response.data.results;
};