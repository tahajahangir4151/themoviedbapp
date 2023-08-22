import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import Loader from "./Loader";
import { connect } from "react-redux";
import OtherProductDetails from "./OtherProductDetails";
import { Link } from "react-router-dom";
import { fetchCastDetail, fetchKnownForCastData } from "../middleware/actions";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

const TopCasts = ({
  dataToRender,
  loading,
  fetchCastDetail,
  fetchKnownForCastData,
}) => {
  if (loading) {
    return <Loader />;
  }

  // Filter cast members without a profile_path
  const filteredData = dataToRender.filter(
    (castMember) => castMember.profile_path
  );

  const handleCastClick = (id) => {
    fetchCastDetail(id);
    fetchKnownForCastData(id);
  };

  return (
    <>
      <Typography variant="h4" sx={{ marginLeft: "10px", marginTop: "10px" }}>
        Top Bill Cast:
      </Typography>
      <Box sx={{ display: "flex" }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            width: "70%",
          }}
        >
          {filteredData.map((castMember, index) => (
            <Card
              key={index}
              sx={{
                flex: "0 0 auto",
                width: "15%",
                height: "370px",
                marginRight: "5px",
                marginLeft: "5px",
                marginTop: "20px",
                position: "relative",
                "@media (max-width: 1200px)": {
                  width: "25%",
                  height: "300px",
                },
                "@media (max-width: 768px)": {
                  width: "30%",
                  height: "250px",
                },
                "@media (max-width: 576px)": {
                  width: "80%",
                  height: "440px",
                },
              }}
            >
              <Link
                to={`/person/${castMember.id}/${castMember.name}`}
                onClick={() => handleCastClick(castMember.id)}
              >
                <CardMedia
                  component="img"
                  image={imageBaseUrl + castMember.profile_path}
                  alt={castMember.name}
                  sx={{ height: "70%" }}
                />
              </Link>
              <Box sx={{ padding: "10px" }}>
                <Typography
                  variant={"body1"}
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  {castMember.original_name}
                </Typography>
                <Typography variant={"body1"} sx={{ fontSize: "15px" }}>
                  {castMember.character}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
        <Box sx={{ width: "30%" }}>
          <OtherProductDetails />
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});
const mapDispatchToProps = {
  fetchCastDetail,
  fetchKnownForCastData,
};
export default connect(mapStateToProps, mapDispatchToProps)(TopCasts);
