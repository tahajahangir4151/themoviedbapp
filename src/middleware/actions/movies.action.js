import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Nav Link Api Movies

//Fetch Popular Movies

export const fetchPopularMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_MOVIES_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/popular?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_POPULAR_MOVIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_MOVIES_FAILURE",
        payload: error.message,
      });
    }
  };
};

//fetch upcoming movies

export const fetchUpcomigMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_UPCOMING_MOVIES_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/upcoming?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_UPCOMING_MOVIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_UPCOMING_MOVIES_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch Now Playing movies
export const fetchNowPlayingMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_NOW_PLAYING_MOVIES_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/now_playing?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_NOW_PLAYING_MOVIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_NOW_PLAYING_MOVIES_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch topRated movies
export const fetchTopRatedMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TOP_RATED_MOVIES_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/top_rated?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_TOP_RATED_MOVIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_TOP_RATED_MOVIES_FAILURE",
        payload: error.message,
      });
    }
  };
};
