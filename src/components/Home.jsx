import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

const Home = () => {
  return (
    <div className=" pt-24">
      <div className="px-7">
        <h1 className="text-white text-4xl font-bold line pr-28 ">
          Find Your Perfect Movie Mood
        </h1>
        <p className="text-gray-300 font-medium pr-16 mt-4">
          Discover the best movies to match your current mood
        </p>
        <Link
          to="/finder"
          className="text-white border-2 py-2 px-8 rounded-xl mt-7 inline-block"
        >
          Explore <span className="md:hidden">Now</span>
        </Link>
      </div>
      <div className="max-h-96 overflow-hidden absolute bottom-0">
        <img src={heroImage} alt="movie-posters" />
      </div>
    </div>
  );
};

export default Home;
