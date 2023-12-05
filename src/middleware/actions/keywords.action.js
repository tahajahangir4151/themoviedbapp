import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Fetch Movies Keywords

export const fetchMovieKeywords = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_MOVIE_KEYWORDS_REQUEST" });
      const response = await axios.get(
        `${url}/movie/${id}/keywords?api_key=${apiKey}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_MOVIE_KEYWORDS_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_MOVIE_KEYWORDS_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};

// Fetch Tv Keywords

export const fetchTvKeywords = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TV_KEYWORDS_REQUEST" });
      const response = await axios.get(
        `${url}/tv/${id}/keywords?api_key=${apiKey}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_TV_KEYWORDS_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_TV_KEYWORDS_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};
