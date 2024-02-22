import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getFilmsById } from "../api";
import MovieDetails from "../components/MovieDetails/MovieDetails";
import { BackLink } from "../components/BackLink/BackLink";
import { Loader } from "../components/Loader/Loader";

export default function MoviesDetailsPage() {
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLinkRef = useRef(location.state);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const fetchedFilm = await getFilmsById(movieId);
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
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <BackLink href={backLinkRef.current.from ?? "/movies"}>
            Go back{" "}
          </BackLink>

          {film ? <MovieDetails film={film} /> : <h2>No data </h2>}
        </div>
      )}
    </>
  );
}
