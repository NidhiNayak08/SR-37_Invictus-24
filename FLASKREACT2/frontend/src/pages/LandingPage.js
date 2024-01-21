import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #282c34; /* Dark grey background color */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const Container = styled.div`
  text-align: center;
  z-index: 2;
`;

const InnerContainer = styled.div`
  background-color: #fff; /* White rectangle background color */
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #282c34; /* Dark grey text color */
  margin-bottom: 20px;
`;

const ButtonLink = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #282c34; /* Dark grey text color */
  background-color: #28a745;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838;
  }
`;

const LandingPage = () => {
  return (
    <Overlay>
      <Container>
        <InnerContainer>
          <Title>Welcome to LearnCraft</Title>
          <h3>Craft your future today.</h3>
          <p>
            <ButtonLink to="/login">Login</ButtonLink>
            <span>|</span>
            <ButtonLink to="/register">Register</ButtonLink>
          </p>
        </InnerContainer>
      </Container>
    </Overlay>
  );
};

export default LandingPage;
