import React from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const TrendingBtn = ({ activeButton, handleButtonClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      display="flex"
      flexDirection={isMobile ? "column" : "row"}
      alignItems={isMobile ? "center" : "flex-start"}
      sx={{ marginTop: "30px", marginLeft: "10px" }}
    >
      <Typography
        variant="h5"
        sx={{
          marginRight: isMobile ? 0 : "10px",
          marginLeft: isMobile ? 0 : "17px",
          marginBottom: isMobile ? "10px" : 0,
        }}
      >
        Trending
      </Typography>
      <ButtonGroup
        color="primary"
        aria-label="Trending Timeframe"
        sx={{
          borderRadius: "30px",
          overflow: "hidden",
          height: isMobile ? "auto" : "35px",
        }}
      >
        <Button
          onClick={() => handleButtonClick("today")}
          variant={activeButton === "today" ? "contained" : "outlined"}
          sx={{
            padding: "10px 15px",
            fontWeight: "600",
            borderRadius: "30px",
            "&:first-of-type": {
              borderTopRightRadius: isMobile ? "30px" : "0",
              borderBottomRightRadius: isMobile ? "30px" : "0",
            },
          }}
        >
          Today
        </Button>
        <Button
          onClick={() => handleButtonClick("thisWeek")}
          variant={activeButton === "thisWeek" ? "contained" : "outlined"}
          sx={{
            padding: "10px 15px",
            fontWeight: "600",
            borderRadius: "30px",
            "&:last-of-type": {
              borderTopLeftRadius: isMobile ? "30px" : "0",
              borderBottomLeftRadius: isMobile ? "30px" : "0",
            },
          }}
        >
          This Week
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default TrendingBtn;
