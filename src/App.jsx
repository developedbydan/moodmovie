import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Generate from "./components/Generate";
import Nav from "./components/Nav";
import Movie from "./components/Movie";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
