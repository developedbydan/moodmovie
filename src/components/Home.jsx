import React from "react";
import heroImage from "../assets/hero.png";

const Home = () => {
  return (
    <div className=" pt-28">
      <div className="px-7">
        <h1 className="text-white text-4xl font-bold line pr-28 ">
          Find Your Perfect Movie Mood
        </h1>
        <p className="text-gray-300 font-medium pr-16 mt-4">
          Discover the best movies to match your current mood
        </p>
        <button className="text-white border-2 py-2 px-8 rounded-xl mt-7">
          Explore <span className="md:hidden">Now</span>
        </button>
      </div>
      <div className="max-h-96 overflow-hidden absolute bottom-0">
        <img src={heroImage} alt="movie-posters" />
      </div>
    </div>
  );
};

export default Home;
