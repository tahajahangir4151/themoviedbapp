import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Typography, Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NotFound = ({ text }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <Box
      className="not-found"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      minHeight="100vh"
    >
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        <img src="/search.svg" alt="search" style={{ width: "350px" }} />
      </Box>
      <Typography variant="h4" component="h1" ml={1}>
        {text ? text : "Ups!... no result found"}
      </Typography>

      {isHomePage ? (
        <Typography variant="body2">You are on the Home page.</Typography>
      ) : (
        <IconButton onClick={() => navigate(-1)} color="primary">
          <ArrowBackIcon />
          Go Back
        </IconButton>
      )}
    </Box>
  );
};

export default NotFound;
 