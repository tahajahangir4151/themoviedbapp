import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Loader from "./Loader";
import { connect } from "react-redux";

const CastBanner = ({ castDetail, loading }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";
  const [showFullBio, setShowFullBio] = useState(false);

  if (loading) {
    return <Loader />;
  }
  const handleShowMoreClick = () => {
    setShowFullBio(true);
  };

  const handleShowLessClick = () => {
    setShowFullBio(false);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: isMobile ? "column" : "row" }}>
      <Box
        sx={{
          width: isMobile ? "100%" : "30%",
          height: "500px",
          marginTop: "20px",
          marginLeft: "20px",
          marginBottom: "20px",
          marginRight: "20px",
        }}
      >
        {castDetail.profile_path && (
          <img
            src={imageBaseUrl + castDetail.profile_path}
            alt={castDetail.name}
            style={{
              height: "100%",
              width:"100%",
              objectFit: "cover",
              borderRadius: "3px",
            }}
          />
        )}
      </Box>
      <Box
        sx={{
          width: "70%",
          height: "500px",
          marginTop: "20px",
          marginLeft: "20px",
          marginBottom: "20px",
          marginRight: "20px",
          "@media (max-width: 1200px)": {
            height: "auto",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontWeight: "bolder", color: "#000", fontSize: "40px" }}
        >
          {castDetail.name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: "20px",
            color: "#000000",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Biography
        </Typography>
        {showFullBio ? (
          <>
            <Typography>
              {castDetail.biography}
              <Button
                onClick={handleShowLessClick}
                sx={{
                  fontWeight: "bolder",
                  cursor: "pointer",
                  fontSize: "15px",
                  "&:hover": {
                    color: "#8FDFF5",
                  },
                }}
              >
                Show Less&lt;&lt;
              </Button>
            </Typography>
          </>
        ) : (
          <>
            <Typography>
              {castDetail.biography?.slice(0, 1387)}.
              <Button
                onClick={handleShowMoreClick}
                sx={{
                  fontWeight: "bolder",
                  cursor: "pointer",
                  fontSize: "15px",
                  "&:hover": {
                    color: "#8FDFF5",
                  },
                }}
              >
                Read More&gt;&gt;
              </Button>
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});
export default connect(mapStateToProps, null)(CastBanner);
