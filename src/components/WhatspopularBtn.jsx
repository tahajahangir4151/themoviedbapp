import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const WhatspopularBtn = ({
  activeWhatsPopularBtn,
  handleButtonClickWhatsPopular,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
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
          What's Popular
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
            onClick={() => handleButtonClickWhatsPopular("streaming")}
            variant={
              activeWhatsPopularBtn === "streaming" ? "contained" : "outlined"
            }
            sx={{
              padding: "10px 15px",
              fontWeight: "600",
              borderRadius: "30px",
              "&:first-of-type": {
                // borderTopRightRadius: isMobile ? "30px" : "0",
                borderBottomRightRadius: isMobile ? "30px" : "0",
              },
            }}
          >
            Streaming
          </Button>
          <Button
            onClick={() => handleButtonClickWhatsPopular("on tv")}
            variant={
              activeWhatsPopularBtn === "on tv" ? "contained" : "outlined"
            }
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
            On Tv
          </Button>
          <Button
            onClick={() => handleButtonClickWhatsPopular("for rent")}
            variant={
              activeWhatsPopularBtn === "for rent" ? "contained" : "outlined"
            }
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
            For Rent
          </Button>
          <Button
            onClick={() => handleButtonClickWhatsPopular("in theaters")}
            variant={
              activeWhatsPopularBtn === "in theaters" ? "contained" : "outlined"
            }
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
            In Theaters
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
};

export default WhatspopularBtn;
 