import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";
import clsx from "clsx";
import css from "../MovieDetails/MovieDetails.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function MovieDetails({ film }) {
  const URL = "https://image.tmdb.org/t/p/w300";
  const imagePath = film.poster_path;
  const fullURL = `${URL}${imagePath}`;
  const data = film.release_date;
  const year = data.split("-")[0];

  return (
    <>
      <div className={css.wrapper}>
        <img src={fullURL} alt={film.title} />

        <div className={css.wrap}>
          <h2>
            Name: {film.title} ({year})
          </h2>
          <p>User Score: {Math.floor(film.popularity)}%</p>
          <h3>Overview: </h3>
          <p>{film.overview}</p>
          <h3> Genres: </h3>
          <ul className={css.genre}>
            {film.genres.map((genre) => (
              <li key={genre.id}>
                <p>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <h2>Additional information:</h2>
      <ul className={css.list}>
        <li>
          <Link to="cast" className={buildLinkClass}>
            MovieCast
          </Link>
        </li>
        <li>
          <Link to="reviews" className={buildLinkClass}>
            MovieReviews
          </Link>
        </li>
      </ul>

      <Suspense fallback={<b>Loading another page...</b>}>
        <Outlet />
      </Suspense>
    </>
  );
}
