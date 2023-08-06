import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Fetch movies Detail

export const fetchMovieDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_MOVIE_DETAIL_REQUEST" });
      const response = await axios.get(`${url}/movie/${id}?api_key=${apiKey}`);
      const data = response.data;
      dispatch({ type: "FETCH_MOVIE_DETAIL_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_MOVIE_DETAIL_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};

//Fetch Movie Cast

export const fetchMovieCast = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_MOVIE_CAST_REQUEST" });
      const response = await axios.get(
        `${url}/movie/${id}/credits?api_key=${apiKey}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_MOVIE_CAST_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({ type: "FETCH_MOVIE_CAST_FAILURE", payload: error.message });
      return null;
    }
  };
};
