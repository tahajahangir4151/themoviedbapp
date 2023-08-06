import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchAiringTodayTvShows,
  fetchNowPlayingMovies,
  fetchPopularMovies,
  fetchPopularPeople,
  fetchTopRatedMovies,
  fetchPopularTvShows,
  fetchTopRatedTvShows,
  fetchTvShowsOnTv,
  fetchUpcomigMovies,
  setActiveData,
  setButtonName,
} from "../middleware/actions";
const DropDown = ({
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchUpcomigMovies,
  fetchTopRatedMovies,
  fetchPopularTvShows,
  fetchAiringTodayTvShows,
  fetchTvShowsOnTv,
  fetchTopRatedTvShows,
  fetchPopularPeople,
  setActiveData,
  setButtonName,
}) => {
  const [isOpenMovies, setIsOpenMovies] = useState(false);
  const [isOpenTvShows, setIsOpenTvShows] = useState(false);
  const [isOpenPeople, setIsOpenPeople] = useState(false);

  const navigate = useNavigate();

  const handleButtonClickMovies = (buttonName) => {
    if (buttonName === "popular") {
      fetchPopularMovies();
      setButtonName("popular");
      setActiveData("movies");
    } else if (buttonName === "now_playing") {
      fetchNowPlayingMovies();
      setButtonName("now_playing");
      setActiveData("movies");
    } else if (buttonName === "upcoming") {
      fetchUpcomigMovies();
      setButtonName("upcoming");
      setActiveData("movies");
    } else if (buttonName === "top_rated") {
      fetchTopRatedMovies();
      setButtonName("top_rated");
      setActiveData("movies");
    }
    navigate(`/movies/${buttonName}`);
  };

  const handleButtonClickTvShows = (buttonName) => {
    if (buttonName === "popular") {
      fetchPopularTvShows();
      setButtonName("popular");
      setActiveData("tvShows");
    } else if (buttonName === "airing_today") {
      fetchAiringTodayTvShows();
      setButtonName("airing_today");
      setActiveData("tvShows");
    } else if (buttonName === "ontv") {
      fetchTvShowsOnTv();
      setButtonName("ontv");
      setActiveData("tvShows");
    } else if (buttonName === "top_rated") {
      fetchTopRatedTvShows();
      setButtonName("top_rated");
      setActiveData("tvShows");
    }
    navigate(`/tvshows/${buttonName}`);
  };

  const handleButtonClickPeople = (buttonName) => {
    if (buttonName === "people") {
      fetchPopularPeople();
      setButtonName("people");
      setActiveData("people");
    }
    navigate(`/people`);
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
            <li
              className=" dropdown-link"
              onClick={() => handleButtonClickMovies("popular")}
            >
              Popular
            </li>
            <li
              className="dropdown-link"
              onClick={() => handleButtonClickMovies("now_playing")}
            >
              Now Playing
            </li>
            <li
              className="dropdown-link"
              onClick={() => handleButtonClickMovies("upcoming")}
            >
              UpComing
            </li>
            <li
              className="dropdown-link"
              onClick={() => handleButtonClickMovies("top_rated")}
            >
              Top Rated
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
            <li
              className="dropdown-link"
              onClick={() => handleButtonClickTvShows("popular")}
            >
              Popular
            </li>
            <li
              className="dropdown-link"
              onClick={() => handleButtonClickTvShows("airing_today")}
            >
              Airing Today
            </li>
            <li
              className="dropdown-link"
              onClick={() => handleButtonClickTvShows("ontv")}
            >
              On Tv
            </li>
            <li
              className="dropdown-link"
              onClick={() => handleButtonClickTvShows("top_rated")}
            >
              Top Rated
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
            <li
              className="dropdown-link"
              onClick={() => handleButtonClickPeople("people")}
            >
              Popular People
            </li>
          </ul>
        )}
      </div>
      {/* <div
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
      </div> */}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  popularMovies: state.popularMovies,
  nowPlayingMovies: state.nowPlayingMovies,
  upComingMovies: state.upcomingMovies,
  topRated: state.topRatedMovies,
  popularTvShows: state.popularTvShows,
  airingTodayTvShows: state.airingTodayTvShows,
  tvShowsOnTv: state.tvShowsOnTv,
  topRatedTvShows: state.topRatedTvShows,
  popularPeople: state.popularPeople,
});

const mapDispatchToProps = {
  fetchPopularMovies,
  fetchNowPlayingMovies,
  fetchUpcomigMovies,
  fetchTopRatedMovies,
  fetchPopularTvShows,
  fetchAiringTodayTvShows,
  fetchTvShowsOnTv,
  fetchTopRatedTvShows,
  fetchPopularPeople,
  setActiveData,
  setButtonName,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
