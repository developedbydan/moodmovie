import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-center px-7 py-9 md:justify-between">
        <Link to={"/"} className="text-white font-bold text-2xl text-center ">
          Movie
          <span className="bg-gradient-to-br from-purple-500 via-pink-500 to-pink-700 inline-block text-transparent bg-clip-text">
            Mood
          </span>
        </Link>

        <div className="hidden md:flex space-x-10 items-center">
          <Link to="/" className="text-white font-medium">
            Home
          </Link>

          <Link
            to="/generate"
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
