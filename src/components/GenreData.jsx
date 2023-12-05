import React from "react";
import Loader from "./Loader";
import { connect } from "react-redux";
import { Box, Card, CardMedia, Tooltip, Typography } from "@mui/material";

const GenreData = ({ buttonName, movieGenreData, tvGenreData, loading }) => {
  if (loading) {
    return <Loader />;
  }

  let genreData;
  if (buttonName === "movie_list") {
    genreData = movieGenreData;
  } else if (buttonName === "tv_list") {
    genreData = tvGenreData;
  }

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <>
      {genreData && genreData.results ? (
        <Box
          sx={{
            // display: "flex",
            flexWrap: "wrap",
          }}
        >
          {genreData.results.map((item) => (
            <Card
              key={item.id}
              sx={{
                flex: "0 0 calc(33.33% - 20px)",
                marginRight: "20px",
                marginBottom: "20px",
                marginTop: "20px",
                marginLeft: "20px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Tooltip
                  title={
                    item.name ||
                    item.title ||
                    item.original_name ||
                    item.original_title
                  }
                >
                  <CardMedia
                    component="img"
                    image={`${imageBaseUrl}${item.poster_path}`}
                    alt={
                      item.title ||
                      item.original_title ||
                      item.name ||
                      item.original_name
                    }
                    sx={{
                      height: "200px",
                      width: "133px",
                    }}
                  />
                </Tooltip>
              </Box>
              <Box>
                <Tooltip
                  title={
                    item.name ||
                    item.title ||
                    item.original_name ||
                    item.original_title
                  }
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bolder",
                      marginLeft: "10px",
                      fontSize: "30px",
                    }}
                  >
                    {item.name ||
                      item.title ||
                      item.original_name ||
                      item.original_title}
                  </Typography>
                </Tooltip>{" "}
                <Typography
                  variant="body2"
                  sx={{
                    color: "#999999",
                    marginLeft: "10px",
                    fontWeight: "bold",
                    fontSize: "17px",
                  }}
                >
                  {item.release_date}
                </Typography>
                <Typography
                  sx={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    fontSize: "15px",
                    color: "#000000",
                  }}
                >
                  {item.overview}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  buttonName: state.buttonName,
  movieGenreData: state.movieGenreData,
  tvGenreData: state.tvGenreData,
});

export default connect(mapStateToProps, null)(GenreData);
