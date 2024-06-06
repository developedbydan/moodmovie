import React from "react";
import { Link } from "react-router-dom";
import heroSM from "../assets/hero_sm.png";
import heroMD from "../assets/hero_md.png";
import heroLG from "../assets/hero_lg.png";
import heroXL from "../assets/hero_xl.png";

// heroSM 320px x 180px
// heroMD 768px x 406px
// heroLG 1024px x 538px
// heroXL 1200px x 625px

const Home = () => {
  return (
    <div className=" pt-24  flex flex-col justify-between min-h-screen-custom max-h-screen-custom overflow-y-hidden">
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
      <div className="h-[370px] lg:h-[500px] overflow-hidden">
        <img
          srcSet={`${heroSM} 320w, ${heroMD} 768w, ${heroLG} 1024w, ${heroXL} 1200w`}
          sizes="(max-width: 320px) 320px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1200px"
          src={heroMD}
          alt="movie-posters"
          className="object-cover h-full w-full sm:h-full md:h-auto lg:h-auto"
        />
      </div>
    </div>
  );
};

export default Home;
