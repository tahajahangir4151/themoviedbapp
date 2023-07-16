import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Fetch Free To Watch Data

//Fetch Free to Watch Movies

export const fetchFreeToWatchMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_FREE_TO_WATCH_MOVIES_REQUEST" });
      const { data } = await axios.get(
        `${url}/discover/movie?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_FREE_TO_WATCH_MOVIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_FREE_TO_WATCH_MOVIES_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch Free to Watch Tv

export const fetchFreeToWatchTv = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_FREE_TO_WATCH_TV_REQUEST" });
      const { data } = await axios.get(`${url}/discover/tv?api_key=${apiKey}`);
      dispatch({ type: "FETCH_FREE_TO_WATCH_TV_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_FREE_TO_WATCH_TV_FAILURE",
        payload: error.message,
      });
    }
  };
};
