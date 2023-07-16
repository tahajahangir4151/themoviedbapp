import React, { useContext } from "react";
import { Contexts } from "../contexts/contexts";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const NavLinkDetailPeople = () => {
  const { popularPeople } = useContext(Contexts);
  const loading = useSelector((state) => state.loading);
  let data = popularPeople;

  if (loading) {
    return <Loader />;
  }
  if (!data || data.length === 0) {
    return <div>No Data Available</div>;
  }

  return (
    <div style={{ marginTop: "20px" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          fontSize: "30px",
          marginBottom: "20px",
          marginLeft: "30px",
        }}
      >
        Popular People
      </Typography>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {data.results.map((item) => (
          <Card
            key={item.id}
            sx={{
              flex: "0 0 20%",
              width: "100%",
              height: "auto",
              position: "relative",
              cursor: "pointer",
              marginBottom: "20px",
              marginRight: "10px",
              marginLeft: "30px",
            }}
          >
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              alt={item.name || item.original_name}
            />
            <CardContent>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: "#000",
                  cursor: "pointer",
                  fontWeight: "bolder",
                }}
              >
                {item.name || item.original_name}
              </Typography>
              <Typography
                variant="body2"
                component={"div"}
                sx={{ fontSize: "15px" }}
              >
                {item.known_for[0].overview}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NavLinkDetailPeople;
