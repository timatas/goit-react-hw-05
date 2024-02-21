import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "../components/FilmList.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          <NavLink
            to={`/movies/${film.id}`}
            state={{ from: location }}
            className={buildLinkClass}
          >
            {film.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
