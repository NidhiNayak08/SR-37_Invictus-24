import { Box } from "@mui/material";

import SuccessStories from "../components/SuccessStories";
import SimpleCarousel from "../components/SimpleCarousel";
import MostViewedVideos from "../components/MostViewed";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import edu1 from "../images/edu1.png"

const HomePage = () => {
  return (
    <Box>
      <Header />
      <Box>
        {/* <Typography variant="h4" align="center" mb={4}>
          WELCOME MSG HERE
        </Typography> */}
        <SimpleCarousel />
        <SuccessStories />
        <MostViewedVideos />
        <Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default HomePage;

// // Home.js
// import React from "react";
// import Navbar from "../components/Navbar"; // Adjust the path accordingly
// import SuccessStories from "../components/SuccessStories";
// import HeroSection from "../components/HeroSection";
// import Footer from "../components/Footer";
// import MostViewedVideos from "../components/MostViewed";
// import RiskForm from "./RiskForm";

// const Home = () => {
//   const handleFormSubmit = (predictedResult) => {
//     // Handle the predicted result here
//     console.log("Predicted Result:", predictedResult);
//   };
//   return (
//     <div>
//       {/* Navbar */}
//       <Navbar />
//       <HeroSection />
//       <SuccessStories />
//       <MostViewedVideos />
//       <RiskForm onSubmit={handleFormSubmit} />
//       <Footer />

//       {/* Rest of your content */}
//     </div>
//   );
// };

// export default Home;
