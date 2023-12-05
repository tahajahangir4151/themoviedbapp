import React from "react";
import {
  Box,
  // Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { connect } from "react-redux";
import Loader from "./Loader";
// import { Link } from "react-router-dom";
// import {
//   fetchTvKeywordDataById,
//   fetchMovieKeywordDataById,
// } from "../middleware/actions";

const imageBaseUrl = "https://image.tmdb.org/t/p/w200/";

const OtherProductDetails = ({
  detailData,
  loading,
  // keywords,
  // buttonName,
  // fetchMovieKeywordDataById,
  // fetchTvKeywordDataById,
  // activeData,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  if (loading) {
    return <Loader />;
  }
  const networks = detailData.networks || [];

  // let keyword = keywords && keywords.keywords ? keywords.keywords : [];
  // let keyword = keywords.keywords || [];

  // if (buttonName === "on tv" || buttonName === "tv") {
  //   keyword = keywords;
  // } else {
  //   keyword = keywords;
  // }

  // const handleButtonClickKeyword = (itemId) => {
  //   if (
  //     buttonName === "on tv" ||
  //     buttonName === "tv" ||
  //     activeData === "tvShows"
  //   ) {
  //     fetchMovieKeywordDataById(itemId);
  //   } else if (buttonName === "tv_list") {
  //     fetchTvKeywordDataById(itemId);
  //   }
  // };
  return (
    <Box>
      {detailData.status && (
        <>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "15px" : "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Status:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: isMobile ? "15px" : "20px",
              marginTop: "10px",
              marginLeft: "15px",
            }}
          >
            {detailData.status}
          </Typography>
        </>
      )}
      {detailData.original_language && (
        <>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "15px" : "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Original Language:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: isMobile ? "15px" : "20px",
              marginTop: "10px",
              marginLeft: "15px",
            }}
          >
            {detailData.original_language}
          </Typography>
        </>
      )}
      {detailData.budget && (
        <>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "15px" : "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Budget:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: isMobile ? "15px" : "20px",
              marginTop: "10px",
              marginLeft: "15px",
            }}
          >
            ${detailData.budget}
          </Typography>
        </>
      )}
      {detailData.revenue && (
        <>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "15px" : "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Revenue:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: isMobile ? "13px" : "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            ${detailData.revenue}
          </Typography>
        </>
      )}
      {networks.length > 0 && (
        <>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "13px" : "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Networks:
          </Typography>
          <Box sx={{ display: "flex", marginLeft: "15px" }}>
            {networks.map((network) => (
              <img
                key={network.id}
                src={imageBaseUrl + network.logo_path}
                alt={network.name}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  marginRight: "5px",
                }}
              />
            ))}
          </Box>
        </>
      )}
      {detailData.type && (
        <>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: isMobile ? "13px" : "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Type:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: isMobile ? "13px" : "20px",
              marginTop: "15px",
              marginLeft: "10px",
            }}
          >
            {detailData.type}
          </Typography>
        </>
      )}
      {/* <Typography
        variant="body1"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "13px" : "20px",
          marginTop: "15px",
          marginLeft: "15px",
        }}
      >
        Keywords:
      </Typography>{" "}
      {Array.isArray(keyword) || (keyword && keyword.results)
        ? (Array.isArray(keyword) ? keyword : keyword.results).map(
            (keyword) => (
              <Link
                to={`/keyword/keyword_id?${keyword.id}/keyword_name?${keyword.name}`}
              >
                <Button
                  onClick={() => handleButtonClickKeyword(keyword.id)}
                  key={keyword.id}
                  sx={{
                    backgroundColor: "#E5E5E5",
                    color: "#000000",
                    margin: "5px",
                    fontStyle: "italic",
                    fontWeight: "bold",
                  }}
                >
                  {keyword.name}
                </Button>
              </Link>
            )
          )
        : null} */}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  detailData: state.detailData,
  // keywords: state.keywords,
  loading: state.loading,
  activeData: state.activeData,
  buttonName: state.buttonName,
});

// const mapDispatchToProps = {
//   fetchMovieKeywordDataById,
//   fetchTvKeywordDataById,
// };
export default connect(
  mapStateToProps,
  // mapDispatchToProps
  null
)(OtherProductDetails);
