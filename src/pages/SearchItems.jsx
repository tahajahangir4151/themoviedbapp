import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { connect } from "react-redux";
import Loader from "../components/Loader";
import {
  fetchMovieCast,
  fetchMovieDetail,
  setDetailData,
} from "../middleware/actions";
import { Link } from "react-router-dom";
import NotFound from "../components/NotFound";

const SearchItems = ({
  loading,
  searchResults,
  fetchMovieDetail,
  fetchMovieCast,
  setDetailData,
}) => {
  if (loading) {
    return <Loader />;
  }

  const filteredData = searchResults.filter(
    (item) => item.backdrop_path !== null || item.backdrop_path !== undefined
  );

  if (filteredData.length === 0) {
    return <NotFound />;
  }

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const handleCardClick = async (id) => {
    let data;
    data = await fetchMovieDetail(id);
    fetchMovieCast(id);
    setDetailData(data);
  };

  return (
    <>
      <Box>
        <div style={{ marginTop: "20px" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
              marginBottom: "20px",
              marginLeft: "30px",
            }}
          >
            Search Results:
          </Typography>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {filteredData.map((item) => {
              const color = item.vote_average >= 8 ? "#4CAF50" : "#FFC107";
              const votePercentage = Math.round(item.vote_average * 10);

              return (
                <Card
                  key={item.id}
                  sx={{
                    flex: "0 0 20%",
                    width: "100%",
                    height: "auto",
                    position: "relative",
                    cursor: "pointer",
                    marginBottom: "20px",
                    marginRight: "10px",
                    marginLeft: "30px",
                  }}
                >
                  <Link
                    to={`/movie/${item.id}-${
                      item.title ||
                      item.original_title ||
                      item.name ||
                      item.original_name
                    }`}
                    onClick={() => handleCardClick(item.id)}
                  >
                    <CardMedia
                      component="img"
                      image={`${imageBaseUrl}${item.backdrop_path}`}
                      alt={item.title || item.original_title}
                    />
                  </Link>
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      component="div"
                      sx={{
                        color: "#000",
                        cursor: "pointer",
                        fontWeight: "bolder",
                      }}
                    >
                      {item.name ||
                        item.original_name ||
                        item.title ||
                        item.original_title}
                    </Typography>
                    <Box position="relative" display="inline-flex">
                      <CircularProgress
                        value={votePercentage}
                        variant="determinate"
                        sx={{
                          color: color,
                          width: "80px",
                          height: "80px",
                          backgroundColor: "#081C22",
                          borderRadius: "50%",
                        }}
                      />
                      <Typography
                        variant="caption"
                        component="div"
                        sx={{
                          top: "0",
                          left: "0",
                          transform: "translate(26%, 40%)",
                          fontWeight: "bold",
                          color: "#F7FFFF",
                          fontSize: "13px",
                          position: "absolute",
                        }}
                      >
                        {`${votePercentage}%`}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  searchResults: state.searchResults,
});
const mapDispatchToProps = {
  fetchMovieDetail,
  fetchMovieCast,
  setDetailData,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchItems);
