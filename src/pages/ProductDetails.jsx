import React from "react";
import { Box } from "@mui/material";
import { connect } from "react-redux";
import DetailBanner from "../components/DetailBanner";
import TopCasts from "../components/TopCasts";
import Loader from "../components/Loader";
import TopCrews from "../components/TopCrews";
import NotFound from "../components/NotFound";

const ProductDetails = ({
  detailData,
  loading,
  cast,
  buttonName,
  freeToWatchTvCast,
  popularOnTvCast,
  crew,
  popularOnTvCrew,
  freeToWatchTvCrew,
}) => {
  let dataToRender;
  if (buttonName === "tv") {
    dataToRender = freeToWatchTvCast;
  } else if (buttonName === "on tv") {
    dataToRender = popularOnTvCast;
  } else {
    dataToRender = cast;
  }

  let dataToRenderCrew;
  if (buttonName === "tv") {
    dataToRenderCrew = freeToWatchTvCrew;
  } else if (buttonName === "on tv") {
    dataToRenderCrew = popularOnTvCrew;
  } else {
    dataToRenderCrew = crew;
  }

  if (loading) {
    return <Loader />;
  }
  if (!detailData || detailData.length === 0) {
    return (
      <Box>
        <NotFound />
      </Box>
    );
  }
  return (
    <>
      {loading ? <Loader /> : <DetailBanner detailData={detailData} />}
      {loading ? <Loader /> : <TopCasts dataToRender={dataToRender} />}
      {loading ? <Loader /> : <TopCrews dataToRenderCrew={dataToRenderCrew} />}
    </>
  );
};
const mapStateToProps = (state) => ({
  detailData: state.detailData,
  loading: state.loading,
  cast: state.cast,
  popularOnTvCast: state.popularOnTvCast,
  freeToWatchTvCast: state.freeToWatchTvCast,
  buttonName: state.buttonName,
  crew: state.crew,
  popularOnTvCrew: state.popularOnTvCrew,
  freeToWatchTvCrew: state.freeToWatchTvCrew,
});

export default connect(mapStateToProps, null)(ProductDetails);
