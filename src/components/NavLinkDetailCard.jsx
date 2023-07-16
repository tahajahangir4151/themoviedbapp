import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent, Tooltip, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Loader from "./Loader";

const NavLinkDetailCard = ({ data, loading }) => {
  if (loading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        // overflowX: "auto",
      }}
    >
      {data.results.map((item) => (
        <Card
          key={item.id}
          sx={{
            flex: "0 0 auto",
            width: "30%",
            height: "470px",
            marginRight: "5px",
            marginLeft: "5px",
            marginTop: "5px",
            cursor: "pointer",
            position: "relative",
            zIndex: 0,
            "@media (max-width: 1200px)": {
              width: "40%",
              height: "400px",
            },
            "@media (max-width: 768px)": {
              width: "45%",
              height: "350px",
            },
            "@media (max-width: 576px)": {
              width: "50%",
              height: "300px",
            },
          }}
        >
          <Tooltip
            title={
              item.title ||
              item.original_title ||
              item.name ||
              item.original_name
            }
          >
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={
                item.title ||
                item.original_title ||
                item.name ||
                item.original_name
              }
              sx={{
                height: "70%",
              }}
            />
          </Tooltip>
          <CardContent>
            <Tooltip
              title={
                item.title ||
                item.original_title ||
                item.name ||
                item.original_name
              }
            >
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: "#000",
                  cursor: "pointer",
                  fontWeight: "bolder",
                  "&:hover": {
                    color: "#01B4E4",
                  },
                }}
              >
                {item.title ||
                  item.original_title ||
                  item.name ||
                  item.original_name}
              </Typography>
            </Tooltip>
            <Typography variant="body2" component="div">
              {item.release_date || item.first_air_date}
            </Typography>
          </CardContent>
          <MoreHorizIcon
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "lightgray",
              borderRadius: "50%",
              opacity: "0.6",
              zIndex: 1,
            }}
          />
        </Card>
      ))}
    </div>
  );
};

export default NavLinkDetailCard;
