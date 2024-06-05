import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import heroLarge from "../assets/hero_lg.png";

const Home = () => {
  return (
    <div className=" pt-24">
      <div className="px-7">
        <h1 className="text-white text-4xl font-bold line pr-28 sm:text-5xl">
          Find Your Perfect Movie Mood
        </h1>
        <p className="text-gray-300 font-medium pr-16 mt-4 sm:text-xl sm:pr-44">
          Discover the best movies to match your current mood
        </p>
        <Link
          to="/generate"
          className="text-white border-2 py-2 px-8 rounded-xl mt-7 inline-block sm:text-lg"
        >
          Explore <span className="md:hidden">Now</span>
        </Link>
      </div>
      <div className="h-96 overflow-hidden   md:h-4/5 border border-white ">
        <img src={heroImage} alt="movie-posters" className=" block md:hidden" />
        <img
          src={heroLarge}
          alt="movie-posters"
          className="hidden md:block object-cover w-full  "
        />
      </div>
    </div>
  );
};

export default Home;
