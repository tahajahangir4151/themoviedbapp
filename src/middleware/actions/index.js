import axios from "axios";

const apiKey = "14bcb32096cb088b2c97758d4db1ad94";
const url = "https://api.themoviedb.org/3";

//Nav Link Api Movies

//Fetch Popular Movies

export const fetchPopularMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_MOVIES_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/popular?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_POPULAR_MOVIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_MOVIES_FAILURE",
        payload: error.message,
      });
    }
  };
};

//fetch upcoming movies

export const fetchUpcomigMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_UPCOMING_MOVIES_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/upcoming?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_UPCOMING_MOVIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_UPCOMING_MOVIES_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Nav Link Api TVSHOWS
//Fetch Airing Today TvShows

export const fetchAiringTodayTvShows = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_AIRING_TODAY_TV_SHOWS_REQUEST" });
      const { data } = await axios.get(
        `${url}/tv/airing_today?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_AIRING_TODAY_TV_SHOWS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_AIRING_TODAY_TV_SHOWS_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch TV SHow on TV

export const fetchTvShowsOnTv = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TV_SHOWS_ON_TV_REQUEST" });
      const { data } = await axios.get(
        `${url}/tv/on_the_air?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_TV_SHOWS_ON_TV_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_TV_SHOWS_ON_TV_FAILURE",
        payload: error.message,
      });
    }
  };
};

// Fetch Top Rated Tv Shows
export const fetchTopRatedTvShows = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_TOP_RATED_TV_SHOWS_REQUEST" });
      const { data } = await axios.get(`${url}/tv/top_rated?api_key=${apiKey}`);
      dispatch({ type: "FETCH_TOP_RATED_TV_SHOWS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_TOP_RATED_TV_SHOWS_FAILURE",
        payload: error.message,
      });
    }
  };
};

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
export { fetchTrendingToday, fetchTrendingThisWeek } from "./trending.action";
export {
  fetchPopularStreaming,
  fetchPopularOnTv,
  fetchPopularForRent,
  fetchPopularInTheaters,
} from "./popular.action";
export {
  fetchFreeToWatchMovies,
  fetchFreeToWatchTv,
} from "./freeToWatch.action";
