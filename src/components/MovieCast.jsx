import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../api";

export default function MovieCast() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    const options = {
      autoClose: 3000,
      hideProgressBar: false,
      position: "top-right",
      pauseOnHover: true,
      progress: 0.2,
      delay: 1000,
    };
    async function fetchData() {
      try {
        const fetchedFilm = await getMovieCast(movieId);

        setFilm(fetchedFilm);
      } catch (error) {
        toast.error(`Enter query please`, options);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      {film ? (
        <div>
          <h2>Cast</h2>
          {film.map((item) => (
            <div key={item.id}>
              <h2>Name: {item.name}</h2>
              <img src={item.poster_url} alt={item.title} />
              <p>Character: {item.character}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
