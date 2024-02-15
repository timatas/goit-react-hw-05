import { Link } from "react-router-dom";

export const FilmList = ({ films }) => {
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <p> Title: {film.title}</p>

          <Link to={`/movies/${film.id}`}>Film By Id</Link>
        </li>
      ))}
    </ul>
  );
};
