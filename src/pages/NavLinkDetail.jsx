import React from "react";
import NavLinkDetailRight from "../components/NavLinkDetailRight";
import { Box, Container } from "@mui/material";

const NavLinkDetail = () => {
  return (
    <Container>
      <Box style={{ display: "flex" }}>
        <NavLinkDetailRight />
      </Box>
    </Container>
  );
};

export default NavLinkDetail;
