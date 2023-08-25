import React from "react";
import { connect } from "react-redux";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import Loader from "./Loader";

const CastRight = ({ knownFor, loading }) => {
  if (loading) {
    return <Loader />;
  }
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  const filteredData = knownFor.filter(
    (item) =>
      item.poster_path && item.backdrop_path && item.release_date !== null
  );
  return (
    <>
      <Box sx={{ width: "65%" }}>
        <Typography variant="h4" sx={{ marginLeft: "10px", marginTop: "10px" }}>
          Known For:
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", overflowX: "auto", width: "100%" }}>
            {filteredData.map((item, index) => (
              <Card
                key={index}
                sx={{
                  flex: "0 0 auto",
                  width: "25%",
                  height: "350px",
                  marginRight: "5px",
                  marginLeft: "5px",
                  marginTop: "20px",
                  position: "relative",
                  "@media (max-width: 1200px)": {
                    width: "20%",
                    height: "300px",
                  },
                  "@media (max-width: 768px)": {
                    width: "25%",
                    height: "250px",
                  },
                  "@media (max-width: 576px)": {
                    width: "30%",
                    height: "200px",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    imageBaseUrl + item.poster_path ||
                    imageBaseUrl + item.backdrop_path
                  }
                  alt={
                    item.name ||
                    item.title ||
                    item.original_title ||
                    item.original_name
                  }
                  sx={{ height: "70%" }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    bottom: 0,
                    left: 0,
                    padding: "8px",
                    width: "100%",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  {item.title ||
                    item.name ||
                    item.original_title ||
                    item.original_name}{" "}
                  ({item.release_date && item.release_date.slice(0, 4)})
                </Typography>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>{" "}
    </>
  );
};

const mapStateToProps = (state) => ({
  knownFor: state.knownFor,
  loading: state.loading,
});

export default connect(mapStateToProps, null)(CastRight);
 