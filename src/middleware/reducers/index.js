const initialState = {
  trendingToday: [],
  trendingThisWeek: [],
  popularStreaming: [],
  popularOntv: [],
  popularForRent: [],
  popularInTheaters: [],
  freeToWatchMovies: [],
  freeToWatchTv: [],
  popularMovies: [],
  upcomingMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  popularTvShows: [],
  airingTodayTvShows: [],
  tvShowsOnTv: [],
  topRatedTvShows: [],
  popularPeople: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRENDING_TODAY_REQUEST":
    case "FETCH_TRENDING_THIS_WEEK_REQUEST":
    case "FETCH_POPULAR_STREAMING_REQUEST":
    case "FETCH_POPULAR_ON_TV_REQUEST":
    case "FETCH_POPULAR_FOR_RENT_REQUEST":
    case "FETCH_POPULAR_IN_THEATERS__REQUEST":
    case "FETCH_FREE_TO_WATCH_MOVIES__REQUEST":
    case "FETCH_FREE_TO_WATCH_TV__REQUEST":
    case "FETCH_POPULAR_MOVIES_REQUEST":
    case "FETCH_UPCOMING_MOVIES_REQUEST":
    case "FETCH_NOW_PLAYING_MOVIES_REQUEST":
    case "FETCH_TOP_RATED_MOVIES_REQUEST":
    case "FETCH_POPULAR_TV_SHOWS_REQUEST":
    case "FETCH_AIRING_TODAY_TV_SHOWS_REQUEST":
    case "FETCH_TV_SHOWS_ON_TV_REQUEST":
    case "FETCH_TOP_RATED_TV_SHOWS_REQUEST":
    case "FETCH_POPULAR_PEOPLE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_TRENDING_TODAY_SUCCESS":
      return {
        ...state,
        trendingToday: action.payload,
        loading: false,
      };
    case "FETCH_TRENDING_THIS_WEEK_SUCCESS":
      return {
        ...state,
        trendingThisWeek: action.payload,
        loading: false,
      };
    case "FETCH_POPULAR_STREAMING_SUCCESS":
      return {
        ...state,
        popularStreaming: action.payload,
        loading: false,
      };
    case "FETCH_POPULAR_ON_TV_SUCCESS":
      return {
        ...state,
        popularOntv: action.payload,
        loading: false,
      };
    case "FETCH_POPULAR_FOR_RENT_SUCCESS":
      return {
        ...state,
        popularForRent: action.payload,
        loading: false,
      };
    case "FETCH_POPULAR_IN_THEATERS_SUCCESS":
      return {
        ...state,
        popularInTheaters: action.payload,
        loading: false,
      };
    case "FETCH_FREE_TO_WATCH_MOVIES_SUCCESS":
      return {
        ...state,
        freeToWatchMovies: action.payload,
        loading: false,
      };

    case "FETCH_FREE_TO_WATCH_TV_SUCCESS":
      return {
        ...state,
        freeToWatchTv: action.payload,
        loading: false,
      };

    case "FETCH_POPULAR_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: action.payload,
        loading: false,
      };

    case "FETCH_UPCOMING_MOVIES_SUCCESS":
      return {
        ...state,
        upcomingMovies: action.payload,
        loading: false,
      };
    case "FETCH_NOW_PLAYING_MOVIES_SUCCESS":
      return {
        ...state,
        nowPlayingMovies: action.payload,
        loading: false,
      };
    case "FETCH_TOP_RATED_MOVIES_SUCCESS":
      return {
        ...state,
        topRatedMovies: action.payload,
        loading: false,
      };
    case "FETCH_POPULAR_TV_SHOWS_SUCCESS":
      return {
        ...state,
        popularTvShows: action.payload,
        loading: false,
      };
    case "FETCH_AIRING_TODAY_TV_SHOWS_SUCCESS":
      return {
        ...state,
        airingTodayTvShows: action.payload,
        loading: false,
      };
    case "FETCH_TV_SHOWS_ON_TV_SUCCESS":
      return {
        ...state,
        tvShowsOnTv: action.payload,
        loading: false,
      };
    case "FETCH_TOP_RATED_TV_SHOWS_SUCCESS":
      return {
        ...state,
        topRatedTvShows: action.payload,
        loading: false,
      };
    case "FETCH_POPULAR_PEOPLE_SUCCESS":
      return {
        ...state,
        popularPeople: action.payload,
        loading: false,
      };
    case "FETCH_TRENDING_TODAY_FAILURE":
    case "FETCH_TRENDING_THIS_WEEK_FAILURE":
    case "FETCH_POPULAR_STREAMING_FAILURE":
    case "FETCH_POPULAR_ON_TV_FAILURE":
    case "FETCH_POPULAR_FOR_RENT_FAILURE":
    case "FETCH_POPULAR_IN_THEATERS_FAILURE":
    case "FETCH_FREE_TO_WATCH_MOVIES_FAILURE":
    case "FETCH_FREE_TO_WATCH_TV_FAILURE":
    case "FETCH_POPULAR_MOVIES_FAILURE":
    case "FETCH_UPCOMING_MOVIES_FAILURE":
    case "FETCH_NOW_PLAYING_MOVIES_FAILURE":
    case "FETCH_TOP_RATED_MOVIES_FAILURE":
    case "FETCH_POPULAR_TV_SHOWS_FAILURE":
    case "FETCH_AIRING_TODAY_TV_SHOWS_FAILURE":
    case "FETCH_TV_SHOWS_ON_TV_FAILURE":
    case "FETCH_TOP_RATED_TV_SHOWS_FAILURE":
    case "FETCH_POPULAR_PEOPLE_FAILURE":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
