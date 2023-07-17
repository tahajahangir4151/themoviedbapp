import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAiringTodayTvShows,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchPopularPeople,
  fetchTopRatedMovies,
  fetchTopRatedTvShows,
  fetchTvShowsOnTv,
  fetchUpcomigMovies,
} from "../middleware/actions";
import { Contexts } from "../contexts/contexts";
import { fetchPopularTvShows } from "../middleware/actions/tvShows.action";

const DropDown = () => {
  const { setMovies, setTvShows, setActiveData, setPopularPeople } =
    useContext(Contexts);
  const [isOpenMovies, setIsOpenMovies] = useState(false);
  const [isOpenTvShows, setIsOpenTvShows] = useState(false);
  const [isOpenPeople, setIsOpenPeople] = useState(false);
  const [isOpenMore, setIsOpenMore] = useState(false);

  const dispatch = useDispatch();

  const popularMovies = useSelector((state) => state.popularMovies);
  const nowPlayingMovies = useSelector((state) => state.nowPlayingMovies);
  const upComingMovies = useSelector((state) => state.upcomingMovies);
  const topRated = useSelector((state) => state.topRatedMovies);
  const popularTvShows = useSelector((state) => state.popularTvShows);
  const airingTodayTvShows = useSelector((state) => state.airingTodayTvShows);
  const tvShowsOnTv = useSelector((state) => state.tvShowsOnTv);
  const topRatedTvShows = useSelector((state) => state.topRatedTvShows);
  const popularPeople = useSelector((state) => state.popularPeople);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchNowPlayingMovies());
    dispatch(fetchUpcomigMovies());
    dispatch(fetchTopRatedMovies());
    dispatch(fetchPopularTvShows());
    dispatch(fetchAiringTodayTvShows());
    dispatch(fetchTvShowsOnTv());
    dispatch(fetchTopRatedTvShows());
    dispatch(fetchPopularPeople());
  }, [dispatch]);

  const handleButtonClickMovies = (buttonName) => {
    if (buttonName === "popular") {
      setMovies(popularMovies);
      setActiveData("movies");
    } else if (buttonName === "now_playing") {
      setMovies(nowPlayingMovies);
      setActiveData("movies");
    } else if (buttonName === "upcoming") {
      setMovies(upComingMovies);
      setActiveData("movies");
    } else if (buttonName === "top_rated") {
      setMovies(topRated);
      setActiveData("movies");
    }
  };

  const handleButtonClickTvShows = (buttonName) => {
    if (buttonName === "popular") {
      setTvShows(popularTvShows);
      setActiveData("tvShows");
    } else if (buttonName === "airing_today") {
      setTvShows(airingTodayTvShows);
      setActiveData("tvShows");
    } else if (buttonName === "ontv") {
      setTvShows(tvShowsOnTv);
      setActiveData("tvShows");
    } else if (buttonName === "top_rated") {
      setTvShows(topRatedTvShows);
      setActiveData("tvShows");
    }
  };

  const handleButtonClickPeople = (buttonName) => {
    if (buttonName === "people") {
      setPopularPeople(popularPeople);
    }
  };

  return (
    <nav>
      <div
        className="dropdown"
        onMouseEnter={() => setIsOpenMovies(true)}
        onMouseLeave={() => setIsOpenMovies(false)}
      >
        <button className="dropdown-btn">Movies</button>
        {isOpenMovies && (
          <ul className="dropdown-menu">
            <li className="link">
              <Link
                className="dropdown-link"
                to="/movies/popular"
                onClick={() => handleButtonClickMovies("popular")}
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-link"
                to="/movies/now_playing"
                onClick={() => handleButtonClickMovies("now_playing")}
              >
                Now Playing
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-link"
                to={"/movies/upcoming"}
                onClick={() => handleButtonClickMovies("upcoming")}
              >
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-link"
                to={"/movies/top_rated"}
                onClick={() => handleButtonClickMovies("top_rated")}
              >
                Top Rated
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div
        className="dropdown"
        onMouseEnter={() => setIsOpenTvShows(true)}
        onMouseLeave={() => setIsOpenTvShows(false)}
      >
        <button className="dropdown-btn">TvShows</button>
        {isOpenTvShows && (
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-link"
                to={"/tvshows/popular"}
                onClick={() => handleButtonClickTvShows("popular")}
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-link"
                to={"/tvshows/airing_today"}
                onClick={() => handleButtonClickTvShows("airing_today")}
              >
                Airing Today
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-link"
                to={"/tvshows/ontv"}
                onClick={() => handleButtonClickTvShows("ontv")}
              >
                On Tv
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-link"
                to={"/tvshows/top_rated"}
                onClick={() => handleButtonClickTvShows("top_rated")}
              >
                Top Rated
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div
        className="dropdown"
        onMouseEnter={() => setIsOpenPeople(true)}
        onMouseLeave={() => setIsOpenPeople(false)}
      >
        <button className="dropdown-btn">People</button>
        {isOpenPeople && (
          <ul className="dropdown-menu">
            <li>
              <Link
                className="dropdown-link"
                to={"/people"}
                onClick={() => handleButtonClickPeople("people")}
              >
                Popular People
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div
        className="dropdown"
        onMouseEnter={() => setIsOpenMore(true)}
        onMouseLeave={() => setIsOpenMore(false)}
      >
        <button className="dropdown-btn">More</button>
        {isOpenMore && (
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-link">Discussions</Link>
            </li>
            <li>
              <Link className="dropdown-link">LeaderBoard</Link>
            </li>
            <li>
              <Link className="dropdown-link">Support</Link>
            </li>
            <li>
              <Link className="dropdown-link">API</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default DropDown;
