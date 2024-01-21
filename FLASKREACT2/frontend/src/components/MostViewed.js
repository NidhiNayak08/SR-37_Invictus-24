// MostViewedVideos.js
import React from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import { Typography } from "@mui/material";

const SectionContainer = styled.div`
  background-color: #182747;
  padding: 20px;
  margin-top: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const VideoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const VideoCard = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px;
  width: 35%; /* Adjusted width */
  text-align: center;
`;

const MostViewedVideos = () => {
  // Dummy data for most viewed videos
  const videos = [
    { id: 1, title: "ReactJS Tutorial", videoId: "SqcY0GlETPk" },
    { id: 2, title: "Ultimate WebDev Roadmap", videoId: "Gc4Xh8u19NU" },
    { id: 3, title: "Python for Beginners", videoId: "JeznW_7DlB0" },
    { id: 3, title: "Data Structures and Algorithms", videoId: "CBYHwZcbD-s" },
  ];

  const opts = {
    height: "150",
    width: "100%",
  };

  return (
    <SectionContainer>
      <h2 style={{ textAlign: "center", fontSize: "2rem", color: "white" }}>
        Most Viewed videos
      </h2>
      <VideoContainer>
        {videos.map((video) => (
          <VideoCard key={video.id}>
            <h3>{video.title}</h3>
            <YouTube videoId={video.videoId} opts={opts} />
          </VideoCard>
        ))}
      </VideoContainer>
    </SectionContainer>
  );
};

export default MostViewedVideos;
