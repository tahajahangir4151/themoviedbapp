import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Fetch popular OnTv Details

export const fetchPopularOnTvDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_ON_TV_DETAIL_REQUEST" });
      const response = await axios.get(`${url}/tv/${id}?api_key=${apiKey}`);
      const data = response.data;
      dispatch({ type: "FETCH_POPULAR_ON_TV_DETAIL_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_ON_TV_DETAIL_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};

//Fetch Free To Watch Tv Detail

export const fetchFreeToWatchTvDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_FREE_TO_WATCH_TV_DETAIL_REQUEST" });
      const response = await axios.get(`${url}/tv/${id}?api_key=${apiKey}`);
      const data = response.data;
      dispatch({
        type: "FETCH_FREE_TO_WATCH_TV_DETAIL_SUCCESS",
        payload: data,
      });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_FREE_TO_WATCH_TV_DETAIL_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};
