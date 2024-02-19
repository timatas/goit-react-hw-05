import axios from "axios";

// axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
// `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
// `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
//"https://api.themoviedb.org/3/movie/popular?";
//https://api.themoviedb.org/3/movie/top_rated
//https:api.themoviedb.org/3/find/{external_id}
//'https://api.themoviedb.org/3/search/keyword?page=1'
//https://api.themoviedb.org/3/search/movie
//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

export const getFilms = async ({ abortController }) => {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
  const options = {
    signal: abortController.signal,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQzZWIzYTU4YTk1YWQ4ZjgyZTI5NzkxOWI1MDZmOCIsInN1YiI6IjY1Y2ExZGUxMDgzNTQ3MDE4NGNmYjdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWrN7O7fP8of15ZCCMUKkIho0ndr_iElcD-v4eQ5AA",
    },
  };

  const response = await axios.get("/top_rated?", options);

  return response.data;
};

export const getFilmsById = async (movieId) => {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";
  const options = {
    URL: "https://image.tmdb.org/t/p/w300/",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQzZWIzYTU4YTk1YWQ4ZjgyZTI5NzkxOWI1MDZmOCIsInN1YiI6IjY1Y2ExZGUxMDgzNTQ3MDE4NGNmYjdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWrN7O7fP8of15ZCCMUKkIho0ndr_iElcD-v4eQ5AA",
    },
  };

  const response = await axios.get(`${movieId}?`, options);
  return response.data;
};

export const getFilmsByQuery = async ({ abortController }, query) => {
  axios.defaults.baseURL = "https://api.themoviedb.org/3/search";
  const options = {
    signal: abortController.signal,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQzZWIzYTU4YTk1YWQ4ZjgyZTI5NzkxOWI1MDZmOCIsInN1YiI6IjY1Y2ExZGUxMDgzNTQ3MDE4NGNmYjdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWrN7O7fP8of15ZCCMUKkIho0ndr_iElcD-v4eQ5AA",
    },
  };

  const response = await axios.get(`movie?query=${query}&page=1`, options);
  return response.data;
};
