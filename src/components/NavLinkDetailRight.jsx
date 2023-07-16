import React, { useContext } from "react";
import { Box } from "@mui/material";
import { Contexts } from "../contexts/contexts";
import NavLinkDetailCard from "./NavLinkDetailCard";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const NavLinkDetailRight = () => {
  const { movies, tvShows, activeData } = useContext(Contexts);
  const loading = useSelector((state) => state.loading);

  let dataToRender;
  if (activeData === "movies") {
    dataToRender = movies;
  } else if (activeData === "tvShows") {
    dataToRender = tvShows;
  }

  return (
    <Box
      component={"div"}
      sx={{
        height: "auto",
        width: "70%",
        float: "right",
      }}
    >
      {loading ? (
        <Loader />
      ) : (
        <NavLinkDetailCard data={dataToRender} loading={loading} />
      )}
    </Box>
  );
};

export default NavLinkDetailRight;
