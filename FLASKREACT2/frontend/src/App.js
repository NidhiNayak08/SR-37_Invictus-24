import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import Dashboard from "./components/Dashboard";
import FeedbackForm from "./components/FeedbackForm";
import Resources from "./components/Resources";
import Risk from "./pages/Risk";

function App() {
  return (
    <div className="vh-100 gradient-custom">
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/risk" element={<Risk />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
