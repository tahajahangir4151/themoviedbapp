import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
// import LanguageIcon from "@mui/icons-material/Language";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Grid,
  TextField,
  Menu,
  MenuItem,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
import CustomToast from "./CustomToast";
import { fetchSearchResults, setSearchQuery } from "../middleware/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NavRight = ({ setSearchQuery, fetchSearchResults }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showLogoutMenu, setShowLogoutMenu] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);

  const handleLogin = () => {
    if (!email) {
      toast.error("Please enter your email.");
      return;
    } else if (!name) {
      toast.error("Please enter your name.");
      return;
    } else if (!password) {
      toast.error("Please enter your password.");
      return;
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email.match(emailRegex)) {
      toast.error("Invalid email format. Please enter a valid email address.");
      return;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    if (!password.match(passwordRegex)) {
      toast.error(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      );
      return;
    }

    setName(name);
    setLoggedIn(true);
    setShowForm(false);

    toast.success("Login Successful!");
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setEmail("");
    setPassword("");
    setName("");
    setShowLogoutMenu(null);

    toast.success("Logged Out Successfully");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "name") setName(value);
  };

  const handleProfileIconClick = (event) => {
    if (!loggedIn) {
      setShowForm(true);
    } else {
      setShowLogoutMenu(event.currentTarget);
    }
  };

  const handleLogoutMenuClose = () => {
    setShowLogoutMenu(null);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const navigate = useNavigate();
  const handleSearchClick = () => {
    if (inputValue.trim() !== "") {
      setSearchQuery(inputValue);
      fetchSearchResults(inputValue);
      setInputValue("");
      navigate(`/search/query/${encodeURIComponent(inputValue)}`);
      setShowSearchBox(false);
    }
  };

  const handleSearchBoxClose = () => {
    setShowSearchBox(false);
  };

  return (
    <Grid container alignItems="center" justifyContent="flex-end" spacing={1}>
      <CustomToast />
      {loggedIn ? (
        <>
          <Grid item>
            <IconButton onClick={handleProfileIconClick}>
              <Avatar sx={{ bgcolor: "#f50057", cursor: "pointer" }}>
                {name.charAt(0).toUpperCase()}
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={showLogoutMenu}
              open={Boolean(showLogoutMenu)}
              onClose={handleLogoutMenuClose}
            >
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Grid>
        </>
      ) : (
        <Grid item>
          <IconButton onClick={handleProfileIconClick}>
            <AccountCircleIcon className="accountCircle-icon" />
          </IconButton>
          <Dialog open={showForm} onClose={() => setShowForm(false)}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter your credentials to login.
              </DialogContentText>
              <TextField
                name="name"
                label="Name"
                type="name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={handleInputChange}
              />
              <TextField
                name="email"
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={handleInputChange}
              />
              <TextField
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={handleInputChange}
                InputProps={{
                  endAdornment: (
                    <IconButton onClick={togglePasswordVisibility}>
                      {showPassword ? (
                        <VisibilityOffIcon />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  ),
                }}
              />{" "}
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setShowForm(false)} color="primary">
                Cancel
              </Button>
              <Button onClick={handleLogin} color="primary">
                Login
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
      )}
      {/* <Grid item>
        <LanguageIcon className="language-icon" />
      </Grid>
      <Grid item>
        <NotificationsIcon className="notification-icon" />
      </Grid> */}
      <Grid item>
        <SearchIcon
          className="search-icon"
          onClick={() => setShowSearchBox(true)}
        />
        <Dialog open={showSearchBox} onClose={handleSearchBoxClose}>
          <DialogTitle>Search</DialogTitle>
          <DialogContent>
            <TextField
              label="Search for a movies, TV shows..."
              variant="outlined"
              fullWidth
              margin="normal"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleSearchBoxClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSearchClick} color="primary">
              Search
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </Grid>
  );
};
const mapDispatchToProps = {
  setSearchQuery,
  fetchSearchResults,
};
export default connect(null, mapDispatchToProps)(NavRight);
