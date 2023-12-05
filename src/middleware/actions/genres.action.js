import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

// Fetch Movies Genres

export const fetchMoviesGenres = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_MOVIES_GENRES_REQUEST" });
      const response = await axios.get(
        `${url}/genre/movie/list?api_key=${apiKey}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_MOVIES_GENRES_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_MOVIES_GENRES_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};

// Fetch TV Genres

export const fetchTvGenres = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TV_GENRES_REQUEST" });
      const response = await axios.get(
        `${url}/genre/tv/list?api_key=${apiKey}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_TV_GENRES_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_TV_GENRES_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};
