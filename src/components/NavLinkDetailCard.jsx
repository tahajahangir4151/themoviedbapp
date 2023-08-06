import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardContent, Tooltip, Typography } from "@mui/material";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const NavLinkDetailCard = ({ data, loading, onCardClick }) => {
  if (loading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <NotFound />;
  }

  const handleCardClick = (itemId) => {
    onCardClick(itemId);
  };

  const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      {data.results.map((item) => (
        <Card
          key={item.id}
          sx={{
            flex: "0 0 auto",
            width: "20%",
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
            <Link
              to={`/movie/${item.id}-${
                item.title ||
                item.original_title ||
                item.name ||
                item.original_name
              }`}
              onClick={() => handleCardClick(item.id)}
            >
              <CardMedia
                component="img"
                image={`${imageBaseUrl}${item.poster_path}`}
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
            </Link>
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
        </Card>
      ))}
    </div>
  );
};

export default NavLinkDetailCard;
