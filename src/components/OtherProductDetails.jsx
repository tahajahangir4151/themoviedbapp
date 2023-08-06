import React from "react";
import { Box, Typography } from "@mui/material";
import { connect } from "react-redux";
import Loader from "./Loader";

const imageBaseUrl = "https://image.tmdb.org/t/p/w200/";

const OtherProductDetails = ({ detailData, loading }) => {
  if (loading) {
    return <Loader />;
  }
  const networks = detailData.networks || [];

  return (
    <Box>
      {detailData.status && (
        <>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Status:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "20px",
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
              fontSize: "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Original Language:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "20px",
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
              fontSize: "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Budget:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "20px",
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
              fontSize: "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Revenue:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "20px",
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
              fontSize: "20px",
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
              fontSize: "20px",
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            Type:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontSize: "20px",
              marginTop: "15px",
              marginLeft: "10px",
            }}
          >
            {detailData.type}
          </Typography>
        </>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  detailData: state.detailData,
  loading: state.loading,
});

export default connect(mapStateToProps, null)(OtherProductDetails);
