// Navbar.js
import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// Styled components
export const NavbarContainer = styled.div`
  background: #333;
  padding: 15px;
  color: white;
  display: flex;
  justify-content: space-between; /* Updated to justify-content */
  align-items: center;
  transition: box-shadow 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); // Apply box shadow by default

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); // Keep the same box shadow on hover
  }
`;

export const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 0 15px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700; // Change color on hover
  }
`;

export const LogoutButton = styled.button`
  background: transparent;
  color: white;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700; // Change color on hover
  }
`;

// Navbar component
const Navbar = () => {
  const navigate = useNavigate();
  // Handle logout logic (replace this with your actual logout logic)
  const handleLogout = () => {
    navigate("/");
    // Add your logout logic here
  };

  return (
    <NavbarContainer>
      <div>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/dashboard">Dashboard</NavbarLink>
        <NavbarLink href="/feedback">Feedback</NavbarLink>
        <NavbarLink href="/resources">Resources</NavbarLink>
      </div>
      <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
    </NavbarContainer>
  );
};

export default Navbar;
