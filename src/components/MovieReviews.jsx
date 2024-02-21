import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../api";

export default function MovieReviews() {
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
        const fetchedFilm = await getMovieReviews(movieId);

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
          <h2>Reviews</h2>
          {film.map((review, index) => (
            <div key={index}>
              <p>Author: {review.author}</p>
              <p>Content: {review.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews available.</p>
      )}
    </div>
  );
}
