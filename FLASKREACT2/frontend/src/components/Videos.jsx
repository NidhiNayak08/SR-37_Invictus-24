import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos) {
    return null; // Return null or handle appropriately if videos is null
  }
  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={3}
    >
      {videos.map((item, index) => (
        <Box key={index}>{item.id.videoId && <VideoCard video={item} />}</Box>
      ))}
    </Stack>
  );
};

export default Videos;
