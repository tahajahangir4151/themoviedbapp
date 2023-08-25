import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import BannerImage from "../banner.jpg";
import { fetchSearchResults, setSearchQuery } from "../middleware/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const Banner = ({ setSearchQuery, fetchSearchResults }) => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const handleSearchClick = () => {
    if (inputValue.trim() !== "") {
      setSearchQuery(inputValue);
      fetchSearchResults(inputValue);
      setInputValue("");
      navigate(`/search/query?${encodeURIComponent(inputValue)}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${BannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: isMobile ? "220px" : isTablet ? "280px" : "320px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: isMobile ? "16px" : "24px",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{ color: "#fff", marginBottom: isMobile ? "8px" : "16px" }}
        >
          Welcome.
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: isMobile ? "1.5em" : isTablet ? "1.8em" : "2em",
            fontWeight: "600",
            color: "#fff",
          }}
        >
          Millions of movies, TV shows, and people to discover. Explore now.
        </Typography>

        <TextField
          placeholder="Search for a movies, TV show... "
          variant="outlined"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
          onKeyPress={handleKeyPress}
          InputProps={{
            sx: {
              backgroundColor: "#fff",
              borderRadius: "30px",
              marginTop: "10px",
              paddingRight: "10px",
              marginRight: "0px",
            },
            endAdornment: (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#19CFB5",
                  color: "#fff",
                  width: "20%",
                  borderRadius: "30px 30px 30px 30px",
                  height: isMobile ? "40px" : "56px",
                  fontSize: isMobile ? "14px" : isTablet ? "16px" : "17px",
                  "&:hover": {
                    backgroundColor: "#19CFB5",
                    color: "#000",
                  },
                }}
                disabled={inputValue.trim() === ""}
                onClick={handleSearchClick}
              >
                Search
              </Button>
            ),
          }}
        ></TextField>
      </Box>
    </>
  );
};

const mapDispatchToProps = {
  setSearchQuery,
  fetchSearchResults,
};

export default connect(null, mapDispatchToProps)(Banner);
 