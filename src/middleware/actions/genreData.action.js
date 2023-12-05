import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

// Fetch movie Data on the base of genre id

export const fetchMovieGenreDataById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_MOVIE_GENRE_DATA_REQUEST" });
      const response = await axios.get(
        `${url}/discover/movie?api_key=${apiKey}&with_genres=${id}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_MOVIE_GENRE_DATA_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_MOVIE_GENRE_DATA_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};

//Fetch Tv  Data on the base of genre id

export const fetchTvGenreDataById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TV_GENRE_DATA_REQUEST" });
      const response = await axios.get(
        `${url}/discover/tv?api_key=${apiKey}&with_genres=${id}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_TV_GENRE_DATA_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_TV_GENRE_DATA_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};
