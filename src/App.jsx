import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Generate from "./components/Generate";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
