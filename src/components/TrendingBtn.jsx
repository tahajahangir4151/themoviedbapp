import React from "react";
import { Button, ButtonGroup, Typography, Box } from "@mui/material";

const TrendingBtn = ({ activeButton, handleButtonClick }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{ marginTop: "30px", marginLeft: "10px" }}
    >
      <Typography variant="h5" sx={{ marginRight: "10px", marginLeft: "17px" }}>
        Trending
      </Typography>
      <ButtonGroup
        color="primary"
        aria-label="Trending Timeframe"
        sx={{ borderRadius: "30px", overflow: "hidden", height: "35px" }}
      >
        <Button
          onClick={() => handleButtonClick("today")}
          variant={activeButton === "today" ? "contained" : "outlined"}
          sx={{
            padding: "10px 15px",
            fontWeight: "600",
            borderRadius: "30px",
            "&:first-of-type": {
              borderTopRightRadius: "0",
              borderBottomRightRadius: "0",
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
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
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
