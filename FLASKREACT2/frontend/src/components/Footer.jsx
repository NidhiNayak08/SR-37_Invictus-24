import React from "react";
import { Box, Typography, Container, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box bgcolor="#ffffff" color="black" py={4}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} color="inherit">
            <Typography variant="h6" gutterBottom fontWeight={"bold"}>
              About Us
            </Typography>
            <Typography>
              EduTech is a hub of creativity and excellence. From industry
              expertise to community engagement, we take pride in delivering
              quality and making a positive impact.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={"bold"}>
              Quick Links
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Home
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Services
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Contact Us
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom fontWeight={"bold"}>
              Connect With Us
            </Typography>
            <Link href="#" color="inherit" underline="none">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Twitter
            </Link>
            <br />
            <Link href="#" color="inherit" underline="none">
              Instagram
            </Link>
          </Grid>
        </Grid>
      </Container>

      <Box mt={3} textAlign="center">
        <Typography variant="body2">
          &copy; 2024 Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
