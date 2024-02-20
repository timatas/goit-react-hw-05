import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState, useRef } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getFilmsById } from "../api";
import MovieDetails from "../components/MovieDetails";
import { BackLink } from "../components/BackLink";

export default function MoviesDetailsPage() {
  const location = useLocation();
  const backLinkRef = useRef(location.state);

  const { movieId } = useParams();
  const [film, setFilm] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const options = {
        autoClose: 3000,
        hideProgressBar: false,
        position: "top-right",
        pauseOnHover: true,
        progress: 0.2,
        delay: 1000,
      };
      try {
        const fetchedFilm = await getFilmsById(movieId);
        setFilm(fetchedFilm);
      } catch (error) {
        toast.error(`Enter query please`, options);
      }
    }
    fetchData();
  }, [movieId]);
  //const backLinkHref = location.state?.from ?? "/movies";
  return (
    <div>
      {/* <Link to={backLinkHref}>Go back </Link> */}
      {/* <Link to={backLinkRef.current.from ?? "/movies"}>Go back </Link> */}
      <BackLink href={backLinkRef.current.from ?? "/movies"}>Go back </BackLink>

      {film && <MovieDetails film={film} />}
    </div>
  );
}
