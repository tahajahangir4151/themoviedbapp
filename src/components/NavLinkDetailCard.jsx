import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import {
  CardContent,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const NavLinkDetailCard = ({ data, loading, onCardClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
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
        flexDirection: isMobile ? "column" : "row",
        alignItems: isMobile ? "center" : "flex-start",
      }}
    >
      {data.results.map((item) => (
        <Card
          key={item.id}
          sx={{
            flex: "0 0 auto",
            width: isMobile ? "100%" : isTablet ? "45%" : "20%",
            height: isMobile ? "auto" : "470px",
            margin: "5px",
            cursor: "pointer",
            position: "relative",
            zIndex: 0,
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
                image={
                  `${imageBaseUrl}${item.poster_path}` ||
                  `${imageBaseUrl}${item.backdrop_path}`
                }
                alt={
                  item.title ||
                  item.original_title ||
                  item.name ||
                  item.original_name
                }
                sx={{
                  height: "50%",
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
 