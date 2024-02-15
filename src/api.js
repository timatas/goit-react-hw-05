import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie";

//"https://api.themoviedb.org/3/movie/popular?";
//https://api.themoviedb.org/3/movie/top_rated
//https:api.themoviedb.org/3/find/{external_id}
//https://api.themoviedb.org/3/search/keyword
//https://api.themoviedb.org/3/search/movie
//https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1

export const getFilms = async ({ abortController }) => {
  //   const url =
  //     "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  const options = {
    //
    signal: abortController.signal,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQzZWIzYTU4YTk1YWQ4ZjgyZTI5NzkxOWI1MDZmOCIsInN1YiI6IjY1Y2ExZGUxMDgzNTQ3MDE4NGNmYjdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWrN7O7fP8of15ZCCMUKkIho0ndr_iElcD-v4eQ5AA",
    },
  };

  const response = await axios.get("/popular?", options);

  return response.data;
};

export const getFilmsById = async (movieId) => {
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmQzZWIzYTU4YTk1YWQ4ZjgyZTI5NzkxOWI1MDZmOCIsInN1YiI6IjY1Y2ExZGUxMDgzNTQ3MDE4NGNmYjdmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImWrN7O7fP8of15ZCCMUKkIho0ndr_iElcD-v4eQ5AA",
    },
  };

  const response = await axios.get(`/popular?id=${movieId}`, options);
  return response.data;
};
