import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Fetch cast Detail
export const fetchCastDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_CAST_DETAIL_REQUEST" });
      const response = await axios.get(`${url}/person/${id}?api_key=${apiKey}`);
      const data = response.data;
      dispatch({ type: "FETCH_CAST_DETAIL_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_CAST_DETAIL_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};
