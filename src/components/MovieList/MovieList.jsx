import { Link, useLocation } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ data }) {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {data.map((movie) => (
        <li className={css.item} key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <img
              className={css.poster}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                  : "https://via.placeholder.com/200x300?text=No+Image"
              }
              alt={movie.title}
            />
            <p className={css.title}>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
