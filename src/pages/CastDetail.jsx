import React from "react";
import { connect } from "react-redux";
import CastBanner from "../components/CastBanner";
import MainSectionCastDetail from "../components/MainSectionCastDetail";
import Loader from "../components/Loader";
import NotFound from "../components/NotFound";

const CastDetail = ({ castDetail, loading }) => {
  if (loading) {
    return <Loader />;
  }
  if (!castDetail || castDetail.length === 0) {
    return <NotFound/>;
  }
  return (
    <>
      {loading ? <Loader /> : <CastBanner castDetail={castDetail} />}
      {loading ? <Loader /> : <MainSectionCastDetail />}
    </>
  );
};
const mapStateToProps = (state) => ({
  castDetail: state.castDetail,
  loading: state.loading,
});

export default connect(mapStateToProps, null)(CastDetail);
 