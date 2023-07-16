import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
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
const Home = () => {
  const dispatch = useDispatch();
  const trendingToday = useSelector((state) => state.trendingToday);
  const trendingThisWeek = useSelector((state) => state.trendingThisWeek);
  const popularStreaming = useSelector((state) => state.popularStreaming);
  const popularOntv = useSelector((state) => state.popularOntv);
  const popularForRent = useSelector((state) => state.popularForRent);
  const popularInTheaters = useSelector((state) => state.popularInTheaters);
  const freeToWatchMovies = useSelector((state) => state.freeToWatchMovies);
  const freeToWatchTv = useSelector((state) => state.freeToWatchTv);
  const loading = useSelector((state) => state.loading);
  const [activeButton, setActiveButton] = useState("today");
  const [activeWhatsPopularBtn, setActiveWhatsPopularBtn] =
    useState("streaming");
  const [activeFreeToWatchBtn, setActiveFreeToWatchBtn] = useState("movies");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    if (buttonName === "thisWeek") {
      dispatch(fetchTrendingThisWeek());
    } else if (buttonName === "today") {
      dispatch(fetchTrendingToday());
    }
  };

  const handleButtonClickWhatsPopular = (buttonName) => {
    setActiveWhatsPopularBtn(buttonName);
    if (buttonName === "on tv") {
      dispatch(fetchPopularOnTv());
    } else if (buttonName === "streaming") {
      dispatch(fetchPopularStreaming());
    } else if (buttonName === "for rent") {
      dispatch(fetchPopularForRent());
    } else if (buttonName === "in theaters") {
      dispatch(fetchPopularInTheaters());
    }
  };

  const handleFreeToWatchButtonClick = (buttonName) => {
    setActiveFreeToWatchBtn(buttonName);
    if (buttonName === "movies") {
      dispatch(fetchFreeToWatchMovies());
    } else if (buttonName === "tv") {
      dispatch(fetchFreeToWatchTv());
    }
  };
  useEffect(() => {
    dispatch(fetchTrendingToday());
    dispatch(fetchPopularStreaming());
    dispatch(fetchFreeToWatchMovies());
  }, [dispatch]);

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

export default Home;
