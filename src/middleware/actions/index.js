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

//Fetch Popular Data

//Fetch Popular Streaming Data
export const fetchPopularStreaming = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_STREAMING_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/popular?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_POPULAR_STREAMING_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_STREAMING_FAILURE",
        payload: error.message,
      });
    }
  };
};

// Fetch Popular On Tv Data
export const fetchPopularOnTv = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_ON_TV_REQUEST" });
      const { data } = await axios.get(`${url}/tv/popular?api_key=${apiKey}`);
      dispatch({ type: "FETCH_POPULAR_ON_TV_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_ON_TV_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch Popular For Rent Data
export const fetchPopularForRent = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_FOR_RENT_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/top_rated?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_POPULAR_FOR_RENT_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_FOR_RENT_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch Popular In Theaters Data
export const fetchPopularInTheaters = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_POPULAR_IN_THEATERS_REQUEST" });
      const { data } = await axios.get(
        `${url}/movie/now_playing?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_POPULAR_IN_THEATERS_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_POPULAR_IN_THEATERS_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch Free To Watch Data

//Fetch Free to Watch Movies

export const fetchFreeToWatchMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_FREE_TO_WATCH_MOVIES_REQUEST" });
      const { data } = await axios.get(
        `${url}/discover/movie?api_key=${apiKey}`
      );
      dispatch({ type: "FETCH_FREE_TO_WATCH_MOVIES_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_FREE_TO_WATCH_MOVIES_FAILURE",
        payload: error.message,
      });
    }
  };
};

//Fetch Free to Watch Tv

export const fetchFreeToWatchTv = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_FREE_TO_WATCH_TV_REQUEST" });
      const { data } = await axios.get(`${url}/discover/tv?api_key=${apiKey}`);
      dispatch({ type: "FETCH_FREE_TO_WATCH_TV_SUCCESS", payload: data });
    } catch (error) {
      dispatch({
        type: "FETCH_FREE_TO_WATCH_TV_FAILURE",
        payload: error.message,
      });
    }
  };
};

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
