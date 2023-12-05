import {
  Box,
  Button,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import Loader from "../components/Loader";
import {
  fetchMovieGenreDataById,
  fetchTvGenreDataById,
} from "../middleware/actions";
import { Link } from "react-router-dom";

const Genres = ({
  activeData,
  moviesGenres,
  tvGenres,
  buttonName,
  loading,
  fetchMovieGenreDataById,
  fetchTvGenreDataById,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  let dataToRender;
  if (activeData === "movie_list" && buttonName === "movie_list") {
    dataToRender = moviesGenres;
  } else if (activeData === "tv_list" && buttonName === "tv_list") {
    dataToRender = tvGenres;
  }

  if (loading) {
    return <Loader />;
  }

  const handleClickButtonGenre = (itemId) => {
    if (buttonName === "movie_list") {
      fetchMovieGenreDataById(itemId);
    } else if (buttonName === "tv_list") {
      fetchTvGenreDataById(itemId);
    }
  };

  return (
    <>
      {buttonName === "movie_list" ? (
        <Typography
          component={"h2"}
          sx={{
            fontWeight: "bolder",
            fontSize: isMobile ? "24px" : "43px",
            marginLeft: "20px",
            color: "CaptionText",
            fontStyle: "italic",
          }}
        >
          Movie Genres:
        </Typography>
      ) : buttonName === "tv_list" ? (
        <Typography
          component={"h2"}
          sx={{
            fontWeight: "bolder",
            fontSize: isMobile ? "24px" : "43px",
            marginLeft: "20px",
            color: "CaptionText",
            fontStyle: "italic",
          }}
        >
          Tv Genres:
        </Typography>
      ) : null}

      {dataToRender && dataToRender.genres ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            maxWidth: isMobile ? "100%" : isTablet ? "80%" : "550px",
            marginLeft: isMobile ? "10px" : isTablet ? "100px" : "350px",
            marginTop: isMobile ? "20px" : "80px",
            marginBottom: isMobile ? "20px" : "50px",
            maxHeight: isMobile ? "none" : "550px",
            minHeight: isMobile ? "none" : "400px",
            overflow: isMobile ? "auto" : "visible",
          }}
        >
          {dataToRender.genres.map((genre) => (
            <Box key={genre.id}>
              <Tooltip title={genre.name}>
                <Link
                  to={`/genre/genre_id?${genre.id}/genre_name?${genre.name}`}
                >
                  <Button
                    onClick={() => handleClickButtonGenre(genre.id)}
                    sx={{
                      display: "inline-flex",
                      border: "1px solid #9e9e9e",
                      borderRadius: "20px",
                      padding: "4px 12px",
                      fontSize: isMobile ? "0.8em" : "0.9em",
                      color: "#000000",
                      "&:hover": {
                        backgroundColor: "#6200EE",
                        color: "#FFFFFF",
                      },
                    }}
                  >
                    {genre.name}
                  </Button>
                </Link>
              </Tooltip>
            </Box>
          ))}
        </Box>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  activeData: state.activeData,
  moviesGenres: state.moviesGenres,
  tvGenres: state.tvGenres,
  buttonName: state.buttonName,
  loading: state.loading,
});

const mapDispatchToProps = {
  fetchMovieGenreDataById,
  fetchTvGenreDataById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
