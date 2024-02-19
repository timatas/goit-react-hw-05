import { useEffect, useState } from "react";
import { getFilms } from "../api";
import { FilmList } from "../components/FilmList";
import { NavBar } from "../components/NavBar";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        const fetchedFilms = await getFilms({
          abortController: controller,
        });
        setFilms(fetchedFilms.results);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    }

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      <NavBar />

      <h1>Trending today</h1>

      {films.length > 0 && <FilmList films={films} />}
      {error && <p>OOOOPS! ERROR!</p>}
    </div>
  );
}
