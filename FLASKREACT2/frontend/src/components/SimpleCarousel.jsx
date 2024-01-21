// Import necessary libraries
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typography, Button } from "@mui/material";
import edu1 from "../images/graduation.jpg";

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Image */}
      <img
        src={edu1}
        alt="Slide 1"
        style={{ width: "100vw", height: "60vh", margin: "auto" }}
      />

      {/* Typography with black frame */}
      <Typography
        variant="h4"
        style={{
          position: "absolute",
          padding: "1rem",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#fff",
          textAlign: "center",
          borderRadius: "8px",
          maxWidth: "70%",
          background: "rgba(0, 0, 0, 0.5)", // Black frame background
        }}
      >
        A little progress each day adds up to a big result
      </Typography>

      {/* Button with hover effect */}
      <Link to="/risk" style={{ textDecoration: "none" }}>
        <Button
          variant="contained"
          color="primary"
          style={{
            position: "absolute",
            top: "65%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2, // Place the button above the black frame
            "&:hover": {
              backgroundColor: "#beb312", // Change background color on hover
            },
          }}
        >
          Predict my risk
        </Button>
      </Link>
    </div>
  );
};

export default SimpleCarousel;
