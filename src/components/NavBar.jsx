import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./NavBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const NavBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>

        <NavLink to="/movies/:movieId" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
