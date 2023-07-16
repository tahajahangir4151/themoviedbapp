import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import TrendingCard from "../components/TrendingCard";
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
} from "../middleware/actions";
import Loader from "../components/Loader";
import WhatspopularBtn from "../components/WhatspopularBtn";
import FreeToWatchBtn from "../components/FreeToWatchBtn";

//mapStateToProps, mapDispatchToProps. connect
//useSelector.
//useDispatch
const Home = ({
  trendingToday,
  trendingThisWeek,
  popularStreaming,
  popularOntv,
  popularForRent,
  popularInTheaters,
  freeToWatchMovies,
  freeToWatchTv,
  loading,
  fetchTrendingThisWeek,
  fetchTrendingToday,
  fetchPopularStreaming,
  fetchPopularOnTv,
  fetchPopularForRent,
  fetchPopularInTheaters,
  fetchFreeToWatchMovies,
  fetchFreeToWatchTv,
}) => {
  const [activeButton, setActiveButton] = useState("today");
  const [activeWhatsPopularBtn, setActiveWhatsPopularBtn] =
    useState("streaming");
  const [activeFreeToWatchBtn, setActiveFreeToWatchBtn] = useState("movies");

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
  useEffect(() => {
    fetchTrendingToday();
    fetchPopularStreaming();
    fetchFreeToWatchMovies();
  }, [fetchTrendingToday, fetchPopularStreaming, fetchFreeToWatchMovies]);

  let trendingData;
  if (activeButton === "thisWeek") {
    trendingData = trendingThisWeek;
  } else {
    trendingData = trendingToday;
  }

  let popularData;
  if (activeWhatsPopularBtn === "streaming") {
    popularData = popularStreaming;
  } else if (activeWhatsPopularBtn === "on tv") {
    popularData = popularOntv;
  } else if (activeWhatsPopularBtn === "for rent") {
    popularData = popularForRent;
  } else if (activeWhatsPopularBtn === "in theaters") {
    popularData = popularInTheaters;
  }

  let freeToWatchData;
  if (activeFreeToWatchBtn === "movies") {
    freeToWatchData = freeToWatchMovies;
  } else if (activeFreeToWatchBtn === "tv") {
    freeToWatchData = freeToWatchTv;
  }

  return (
    <>
      <Box component={"main"}>
        <Banner />

        {/* Trending Section  */}
        <TrendingBtn
          activeButton={activeButton}
          handleButtonClick={handleButtonClick}
        />
        {loading ? (
          <Loader />
        ) : (
          <TrendingCard data={trendingData} loading={loading} />
        )}

        {/* Popular Section  */}
        <WhatspopularBtn
          activeWhatsPopularBtn={activeWhatsPopularBtn}
          handleButtonClickWhatsPopular={handleButtonClickWhatsPopular}
        />
        {loading ? (
          <Loader />
        ) : (
          <TrendingCard data={popularData} loading={loading} />
        )}

        {/* Free To Watch Section  */}

        <FreeToWatchBtn
          activeFreeToWatchBtn={activeFreeToWatchBtn}
          handleFreeToWatchButtonClick={handleFreeToWatchButtonClick}
        />

        {loading ? (
          <Loader />
        ) : (
          <TrendingCard data={freeToWatchData} loading={loading} />
        )}
      </Box>
    </>
  );
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
  loading: state.loading,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
