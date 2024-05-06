import React from "react";
import Header from "./pages/Header";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
