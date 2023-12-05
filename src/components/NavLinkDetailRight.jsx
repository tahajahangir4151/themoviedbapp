import React from "react";
import { Box } from "@mui/material";
import NavLinkDetailCard from "./NavLinkDetailCard";
import { connect } from "react-redux";
import Loader from "./Loader";
import {
  fetchMovieCast,
  fetchMovieDetail,
  fetchPopularOnTvCast,
  fetchPopularOnTvDetail,
  setDetailData,
  fetchFreeToWatchTvCast,
  // fetchMovieKeywords,
  // fetchTvKeywords,
} from "../middleware/actions";

const NavLinkDetailRight = ({
  fetchMovieCast,
  fetchMovieDetail,
  fetchPopularOnTvCast,
  fetchPopularOnTvDetail,
  setDetailData,
  loading,
  activeData,
  buttonName,
  popularMovies,
  nowPlayingMovies,
  upcomingMovies,
  topRatedMovies,
  popularTvShows,
  airingTodayTvShows,
  tvShowsOnTv,
  topRatedTvShows,
  fetchFreeToWatchTvCast,
  // fetchMovieKeywords,
  // fetchTvKeywords,
}) => {
  let dataToRender;
  if (activeData === "movies" && buttonName === "popular") {
    dataToRender = popularMovies;
  } else if (activeData === "movies" && buttonName === "now_playing") {
    dataToRender = nowPlayingMovies;
  } else if (activeData === "movies" && buttonName === "upcoming") {
    dataToRender = upcomingMovies;
  } else if (activeData === "movies" && buttonName === "top_rated") {
    dataToRender = topRatedMovies;
  } else if (activeData === "tvShows" && buttonName === "popular") {
    dataToRender = popularTvShows;
  } else if (activeData === "tvShows" && buttonName === "airing_today") {
    dataToRender = airingTodayTvShows;
  } else if (activeData === "tvShows" && buttonName === "ontv") {
    dataToRender = tvShowsOnTv;
  } else if (activeData === "tvShows" && buttonName === "top_rated") {
    dataToRender = topRatedTvShows;
  }

  const handleCardClick = async (itemId) => {
    let data;
    if (activeData === "movies") {
      data = await fetchMovieDetail(itemId);
      fetchMovieCast(itemId);
      // fetchMovieKeywords(itemId);
    } else if (activeData === "tvShows") {
      data = await fetchPopularOnTvDetail(itemId);
      fetchPopularOnTvCast(itemId);
      fetchFreeToWatchTvCast(itemId);
      // fetchTvKeywords(itemId);
    }
    setDetailData(data);
  };
  return (
    <Box
      component={"div"}
      sx={{
        height: "auto",
        width: "100%",
        float: "right",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <NavLinkDetailCard
          data={dataToRender}
          loading={loading}
          onCardClick={(itemId) => handleCardClick(itemId, activeData)}
        />
      )}
    </Box>
  );
};
const mapStateToProps = (state) => ({
  detailData: state.detailData,
  loading: state.loading,
  activeData: state.activeData,
  buttonName: state.buttonName,
  popularMovies: state.popularMovies,
  nowPlayingMovies: state.nowPlayingMovies,
  upcomingMovies: state.upcomingMovies,
  topRatedMovies: state.topRatedMovies,
  popularTvShows: state.popularTvShows,
  airingTodayTvShows: state.airingTodayTvShows,
  tvShowsOnTv: state.tvShowsOnTv,
  topRatedTvShows: state.topRatedTvShows,
});

const mapDispatchToProps = {
  fetchMovieDetail,
  setDetailData,
  fetchMovieCast,
  fetchPopularOnTvCast,
  fetchPopularOnTvDetail,
  fetchFreeToWatchTvCast,
  // fetchMovieKeywords,
  // fetchTvKeywords,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavLinkDetailRight);