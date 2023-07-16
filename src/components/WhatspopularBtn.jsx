import React from "react";
import { Box, Button, ButtonGroup, Typography } from "@mui/material";

const WhatspopularBtn = ({
  activeWhatsPopularBtn,
  handleButtonClickWhatsPopular,
}) => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        sx={{ marginTop: "30px", marginLeft: "10px" }}
      >
        <Typography
          variant="h5"
          sx={{ marginRight: "10px", marginLeft: "17px" }}
        >
          What's Popular
        </Typography>
        <ButtonGroup
          color="primary"
          aria-label="Trending Timeframe"
          sx={{
            borderRadius: "30px",
            overflow: "hidden",
            height: "35px",
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
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
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
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
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
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
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
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
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
