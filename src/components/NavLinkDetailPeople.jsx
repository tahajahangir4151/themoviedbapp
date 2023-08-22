import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { connect } from "react-redux";
import Loader from "./Loader";
import { fetchCastDetail, fetchKnownForCastData } from "../middleware/actions";
import { Link } from "react-router-dom";
import NotFound from "./NotFound";

const NavLinkDetailPeople = ({
  loading,
  fetchCastDetail,
  fetchKnownForCastData,
  activeData,
  buttonName,
  popularPeople,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  if (loading) {
    return <Loader />;
  }

  let data;
  if (activeData === "people" && buttonName === "people") {
    data = popularPeople;
  }

  if (!data || data.length === 0) {
    return <NotFound />;
  }

  const filteredData = data.results.filter(
    (item) => item.profile_path !== null
  );

  const handleCardClick = (id) => {
    fetchCastDetail(id);
    fetchKnownForCastData(id);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          fontSize: isMobile ? "24px" : isTablet ? "28px" : "30px",
          marginBottom: "20px",
          marginLeft: "30px",
        }}
      >
        Popular People
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          flexWrap: "wrap",
        }}
      >
        {filteredData.map((item) => (
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
              marginLeft: isMobile ? "10px" : "30px",
            }}
          >
            <Link
              to={`/person/${item.id}/${item.name}`}
              onClick={() => handleCardClick(item.id)}
            >
              <CardMedia
                component="img"
                image={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name || item.original_name}
              />
            </Link>
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
              {item.known_for && item.known_for.length > 0 && (
                <Typography
                  variant="body2"
                  component={"div"}
                  sx={{ fontSize: "15px" }}
                >
                  {item.known_for[0].overview}
                </Typography>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  loading: state.loading,
  activeData: state.activeData,
  buttonName: state.buttonName,
  popularPeople: state.popularPeople,
});

const mapDispatchToProps = {
  fetchCastDetail,
  fetchKnownForCastData,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavLinkDetailPeople);
 