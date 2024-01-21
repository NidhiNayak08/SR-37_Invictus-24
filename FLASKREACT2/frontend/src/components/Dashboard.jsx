import React from "react";
import Header from "./Header";
import { Box, Grid, Paper, Typography } from "@mui/material";
import edu from "../images/edu.png";

const Dashboard = () => {
  return (
    <Box>
      <Header />
      <Grid container spacing={2}>
        {/* Left Section - Student Profile */}
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: 80 }}>
            {/* Profile Icon */}
            <Box textAlign="center" mb={2}>
              <img
                src="profile-icon.png" // Replace with your profile icon URL
                alt="Profile"
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: "50%",
                  marginBottom: 5,
                }}
              />
            </Box>
            {/* Student Details */}
            <Typography variant="h5" gutterBottom style={{ marginBottom: 16 }}>
              Student Details
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              <strong>Name:</strong> John Doe
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              <strong>Education:</strong> Computer Science
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              <strong>Course Registered:</strong> React Development
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              <strong>Previous Qualification:</strong> Bachelor's in IT
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              <strong>Attendance:</strong> 85%
            </Typography>
            <Typography variant="body1" style={{ marginBottom: 8 }}>
              <strong>Grade:</strong> A
            </Typography>
          </Paper>
        </Grid>

        {/* Right Section - Graphs */}
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: 16 }}>
            {/* Add your Python visualization graphs here */}
            <img src={edu} alt="kjdsf" />
            {/* Add your graphs/components here */}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
