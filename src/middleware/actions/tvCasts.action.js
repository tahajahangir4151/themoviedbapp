import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//fetch popular on tv cast

export const fetchPopularOnTvCast = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_ON_TV_CAST_REQUEST" });
      const response = await axios.get(
        `${url}/tv/${id}/credits?api_key=${apiKey}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_POPULAR_ON_TV_CAST_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_ON_TV_CAST_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};

//Fetch Free To Watch Tv cast

export const fetchFreeToWatchTvCast = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_FREE_TO_WATCH_TV_CAST_REQUEST" });
      const response = await axios.get(
        `${url}/tv/${id}/credits?api_key=${apiKey}`
      );
      const data = response.data;
      dispatch({
        type: "FETCH_FREE_TO_WATCH_TV_CAST_SUCCESS",
        payload: data,
      });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_FREE_TO_WATCH_TV_CAST_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};
