import React from "react";
import AddIcon from "@mui/icons-material/Add";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";

const NavRight = () => {
  return (
    <Grid container alignItems="center" justifyContent="flex-end" spacing={1}>
      <Grid item>
        <AddIcon className="add-icon" />
      </Grid>
      <Grid item>
        <LanguageIcon className="language-icon" />
      </Grid>
      <Grid item>
        <NotificationsIcon className="notification-icon" />
      </Grid>
      <Grid item>
        <AccountCircleIcon className="accountCircle-icon" />
      </Grid>
      <Grid item>
        <SearchIcon className="search-icon" />
      </Grid>
    </Grid>
  );
};

export default NavRight;
