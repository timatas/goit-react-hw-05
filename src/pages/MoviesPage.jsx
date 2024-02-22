import { useSearchParams } from "react-router-dom";
import { Search } from "../components/Search/Search";
import { getFilmsByQuery } from "../api";
import { useEffect, useState } from "react";
import { MovieList } from "../components/MovieList/MovieList";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loader } from "../components/Loader/Loader";

export default function MoviesPage() {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();

  const query = params.get("search") ?? "";

  const movieSearch = async (newSearch) => {
    params.set("search", newSearch);
    setParams(params);
  };

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsLoading(true);
        const fetchedFilms = await getFilmsByQuery(
          {
            abortController: controller,
          },
          query
        );
        setFilms(fetchedFilms.results);
      } catch {
        toast.error(`ERROR! Bad request! Reload page please!`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [query]);

  return (
    <div>
      <h1>Page for search</h1>
      {isLoading ? (
        <Loader />
      ) : films.length === 0 && query ? (
        <div>
          <Search onSubmit={movieSearch} />
          <h2>Nothing found for this query</h2>
        </div>
      ) : (
        <div>
          <Search onSubmit={movieSearch} />
          <MovieList films={films} />
        </div>
      )}
    </div>
  );
}
