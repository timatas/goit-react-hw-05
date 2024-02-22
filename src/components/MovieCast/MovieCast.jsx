import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api";
import css from "../MovieCast/MovieCast.module.css";
import { Loader } from "../Loader/Loader";

export default function MovieCast() {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const fetchedFilm = await getMovieCast(movieId);

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
          <h1>Movie Cast</h1>

          {film.length !== 0 && (
            <div>
              <ul className={css.list}>
                {film.map((item) => (
                  <li className={css.item} key={item.id}>
                    <h2 className={css.actorNameText}>{item.name}</h2>
                    <img
                      className={css.image}
                      src={item.poster_url}
                      alt={item.title}
                    />
                    <p className={css.actorNameText}>
                      Character: {item.character}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {film.length === 0 && <p>No data for moviecast</p>}
        </div>
      )}
    </div>
  );
}
