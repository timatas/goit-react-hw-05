import { Link, Outlet } from "react-router-dom";

export default function MovieDetails({ film }) {
  const URL = "https://image.tmdb.org/t/p/w300";
  const imagePath = film.poster_path;
  const fullURL = `${URL}${imagePath}`;
  const data = film.release_date;
  const year = data.split("-")[0];
  return (
    <div>
      <Link to="/">Go back to list of trending films</Link>

      {
        <div>
          <img src={fullURL} alt={film.title} />
          <h2>
            Name: {film.title} (Year: {year})
          </h2>
          <p>User Score: {Math.floor(film.popularity)}%</p>
          <h2>Overview: </h2>
          <p>{film.overview}</p>
          <p> Genres: </p>
          {film.genres.map((genre) => (
            <ul key={genre.id}>
              <li>{genre.name}</li>
            </ul>
          ))}
          <h2>Additional information:</h2>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      }
    </div>
  );
}
