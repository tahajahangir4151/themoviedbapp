import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  Box,
  CardContent,
  CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const TrendingCard = ({ data, loading, onCardClick }) => {
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
    <div style={{ display: "flex", overflowX: "auto" }}>
      {data.results.map((item) => (
        <Card
          key={item.id}
          sx={{
            flex: "0 0 auto",
            width: "15%",
            height: "470px",
            marginRight: "5px",
            marginLeft: "5px",
            marginTop: "20px",
            cursor: "pointer",
            position: "relative",
            "@media (max-width: 1200px)": {
              width: "20%",
              height: "400px",
            },
            "@media (max-width: 768px)": {
              width: "25%",
              height: "350px",
            },
            "@media (max-width: 576px)": {
              width: "30%",
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
          <Box position="relative" display="inline-flex">
            <CircularProgress
              value={Math.round(item.vote_average * 10)}
              variant="determinate"
              sx={{
                color: item.vote_average >= 8 ? "#4CAF50" : "#FFC107",
                width: "80px",
                height: "80px",
                backgroundColor: "#081C22",
                borderRadius: "50%",
              }}
            />
            <Typography
              variant="caption"
              component="div"
              sx={{
                top: "0",
                left: "0",
                transform: "translate(26%, 40%)",
                fontWeight: "bold",
                color: "#F7FFFF",
                fontSize: "13px",
                position: "absolute",
              }}
            >
              {`${Math.round(item.vote_average * 10)}%`}
            </Typography>
          </Box>
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

export default TrendingCard;
 