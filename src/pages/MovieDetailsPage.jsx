import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFilmsById } from "../api";

export default function MoviesDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedFilm = await getFilmsById(movieId);
        setFilm(fetchedFilm.results);
        console.log(movieId);
      } catch (error) {
        console.log("ERROR !!!!");
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <Link to="/">Back to Home page</Link>
      <h1>MovieDetailsPage - {movieId}</h1>
      {film && (
        <div>
          <p> Name: {film[0].title}</p>
          <p> Year: {film[0].release_date}</p>
          <p> Genres: {film[0].genre_ids}</p>
        </div>
      )}
    </div>
  );
}
