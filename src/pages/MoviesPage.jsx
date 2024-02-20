import { useSearchParams, useLocation } from "react-router-dom";
import { Search } from "../components/Search";
import { getFilmsByQuery } from "../api";
import { useEffect, useState } from "react";
import { FilmList } from "../components/FilmList";
import { toast } from "react-toastify";
import { NavBar } from "../components/NavBar";

export default function MoviesPage() {
  const [films, setFilms] = useState([]);
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const location = useLocation();

  const query = params.get("search") ?? "";

  const QuerySearch = async (newQuery) => {
    params.set("search", newQuery);
    setParams(params);
    setPage(1);
    setFilms([]);
  };

  useEffect(() => {
    const controller = new AbortController();
    if (query === "") {
      return;
    }
    async function fetchData() {
      try {
        const fetchedFilms = await getFilmsByQuery(
          {
            abortController: controller,
          },
          query,
          page
        );

        if (fetchedFilms.results.length === 0) {
          toast.error(`There is nothing for your request! Try again`);
          return;
        }

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
  }, [query, page]);

  const options = {
    autoClose: 3000,
    hideProgressBar: false,
    position: "top-right",
    pauseOnHover: true,
    progress: 0.2,
    delay: 1000,
  };

  return (
    <div>
      <NavBar />

      {error && toast.error(`ERROR! Bad request! Reload page please`, options)}
      <h1>Page for search</h1>

      <Search onSearch={QuerySearch} />

      {films.length > 0 && <FilmList films={films} />}
    </div>
  );
}
