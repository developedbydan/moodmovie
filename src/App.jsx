import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Finder from "./components/Finder";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <div className="px-5 py-9 max-w-screen-lg">
        {" "}
        {/* Dodana klasa max-w-screen-lg */}
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Finder />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
