import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const RiskForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    Attendance: 0,
    Overall_Grade: "",
    Family_Income: 0,
    course_fees: 0,
    fees_paid: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverEndpoint = "http://127.0.0.1:5000/predict";

    try {
      const response = await axios.post(serverEndpoint, formData);

      console.log(response.data);

      const predictedResult = response.data.prediction;

      onSubmit(predictedResult);
    } catch (error) {
      console.error("Error while making the POST request:", error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <label>Attendance:</label>
        <input
          type="number"
          name="Attendance"
          value={formData.Attendance}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label>Overall Grade:</label>
        <input
          type="text"
          name="Overall_Grade"
          value={formData.Overall_Grade}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label>Family Income:</label>
        <input
          type="number"
          name="Family_Income"
          value={formData.Family_Income}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label>Course Fees:</label>
        <input
          type="number"
          name="course_fees"
          value={formData.course_fees}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <label>Fees Paid:</label>
        <input
          type="number"
          name="fees_paid"
          value={formData.fees_paid}
          onChange={handleChange}
        />
      </FormGroup>
      <SubmitButton type="submit">Predict</SubmitButton>
    </FormContainer>
  );
};

export default RiskForm;
