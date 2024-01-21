import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromaAPI } from "../utils/FetchFromAPI";
import Header from "./Header";

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState("Chemistry");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromaAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Box>
      {" "}
      <Header />
      <Stack
        sx={{ flexDirection: { sx: "column", md: "row" }, marginTop: "20px" }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Copyright 2023 JSM Media
          </Typography>
        </Box>
        <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "black" }}
          >
            {selectedCategory} <span style={{ color: "#F31503" }}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Box>
      </Stack>
    </Box>
  );
};

export default Resources;
