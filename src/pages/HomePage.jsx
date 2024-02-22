import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { getFilms } from "../api";
import { MovieList } from "../components/MovieList/MovieList";
import { Loader } from "../components/Loader/Loader";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        const fetchedFilms = await getFilms({
          abortController: controller,
        });
        setFilms(fetchedFilms.results);
      } catch {
        toast.error(`ERROR! Bad request! Reload page please!`);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>

      {isLoading ? <Loader /> : <MovieList films={films} />}
    </div>
  );
}
