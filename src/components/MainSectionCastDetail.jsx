import React from "react";
import CastLeft from "./CastLeft";
import CastRight from "./CastRight";
import { Box } from "@mui/material";

const MainSectionCastDetail = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CastLeft />
      <CastRight />
    </Box>
  );
};

export default MainSectionCastDetail;
