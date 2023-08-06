import axios from "axios";
const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

export const setSearchQuery = (query) => {
  return {
    type: "SET_SEARCH_QUERY",
    payload: query,
  };
};

export const fetchSearchResults = (query) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_SEARCH_RESULTS_REQUEST" });
      const { data } = await axios.get(
        `${url}/search/multi?api_key=${apiKey}&query=${query}`
      );
      dispatch({ type: "FETCH_SEARCH_RESULTS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_SEARCH_RESULTS_FAILURE",
        payload: error.message,
      });
    }
  };
};
