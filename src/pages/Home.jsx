import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import TrendingCard from "../components/Card";
import TrendingBtn from "../components/TrendingBtn";
import {
  fetchFreeToWatchMovies,
  fetchFreeToWatchTv,
  fetchPopularForRent,
  fetchPopularInTheaters,
  fetchPopularOnTv,
  fetchPopularStreaming,
  fetchTrendingThisWeek,
  fetchTrendingToday,
  fetchMovieDetail,
  fetchPopularOnTvDetail,
  fetchFreeToWatchTvDetail,
  setDetailData,
  setButtonName,
  fetchMovieCast,
  fetchFreeToWatchTvCast,
  fetchPopularOnTvCast,
  fetchMovieKeywords,
  fetchTvKeywords,
} from "../middleware/actions";
import Loader from "../components/Loader";
import WhatspopularBtn from "../components/WhatspopularBtn";
import FreeToWatchBtn from "../components/FreeToWatchBtn";

const Home = ({
  trendingToday,
  trendingThisWeek,
  popularStreaming,
  popularOntv,
  popularForRent,
  popularInTheaters,
  freeToWatchMovies,
  freeToWatchTv,
  fetchTrendingThisWeek,
  fetchTrendingToday,
  fetchPopularStreaming,
  fetchPopularOnTv,
  fetchPopularForRent,
  fetchPopularInTheaters,
  fetchFreeToWatchMovies,
  fetchFreeToWatchTv,
  fetchMovieDetail,
  fetchPopularOnTvDetail,
  fetchFreeToWatchTvDetail,
  detailData,
  setDetailData,
  fetchMovieCast,
  fetchFreeToWatchTvCast,
  fetchPopularOnTvCast,
  cast,
  setButtonName,
  fetchMovieKeywords,
  fetchTvKeywords,
}) => {
  const [activeButton, setActiveButton] = useState("today");
  const [activeWhatsPopularBtn, setActiveWhatsPopularBtn] =
    useState("streaming");
  const [activeFreeToWatchBtn, setActiveFreeToWatchBtn] = useState("movies");
  const [trendingLoading, setTrendingLoading] = useState(false);
  const [popularLoading, setPopularLoading] = useState(false);
  const [freeToWatchLoading, setFreeToWatchLoading] = useState(false);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "thisWeek") {
      fetchTrendingThisWeek();
    } else if (buttonName === "today") {
      fetchTrendingToday();
    }
  };

  const handleButtonClickWhatsPopular = (buttonName) => {
    setActiveWhatsPopularBtn(buttonName);
    if (buttonName === "on tv") {
      fetchPopularOnTv();
    } else if (buttonName === "streaming") {
      fetchPopularStreaming();
    } else if (buttonName === "for rent") {
      fetchPopularForRent();
    } else if (buttonName === "in theaters") {
      fetchPopularInTheaters();
    }
  };

  const handleFreeToWatchButtonClick = (buttonName) => {
    setActiveFreeToWatchBtn(buttonName);
    if (buttonName === "movies") {
      fetchFreeToWatchMovies();
    } else if (buttonName === "tv") {
      fetchFreeToWatchTv();
    }
  };

  const handleCardClick = async (itemId, buttonName) => {
    let data;
    if (buttonName === "on tv") {
      data = await fetchPopularOnTvDetail(itemId);
      fetchPopularOnTvCast(itemId);
      fetchTvKeywords(itemId);
    } else if (buttonName === "tv") {
      data = await fetchFreeToWatchTvDetail(itemId);
      fetchFreeToWatchTvCast(itemId);
      fetchTvKeywords(itemId);
    } else {
      data = await fetchMovieDetail(itemId);
      fetchMovieCast(itemId);
      fetchMovieKeywords(itemId); // Fetch movie keywords
    }
    setDetailData(data);
    setButtonName(buttonName);
  };

  useEffect(() => {
    setTrendingLoading(true);
    fetchTrendingToday().then(() => setTrendingLoading(false));

    setPopularLoading(true);
    fetchPopularStreaming().then(() => setPopularLoading(false));

    setFreeToWatchLoading(true);
    fetchFreeToWatchMovies().then(() => setFreeToWatchLoading(false));
  }, [fetchTrendingToday, fetchPopularStreaming, fetchFreeToWatchMovies]);

  return (
    <>
      <Box component={"main"}>
        <Banner />

        {/* Trending Section  */}
        <TrendingBtn
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        {trendingLoading ? (
          <Loader />
        ) : (
          <TrendingCard
            data={
              activeButton === "thisWeek" ? trendingThisWeek : trendingToday
            }
            loading={trendingLoading}
            onCardClick={(itemId) => handleCardClick(itemId, activeButton)}
          />
        )}

        {/* Popular Section  */}
        <WhatspopularBtn
          activeWhatsPopularBtn={activeWhatsPopularBtn}
          handleButtonClickWhatsPopular={handleButtonClickWhatsPopular}
        />
        {popularLoading ? (
          <Loader />
        ) : (
          <TrendingCard
            data={getPopularData()}
            loading={popularLoading}
            onCardClick={(itemId) =>
              handleCardClick(itemId, activeWhatsPopularBtn)
            }
          />
        )}

        {/* Free To Watch Section  */}
        <FreeToWatchBtn
          activeFreeToWatchBtn={activeFreeToWatchBtn}
          handleFreeToWatchButtonClick={handleFreeToWatchButtonClick}
        />
        {freeToWatchLoading ? (
          <Loader />
        ) : (
          <TrendingCard
            data={getFreeToWatchData()}
            loading={freeToWatchLoading}
            onCardClick={(itemId) =>
              handleCardClick(itemId, activeFreeToWatchBtn)
            }
          />
        )}
      </Box>
    </>
  );

  function getPopularData() {
    if (activeWhatsPopularBtn === "streaming") {
      return popularStreaming;
    } else if (activeWhatsPopularBtn === "on tv") {
      return popularOntv;
    } else if (activeWhatsPopularBtn === "for rent") {
      return popularForRent;
    } else if (activeWhatsPopularBtn === "in theaters") {
      return popularInTheaters;
    }
  }

  function getFreeToWatchData() {
    if (activeFreeToWatchBtn === "movies") {
      return freeToWatchMovies;
    } else if (activeFreeToWatchBtn === "tv") {
      return freeToWatchTv;
    }
  }
};

const mapStateToProps = (state) => ({
  trendingToday: state.trendingToday,
  trendingThisWeek: state.trendingThisWeek,
  popularStreaming: state.popularStreaming,
  popularOntv: state.popularOntv,
  popularForRent: state.popularForRent,
  popularInTheaters: state.popularInTheaters,
  freeToWatchMovies: state.freeToWatchMovies,
  freeToWatchTv: state.freeToWatchTv,
  detailData: state.detailData,
  cast: state.cast,
});
const mapDispatchToProps = {
  fetchTrendingToday,
  fetchTrendingThisWeek,
  fetchPopularStreaming,
  fetchPopularOnTv,
  fetchPopularForRent,
  fetchPopularInTheaters,
  fetchFreeToWatchMovies,
  fetchFreeToWatchTv,
  fetchMovieDetail,
  fetchPopularOnTvDetail,
  fetchFreeToWatchTvDetail,
  setDetailData,
  setButtonName,
  fetchMovieCast,
  fetchFreeToWatchTvCast,
  fetchPopularOnTvCast,
  fetchMovieKeywords,
  fetchTvKeywords,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
