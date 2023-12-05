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
  movieDetail: [],
  popularOntvDetail: [],
  freeToWatchTvDetail: [],
  detailData: {},
  buttonName: "",
  cast: [],
  popularOnTvCast: [],
  freeToWatchTvCast: [],
  crew: [],
  popularOnTvCrew: [],
  freeToWatchTvCrew: [],
  castDetail: [],
  knownFor: [],
  searchQuery: "",
  searchResults: [],
  favourite: [],
  // movieKeywords: [],
  // tvKeywords: [],
  keywords: [],
  activeData: "",
  moviesGenres: [],
  tvGenres: [],
  movieGenreData: [],
  tvGenreData: [],
  movieKeywordData: [],
  tvKeywordData: [],
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
    case "FETCH_MOVIE_DETAIL_REQUEST":
    case "FETCH_POPULAR_ON_TV_DETAIL_REQUEST":
    case "FETCH_FREE_TO_WATCH_TV_DETAIL_REQUEST":
    case "FETCH_MOVIE_CAST_REQUEST":
    case "FETCH_POPULAR_ON_TV_CAST_REQUEST":
    case "FETCH_FREE_TO_WATCH_TV_CAST_REQUEST":
    case "FETCH_CAST_DETAIL_REQUEST":
    case "FETCH_KNOWN_FOR_CAST_DATA_REQUEST":
    case "FETCH_SEARCH_RESULTS_REQUEST":
    case "FETCH_MOVIE_KEYWORDS_REQUEST":
    case "FETCH_TV_KEYWORDS_REQUEST":
    case "FETCH_MOVIES_GENRES_REQUEST":
    case "FETCH_TV_GENRES_REQUEST":
    case "FETCH_MOVIE_GENRE_DATA_REQUEST":
    case "FETCH_TV_GENRE_DATA_REQUEST":
    case "FETCH_MOVIE_KEYWORD_DATA_REQUEST":
    case "FETCH_TV_KEYWORD_DATA_REQUEST":
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
    case "FETCH_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        movieDetail: action.payload,
        loading: false,
      };
    case "FETCH_POPULAR_ON_TV_DETAIL_SUCCESS":
      return {
        ...state,
        popularOntvDetail: action.payload,
        loading: false,
      };
    case "FETCH_FREE_TO_WATCH_TV_DETAIL_SUCCESS":
      return {
        ...state,
        freeToWatchTvDetail: action.payload,
        loading: false,
      };
    case "SET_DETAIL_DATA":
      return {
        ...state,
        detailData: action.payload,
        loading: false,
      };
    case "SET_BUTTON_NAME":
      return {
        ...state,
        buttonName: action.payload,
        loading: false,
      };
    case "FETCH_MOVIE_CAST_SUCCESS":
      return {
        ...state,
        cast: action.payload.cast,
        crew: action.payload.crew,
        loading: false,
      };
    case "FETCH_POPULAR_ON_TV_CAST_SUCCESS":
      return {
        ...state,
        popularOnTvCast: action.payload.cast,
        popularOnTvCrew: action.payload.crew,
        loading: false,
      };
    case "FETCH_FREE_TO_WATCH_TV_CAST_SUCCESS":
      return {
        ...state,
        freeToWatchTvCast: action.payload.cast,
        freeToWatchTvCrew: action.payload.crew,
        loading: false,
      };
    case "FETCH_CAST_DETAIL_SUCCESS":
      return {
        ...state,
        castDetail: action.payload,
        loading: false,
      };
    case "FETCH_KNOWN_FOR_CAST_DATA_SUCCESS":
      return {
        ...state,
        knownFor: action.payload.cast,
        loading: false,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "FETCH_SEARCH_RESULTS_SUCCESS":
      return {
        ...state,
        searchResults: action.payload.results,
        loading: false,
      };
    case "SET_ACTIVE_DATA":
      return {
        ...state,
        activeData: action.payload,
      };
    case "FETCH_MOVIE_KEYWORDS_SUCCESS":
      return {
        ...state,
        keywords: action.payload,
        loading: false,
      };
    case "FETCH_TV_KEYWORDS_SUCCESS":
      return {
        ...state,
        keywords: action.payload,
        loading: false,
      };
    case "FETCH_MOVIES_GENRES_SUCCESS":
      return {
        ...state,
        moviesGenres: action.payload,
        loading: false,
      };
    case "FETCH_TV_GENRES_SUCCESS":
      return {
        ...state,
        tvGenres: action.payload,
        loading: false,
      };
    case "FETCH_MOVIE_GENRE_DATA_SUCCESS":
      return {
        ...state,
        movieGenreData: action.payload,
        loading: false,
      };
    case "FETCH_TV_GENRE_DATA_SUCCESS":
      return {
        ...state,
        tvGenreData: action.payload,
        loading: false,
      };
    case "FETCH_MOVIE_KEYWORD_DATA_SUCCESS":
      return {
        ...state,
        movieKeywordData: action.payload,
        loading: false,
      };
    case "FETCH_TV_KEYWORD_DATA_SUCCESS":
      return {
        ...state,
        tvKeywordData: action.payload,
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
    case "FETCH_MOVIE_DETAIL_FAILURE":
    case "FETCH_POPULAR_ON_TV_DETAIL_FAILURE":
    case "FETCH_FREE_TO_WATCH_TV_DETAIL_FAILURE":
    case "FETCH_MOVIE_CAST_FAILURE":
    case "FETCH_POPULAR_ON_TV_CAST_FAILURE":
    case "FETCH_FREE_TO_WATCH_TV_CAST_FAILURE":
    case "FETCH_CAST_DETAIL_FAILURE":
    case "FETCH_KNOWN_FOR_CAST_DATA_FAILURE":
    case "FETCH_SEARCH_RESULTS_FAILURE":
    case "FETCH_MOVIE_KEYWORDS_FAILURE":
    case "FETCH_TV_KEYWORDS_FAILURE":
    case "FETCH_MOVIES_GENRES_FAILURE":
    case "FETCH_TV_GENRES_FAILURE":
    case "FETCH_MOVIE_GENRE_DATA_FAILURE":
    case "FETCH_TV_GENRE_DATA_FAILURE":
    case "FETCH_MOVIE_KEYWORD_DATA_FAILURE":
    case "FETCH_TV_KEYWORD_DATA_FAILURE":
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
