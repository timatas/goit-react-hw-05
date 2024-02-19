import { Link } from "react-router-dom";

export const FilmList = ({ films }) => {
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`}>`{film.title}`</Link>
        </li>
      ))}
    </ul>
  );
};
