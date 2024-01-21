import React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{ bgcolor: "#182747", color: "white", width: "100vw" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          width={"20%"}
          display={"flex"}
          alignContent={"center"}
          justifyContent={"center"}
          marginTop={"5px"}
        >
          <IconButton
            component={Link}
            to="/"
            style={{ color: "#fff", fontSize: "2rem" }}
          >
            <SchoolIcon />
          </IconButton>
          <Typography variant="h6" fontWeight={"bold"} marginTop={"4px"}>
            EduTech
          </Typography>
        </Box>
        <Box display={"flex"}>
          <Tabs textColor="white">
            <Tab
              component={Link}
              to="/home"
              label="Home"
              sx={{
                "&:hover": {
                  color: "#ffc107", // Change color on hover
                },
              }}
            />
            <Tab
              component={Link}
              to="/dashboard"
              label="Dashboard"
              sx={{
                "&:hover": {
                  color: "#ffc107", // Change color on hover
                },
              }}
            />
            <Tab
              component={Link}
              to="/resources"
              label="Resources"
              sx={{
                "&:hover": {
                  color: "#ffc107", // Change color on hover
                },
              }}
            />
            <Tab
              component={Link}
              to="/feedback"
              label="Feedback"
              sx={{
                "&:hover": {
                  color: "#ffc107", // Change color on hover
                },
              }}
            />
          </Tabs>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
