import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navigation } from "../components/Navigation/Navigation";

const HomePage = lazy(() => import("../pages/HomePage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const MovieCast = lazy(() => import("../components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("../components/MovieReviews/MovieReviews")
);

export const App = () => {
  return (
    <div>
      <Navigation />

      <Suspense fallback={<b>Loading page...</b>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Suspense>
    </div>
  );
};
