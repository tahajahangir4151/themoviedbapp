import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  // Box,
  CardContent,
  // CircularProgress,
  Tooltip,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Loader from "./Loader";

const TrendingCard = ({ data, loading }) => {
  if (loading) {
    return <Loader />;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  // console.log(data);
  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
      }}
    >
      {data.results.map((item) => {
        // const color = item.vote_average >= 8 ? "#4CAF50" : "#FFC107";

        return (
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
            {/* <Box
              sx={{
                position: "relative",
              }}
            >
              <CircularProgress
                value={Math.round(item.vote_average * 10)}
                variant="determinate"
                sx={{
                  color: color,
                  position: "relative",
                  border: "1px solid ",
                  backgroundColor: "#081C22",
                  borderRadius: "50%",
                }}
              />
              <Typography
                variant="caption"
                component="div"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  Color: "#F7FFFF",
                  fontWeight: "bold",
                  marginLeft: "-65px",
                  color: "#fff",
                }}
              >
                {Math.round(item.vote_average * 10)}%
              </Typography>
            </Box> */}
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
              }}
            />
          </Card>
        );
      })}
    </div>
  );
};

export default TrendingCard;
