import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Autocomplete,
  TextField,
  Slider,
  Tooltip,
  Button,
} from "@mui/material";

const NavLinkDetailLeft = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAdditionalCheckboxes, setShowAdditionalCheckboxes] =
    useState(false);
  const [showReleaseCheckboxes, setShowReleaseCheckboxes] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [isFormDirty, setIsFormDirty] = useState(false);

  useEffect(() => {
    if (
      selectedOption !== null ||
      showAdditionalCheckboxes ||
      showReleaseCheckboxes ||
      sliderValue !== 50
    ) {
      setIsFormDirty(true);
    } else {
      setIsFormDirty(false);
    }
  }, [
    selectedOption,
    showAdditionalCheckboxes,
    showReleaseCheckboxes,
    sliderValue,
  ]);

  const handleOptionChange = (event, value) => {
    setSelectedOption(value);
  };

  const handleMainCheckboxChange = (event) => {
    setShowAdditionalCheckboxes(!event.target.checked);
  };

  const handleReleaseCheckboxChange = (event) => {
    setShowReleaseCheckboxes(!event.target.checked);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  return (
    <Box
      component="div"
      sx={{
        height: "auto",
        width: "30%",
        float: "left",
        color: "white",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000" }}>
        Sort By:
      </Typography>
      <FormControl
        sx={{
          width: "100%",
          marginRight: "10px",
          marginTop: "10px",
        }}
      >
        <Autocomplete
          value={selectedOption}
          onChange={handleOptionChange}
          options={[
            "Popularity Descending",
            "Popularity Ascending",
            "Rating Descending",
            "Rating Ascending",
            "Release Date Descending",
            "Release Date Ascending",
            "Title(A-Z)",
            "Title(Z-A)",
          ]}
          renderInput={(params) => (
            <TextField {...params} label="Sort result by" />
          )}
        />
      </FormControl>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "#000", marginTop: "10px" }}
      >
        Filters:
      </Typography>
      <Typography
        sx={{ color: "#B0B0B0", fontWeight: "10px", marginTop: "5px" }}
      >
        Show Me
      </Typography>
      <FormControl>
        <RadioGroup defaultValue="everything">
          <FormControlLabel
            value="everything"
            control={<Radio />}
            label="Everything"
            sx={{ color: "black" }}
          />
          <FormControlLabel
            value="movieihavenotseen"
            control={<Radio />}
            label="Movies I Haven't Seen"
            sx={{ color: "black" }}
          />
          <FormControlLabel
            value="movieihaveseen"
            control={<Radio />}
            label="Movies I Have Seen"
            sx={{ color: "black" }}
          />
        </RadioGroup>
      </FormControl>
      <Typography
        sx={{ color: "#B0B0B0", fontWeight: "10px", marginTop: "5px" }}
      >
        Availabilities
      </Typography>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox onChange={handleMainCheckboxChange} defaultChecked />
          }
          label="Search all availabilities?"
          sx={{ color: "black" }}
        />
        {showAdditionalCheckboxes && (
          <>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Premiere"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Theatrical (limited)"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Theatrical"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Digital"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Physical"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="TV"
              sx={{ color: "darkgray", fontWeight: "bolder" }}
            />
          </>
        )}
      </FormControl>
      <Typography
        sx={{ color: "#B0B0B0", fontWeight: "10px", marginTop: "5px" }}
      >
        Release Dates
      </Typography>
      <FormControl>
        <FormControlLabel
          control={
            <Checkbox onChange={handleReleaseCheckboxChange} defaultChecked />
          }
          label="Search all releases?"
          sx={{ color: "black" }}
        />
        {showReleaseCheckboxes && (
          <>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Premiere"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Theatrical (limited)"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Theatrical"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Digital"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Physical"
              sx={{ color: "gray", fontWeight: "bolder" }}
            />
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="TV"
              sx={{ color: "darkgray", fontWeight: "bolder" }}
            />
          </>
        )}
      </FormControl>
      <Box>
        <TextField
          label="From"
          type="date"
          variant="outlined"
          defaultValue={new Date().toISOString().slice(0, 10)}
          sx={{ marginTop: "10px" }}
        />
      </Box>
      <Box>
        <TextField
          label="To"
          type="date"
          variant="outlined"
          defaultValue={new Date().toISOString().slice(0, 10)}
          sx={{ marginTop: "10px" }}
        />
      </Box>
      <Box>
        <Typography
          sx={{ color: "#B0B0B0", fontWeight: "10px", marginTop: "10px" }}
        >
          User Score:
        </Typography>
        <Tooltip title={`${sliderValue}`}>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            aria-label="Slider"
            sx={{ marginTop: "10px" }}
          />
        </Tooltip>
      </Box>
      <Button
        variant="contained"
        disabled={!isFormDirty}
        sx={{
          width: "100%",
          borderRadius: "20px",
          backgroundColor: "#01B4E4",
          "&:hover": {
            backgroundColor: "#032541",
            color: "#fff",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default NavLinkDetailLeft;
