import React from "react";
import { Box, Typography } from "@mui/material";
import { connect } from "react-redux";
import Loader from "./Loader";

const CastLeft = ({ castDetail, loading }) => {
  if (loading) {
    return <Loader />;
  }
  const getGenderString = (gender) => {
    if (gender === 1) {
      return "Female";
    } else if (gender === 2) {
      return "Male";
    } else {
      return "Unknown";
    }
  };

  const calculateAge = (birthdate) => {
    const today = new Date();
    const birthDate = new Date(birthdate);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  return (
    <Box sx={{ width: "35%" }}>
      <Typography
        variant="body1"
        sx={{
          fontWeight: "bolder",
          fontSize: "20px",
          marginLeft: "20px",
          color: "#000",
        }}
      >
        Personal Info:
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bolder",
          fontSize: "20px",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        Known For
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "80px",
          fontSize: "20px",
          marginLeft: "20px",
          marginTop: "8px",
        }}
      >
        {castDetail.known_for_department}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bolder",
          fontSize: "20px",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        Gender
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "80px",
          fontSize: "20px",
          marginLeft: "20px",
          marginTop: "8px",
        }}
      >
        {getGenderString(castDetail.gender)}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bolder",
          fontSize: "20px",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        Birthday
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "80px",
          fontSize: "20px",
          marginLeft: "20px",
          marginTop: "8px",
        }}
      >
        {castDetail.birthday} ({calculateAge(castDetail.birthday)} years old)
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontWeight: "bolder",
          fontSize: "20px",
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        Also Known As
      </Typography>
      {castDetail.also_known_as && (
        <ul>
          {castDetail.also_known_as.map((name, index) => (
            <li key={index}>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "80px",
                  fontSize: "20px",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  castDetail: state.castDetail,
  loading: state.loading,
});

export default connect(mapStateToProps, null)(CastLeft);
 