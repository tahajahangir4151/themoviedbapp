import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Fetch Trending Data

//Fetch Trending Today Btn Data
export const fetchTrendingToday = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TRENDING_TODAY_REQUEST" });
      const { data } = await axios.get(
        `${url}/trending/all/day?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_TRENDING_TODAY_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_TRENDING_TODAY_FAILURE",
        payload: error.message,
      });
    }
  };
};

// Fetch Trending This Week Data
export const fetchTrendingThisWeek = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TRENDING_THIS_WEEK_REQUEST" });
      const { data } = await axios.get(
        `${url}/trending/movie/week?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_TRENDING_THIS_WEEK_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_TRENDING_THIS_WEEK_FAILURE",
        payload: error.message,
      });
    }
  };
};
