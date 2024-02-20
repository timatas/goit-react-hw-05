import { Link, useLocation } from "react-router-dom";

export const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            `{film.title}`
          </Link>
        </li>
      ))}
    </ul>
  );
};
