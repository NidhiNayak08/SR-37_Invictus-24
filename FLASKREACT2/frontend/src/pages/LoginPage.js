import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import study from "../images/study.jpg";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: #ffffff; /* Background color */
`;

const ImageContainer = styled.div`
  flex: 1;
  background-image: url("${study}");
  background-size: cover;
  background-position: center;
`;

const FormContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #343a40; /* Title color */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ced4da;
  border-radius: 5px;
`;

const RememberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 5px;
`;

const SubmitButton = styled.button`
  padding: 15px;
  font-size: 1.2rem;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RedirectLink = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;
  color: #6c757d;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const logInUser = () => {
    if (email.length === 0) {
      alert("Email has left blank!");
    } else if (password.length === 0) {
      alert("Password has left blank!");
    } else {
      axios
        .post("http://127.0.0.1:5000/login", {
          email: email,
          password: password,
        })
        .then(function (response) {
          console.log(response);
          navigate("/home"); // Redirect to the "/home" page on successful login
        })
        .catch(function (error) {
          console.log(error, "error");
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        });
    }
  };

  return (
    <Container>
      <ImageContainer />
      <FormContainer>
        <FormWrapper>
          <Title>Welcome to EduQuest.</Title>
          <Form>
            <FormInput
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter a valid email address"
            />
            <FormInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            <RememberMeContainer>
              <label>
                <RememberMeCheckbox type="checkbox" />
                Remember me
              </label>
              <a href="#!" className="text-body">
                Forgot password?
              </a>
            </RememberMeContainer>
            <SubmitButton type="button" onClick={logInUser}>
              Login
            </SubmitButton>
            <RedirectLink>
              Don't have an account? <a href="/register">Register</a>
            </RedirectLink>
          </Form>
        </FormWrapper>
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
