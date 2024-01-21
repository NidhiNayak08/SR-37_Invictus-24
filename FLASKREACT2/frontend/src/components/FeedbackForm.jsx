import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const FeedbackForm = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    // Your form fields here
    name: "",
    email: "",
    feedback: "",
  });

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Feedback submitted:", formData);
    handleClose();
    alert("Feedback submitted successfully!");
  };

  return (
    <div>
      <Dialog PaperProps={{ style: { borderRadius: 10 } }} open={true}>
        <Box sx={{ ml: "auto", padding: 1 }}>
          <IconButton LinkComponent={Link} to="/home">
            <CloseIcon />
          </IconButton>
          {/* to provide a icon and then have a button effect as well */}
        </Box>
        <DialogContent>
          <Box>
            <Typography variant="h5" textAlign={"center"} padding={2}>
              Feedback Form
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <TextField
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Feedback"
              multiline
              rows={4}
              fullWidth
              variant="outlined"
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedbackForm;
