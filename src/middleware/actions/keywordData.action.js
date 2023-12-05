import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

// Fetch movie Data on the base of Keyword id

export const fetchMovieKeywordDataById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_MOVIE_KEYWORD_DATA_REQUEST" });
      const response = await axios.get(
        `${url}/discover/movie?api_key=${apiKey}&with_keywords=${id}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_MOVIE_KEYWORD_DATA_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_MOVIE_KEYWORD_DATA_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};

//Fetch Tv  Data on the base of Keyword id

export const fetchTvKeywordDataById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TV_KEYWORD_DATA_REQUEST" });
      const response = await axios.get(
        `${url}/discover/tv?api_key=${apiKey}&with_keywords=${id}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_TV_KEYWORD_DATA_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_TV_KEYWORD_DATA_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};
