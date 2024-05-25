import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-center px-4 py-3 md:justify-between">
        <h2 className="text-white font-bold text-2xl text-center ">
          Movie
          <span className="bg-gradient-to-br from-purple-500 via-pink-500 to-pink-700 inline-block text-transparent bg-clip-text">
            Mood
          </span>
        </h2>

        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-white font-medium">
            Home
          </Link>
          <Link to="/about" className="text-white font-medium">
            About
          </Link>
          <Link
            to="/explore"
            className="text-white font-medium bg-gradient-to-br from-purple-500  to-pink-700 py-2 px-5 rounded-lg"
          >
            Explore
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
