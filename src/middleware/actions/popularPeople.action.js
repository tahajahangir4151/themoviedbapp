import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

// Fetch Popular People
export const fetchPopularPeople = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_PEOPLE_REQUEST" });
      const { data } = await axios.get(
        `${url}/trending/person/day?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_POPULAR_PEOPLE_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_PEOPLE_FAILURE",
        payload: error.message,
      });
    }
  };
};
