// SuccessStories.js

import React from "react";
import styled from "styled-components";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const SuccessStoriesContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  position: absolute;
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center; /* Center-align text within container */
`;

const SuccessCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-right: 10px;
  width: calc(25% - 10px);
  background-color: #fff;
  margin-bottom: 20px;
  position: relative;
  display: inline-block; /* Display cards inline */
`;

const QuotationMarks = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  font-size: 24px;
  color: blue; /* Set blue color for FormatQuoteIcon */
`;

const SuccessStories = () => {
  const successStories = [
    {
      id: 1,
      title: "Achieved Great Success",
      description:
        "EduFord is a game-changer! The personalized course recommendations have made my learning journey smoother and more enjoyable.",
    },
    {
      id: 2,
      title: "Overcame Challenges",
      description:
        "EduFord's testimonials aren't just words; they reflect real satisfaction. The course suggestions have been spot-on, saving me time and helping me stay on the right track.",
    },
    {
      id: 3,
      title: "Reached New Heights",
      description:
        "I love how EduFord tailors recommendations based on my enrolled courses. It's like having a personal guide in the vast world of education!",
    },
  ];

  return (
    <SuccessStoriesContainer>
      <h2 style={{ textAlign: "center", fontSize: "2rem" }}>Success Stories</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {successStories.map((story) => (
          <SuccessCard key={story.id}>
            <QuotationMarks>
              <FormatQuoteIcon />
            </QuotationMarks>
            <h4>{story.title}</h4>
            <p>{story.description}</p>
          </SuccessCard>
        ))}
      </div>
    </SuccessStoriesContainer>
  );
};

export default SuccessStories;
