import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Fetch Known For cast data
export const fetchKnownForCastData = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_KNOWN_FOR_CAST_DATA_REQUEST" });
      const response = await axios.get(
        `${url}/person/${id}/combined_credits?api_key=${apiKey}`
      );
      const data = response.data;
      dispatch({ type: "FETCH_KNOWN_FOR_CAST_DATA_SUCCESS", payload: data });
      return data;
    } catch (error) {
      dispatch({
        type: "FETCH_KNOWN_FOR_CAST_DATA_FAILURE",
        payload: error.message,
      });
      return null;
    }
  };
};
