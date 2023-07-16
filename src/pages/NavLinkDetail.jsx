import React from "react";
import NavLinkDetailLeft from "../components/NavLinkDetailLeft";
import NavLinkDetailRight from "../components/NavLinkDetailRight";
import { Box, Container } from "@mui/material";

const NavLinkDetail = () => {
  return (
    <Container>
      <Box style={{ display: "flex" }}>
        <NavLinkDetailLeft />
        <NavLinkDetailRight />
      </Box>
    </Container>
  );
};

export default NavLinkDetail;
