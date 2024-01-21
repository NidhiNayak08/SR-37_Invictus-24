import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import { WidthFull } from "@mui/icons-material";
// this file contains the array of all the categories

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    background="#fff"
    sx={{
      overflowY: "auto",
      height: "95vh",
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory ? "#FC1503" : "white",
          color: "black",
          height: "95vh",
          height: "20vh",
          borderRadius: "45px", // Adjust the value as per your preference
          // Adding a smooth transition for height change
          fontWeight: "bold",
          border: "none",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "black" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
