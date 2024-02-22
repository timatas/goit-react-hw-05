import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api";
import { Loader } from "../Loader/Loader";
import css from "../MovieReviews/MovieReviews.module.css";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const fetchedFilm = await getMovieReviews(movieId);

        setFilm(fetchedFilm);
      } catch {
        toast.error(`ERROR! Bad request! Reload page please!`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.wrapper}>
          <h1>Movie Reviews</h1>
          {film.length !== 0 && (
            <div>
              <ul>
                {film.map((item) => (
                  <li key={item.id}>
                    <h2>Author: {item.author}</h2>
                    <p>Content: {item.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {film.length === 0 && <p>No reviews available.</p>}
        </div>
      )}
    </div>
  );
}
