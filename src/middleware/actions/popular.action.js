import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Fetch Popular Data

//Fetch Popular Streaming Data
export const fetchPopularStreaming = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_STREAMING_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/popular?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_POPULAR_STREAMING_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_STREAMING_FAILURE",
        payload: error.message,
      });
    }
  };
};

// Fetch Popular On Tv Data
export const fetchPopularOnTv = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_ON_TV_REQUEST" });
      const { data } = await axios.get(`${url}/tv/popular?api_key=${apiKey}`);
      dispatch({ type: "FETCH_POPULAR_ON_TV_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_ON_TV_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch Popular For Rent Data
export const fetchPopularForRent = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_FOR_RENT_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/top_rated?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_POPULAR_FOR_RENT_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_FOR_RENT_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch Popular In Theaters Data
export const fetchPopularInTheaters = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_IN_THEATERS_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/now_playing?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_POPULAR_IN_THEATERS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_IN_THEATERS_FAILURE",
        payload: error.message,
      });
    }
  };
};
