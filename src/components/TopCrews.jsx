import React from "react";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import Loader from "./Loader";
import { connect } from "react-redux";
import { fetchCastDetail } from "../middleware/actions";
import { Link } from "react-router-dom";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500/";

const TopCrews = ({ dataToRenderCrew, loading, fetchCastDetail }) => {
  if (loading) {
    return <Loader />;
  }

  // Filter crew members without a profile_path
  const filteredData = dataToRenderCrew.filter(
    (crewMember) => crewMember.profile_path
  );

  const handleCrewClick = (id) => {
    fetchCastDetail(id);
  };

  return (
    <>
      <Typography variant="h4" sx={{ marginLeft: "10px", marginTop: "10px" }}>
        Top Crews:
      </Typography>
      <Box sx={{ display: "flex" }}>
        {" "}
        <Box
          sx={{
            display: "flex",
            overflowX: "auto",
            width: "100%",
          }}
        >
          {filteredData.map((crewMember, index) => (
            <Card
              key={index}
              sx={{
                flex: "0 0 auto",
                width: "15%",
                height: "370px",
                marginRight: "5px",
                marginLeft: "5px",
                marginTop: "20px",
                position: "relative",
                "@media (max-width: 1200px)": {
                  width: "20%",
                  height: "300px",
                },
                "@media (max-width: 768px)": {
                  width: "25%",
                  height: "250px",
                },
                "@media (max-width: 576px)": {
                  width: "45%",
                  height: "360px",
                },
              }}
            >
              <Link
                to={`/person/${crewMember.id}/${crewMember.name}`}
                onClick={() => handleCrewClick(crewMember.id)}
              >
                <CardMedia
                  component="img"
                  image={imageBaseUrl + crewMember.profile_path}
                  alt={crewMember.name}
                  sx={{ height: "70%" }}
                />
              </Link>
              <Box sx={{ padding: "10px" }}>
                <Typography
                  variant={"body1"}
                  sx={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  {crewMember.original_name}
                </Typography>
                <Typography variant={"body1"} sx={{ fontSize: "15px" }}>
                  {crewMember.department}
                </Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = {
  fetchCastDetail,
};
export default connect(mapStateToProps, mapDispatchToProps)(TopCrews);
 