// HeroSection.js

import React from "react";
import styled from "styled-components";
import heroImg from "../images/heroSection.png";

const HeroContainer = styled.div`
  margin-top: 60px;
  position: relative;
  overflow: hidden; /* Ensure that the frame doesn't overflow */
`;

const HeroImage = styled.img`
  width: 100vw;
  height: 100vh;
  max-height: 400px;
  display: block;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Black overlay */
  z-index: 1; /* Place the overlay above the image */
`;

const QuoteBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2; /* Place the text above the overlay */
  color: #fff; /* Text color */
  text-align: center;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroImage src={heroImg} alt="Hero Image" />
      <Overlay />
      <QuoteBox>
        <h2>"Begin your quest to knowledge"</h2>
      </QuoteBox>
    </HeroContainer>
  );
};

export default HeroSection;
