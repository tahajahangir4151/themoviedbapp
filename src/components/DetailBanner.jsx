import React, { useState } from "react";
import Loader from "./Loader";
import {
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Typography,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";

const DetailBanner = ({ detailData, loading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  if (loading) {
    return <Loader />;
  }

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const bannerImage = `https://image.tmdb.org/t/p/original${detailData.backdrop_path}`;

  const releaseYear = detailData.release_date?.split("-")[0];

  const productionCountries =
    detailData.production_countries
      ?.map((country) => country.iso_3166_1)
      .join(",") || "";

  const genres = detailData.genres?.map((genre) => genre.name).join(",") || "";

  const runTime = detailData.runtime;
  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;

  const color = detailData.vote_average >= 8 ? "#4CAF50" : "#FFC107";
  const votePercentage = Math.round(detailData.vote_average * 10);
  const trailorLink = detailData.homepage || null;

  return (
    <Box
      sx={{
        height: isMobile ? "auto" : "500px",
        width: "100%",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          width: "30%",
          marginTop: "15px",
          marginLeft: "15px",
          marginBottom: "15px",
        }}
      >
        <Card
          sx={{
            backgroundColor: "transparent",
            boxShadow: "none",
            borderRadius: "0",
            overflow: "visible",
            marginTop: "15px",
          }}
        >
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500${detailData.poster_path}`}
            alt={
              detailData.title ||
              detailData.original_title ||
              detailData.name ||
              detailData.original_name
            }
            sx={{ height: "450px", width: "100%" }}
          />
        </Card>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#FFFFFF",
          padding: "20px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: isMobile ? "30px" : "32px",
            fontWeight: "bolder",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {detailData.title ||
            detailData.original_title ||
            detailData.name ||
            detailData.original_name}
          {`(${releaseYear})`}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "15px", marginTop: "10px" }}
        >
          {detailData.release_date}({productionCountries})
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: isMobile ? "15px" : "25px",
            color: "#B5DFF3",
            marginTop: "10px",
          }}
        >
          Genres: {genres}
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "15px", marginTop: "10px" }}
        >
          Run Time:{`${hours}h${minutes}m`}
        </Typography>
        <Box
          position="relative"
          display="inline-flex"
          sx={{ marginTop: "10px" }}
        >
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
            variant="body2"
            sx={{
              marginTop: "10px",
              fontSize: "15px",
              marginLeft: "5px",
              fontWeight: "bolder",
            }}
          >
            User Score
          </Typography>
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
          {trailorLink ? (
            <Box>
              <IconButton
                onClick={handleOpenModal}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <PlayArrowIcon sx={{ fontSize: "32px", color: "#BDE9FB" }} />
                <Typography
                  variant="body2"
                  sx={{
                    color: "#BDE0FB",
                    fontWeight: "bold",
                    marginLeft: "8px",
                  }}
                >
                  Play Trailor
                </Typography>
              </IconButton>
              <Dialog open={open} onClose={handleCloseModal} maxWidth="2g">
                <DialogContent>
                  <iframe
                    height="500"
                    width="100%"
                    src={trailorLink}
                    title="Trailor"
                    allowFullScreen
                  >
                    <CloseIcon />
                  </iframe>
                </DialogContent>
              </Dialog>
            </Box>
          ) : (
            <Typography
              variant="body2"
              sx={{ color: "#BDE9FB", fontWeight: "bold" }}
            >
              Trailor Not Available
            </Typography>
          )}
        </Box>
        <Typography
          variant="body2"
          sx={{
            color: "#C9EDFB",
            fontStyle: "italic",
            fontSize: "20px",
            marginTop: "10px",
          }}
        >
          {detailData.tagline}
        </Typography>
        <Typography
          variant="body2"
          component={"h4"}
          sx={{ fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}
        >
          Overview
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "10px",
            color: "#E5EAF3",
            wordWrap: "break-word",
            maxWidth: isMobile ? "100%" : "70%",
          }}
        >
          {detailData.overview}
        </Typography>
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});
export default connect(mapStateToProps, null)(DetailBanner);
 