import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getFilmsById } from "../api";
import MovieDetails from "../components/MovieDetails";

export default function MoviesDetailsPage() {
  const location = useLocation();

  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedFilm = await getFilmsById(movieId);
        setFilm(fetchedFilm);
      } catch (error) {
        console.log("ERROR !!!!");
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <Link to={location.state ?? `/movies`}>Go back to search</Link>
      {film && <MovieDetails film={film} />}
    </div>
  );
}
