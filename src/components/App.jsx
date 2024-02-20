import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import css from "./App.module.css";

//import HomePage from "../pages/HomePage";
//import MoviesPage from "../pages/MoviesPage";
//import MovieDetailsPage from "../pages/MovieDetailsPage";
//import NotFound from "../pages/NotFound";
//import Cast from "../components/Cast";
//import Reviews from "../components/Reviews";

const HomePage = lazy(() => import("../pages/HomePage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const NotFound = lazy(() => import("../pages/NotFound"));
const MovieCast = lazy(() => import("../components/MovieCast"));
const MovieReviews = lazy(() => import("../components/MovieReviews"));

export const App = () => {
  return (
    <div>
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
        <ToastContainer />
      </Suspense>
    </div>
  );
};
