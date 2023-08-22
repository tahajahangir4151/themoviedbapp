import React from "react";
import {
  Button,
  ButtonGroup,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const FreeToWatchBtn = ({
  activeFreeToWatchBtn,
  handleFreeToWatchButtonClick,
}) => {
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
        Free To Watch
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
          onClick={() => handleFreeToWatchButtonClick("movies")}
          variant={activeFreeToWatchBtn === "movies" ? "contained" : "outlined"}
          sx={{
            padding: "10px 15px",
            fontWeight: "600",
            borderRadius: "30px",
            "&:first-of-type": {
              // borderTopRightRadius: isMobile ? "30px" : "0",
              // borderBottomRightRadius: isMobile ? "30px" : "0",
            },
          }}
        >
          Movies{" "}
        </Button>
        <Button
          onClick={() => handleFreeToWatchButtonClick("tv")}
          variant={activeFreeToWatchBtn === "tv" ? "contained" : "outlined"}
          sx={{
            padding: "10px 15px",
            fontWeight: "600",
            borderRadius: "30px",
            "&:last-of-type": {
               // borderTopRightRadius: isMobile ? "30px" : "0",
              // borderBottomRightRadius: isMobile ? "30px" : "0",
            },
          }}
        >
          Tv{" "}
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default FreeToWatchBtn;
