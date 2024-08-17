import css from "./MoviesPage.module.css";
import { getSearchMovies } from "../../api";
import { useEffect, useState, lazy } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import ErrorMsg from "../../components/ErrorMsg/ErrorMsg";
import { Toaster } from "react-hot-toast";
const MovieList = lazy(() => import("../../components/MovieList/MovieList"));

export default function MoviesPage() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
  const fetchMovies = async () => {
    try {
      setLoading(true);
      setIsError(false);
      const query = searchQuery || searchParams.get("query");

      if (!query) return;

      const searchedMovies = await getSearchMovies(query);
      console.log(searchedMovies);

      if (searchedMovies.results.length === 0) {
        setIsError(true);
        setSearchedMovies([]);
      } else {
        setSearchedMovies(searchedMovies.results);
      }
    } catch (error) {
      console.error("Error in fetchMovies:", error);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  fetchMovies();
}, [searchQuery, searchParams]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    searchParams.set("query", query);
    setSearchParams(searchParams);
  };

  return (
    <section className={css.container}>
      <Toaster />
      <SearchBar onSearch={handleSearch} />
      {loading && <Loader />}
      {isError && <ErrorMsg />} 
      {searchedMovies.length > 0 && <MovieList data={searchedMovies} />}
    </section>
  );
}
