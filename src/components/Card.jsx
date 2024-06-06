import React from "react";
import angry from "../assets/angry.png";
import happy from "../assets/happy.png";
import sad from "../assets/sad.png";
import amazing from "../assets/amazing.png";

const Card = ({ handleMood }) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-2 md:gap-10 md:px-20 lg:px-30 xl:px-64 ">
      <div
        className="flex flex-col items-center justify-center p-5 rounded-2xl bg-orange-888 w-full min-h-52 cursor-pointer"
        onClick={() => handleMood("angry")}
      >
        <h3 className="text-xl md:text-2xl font-bold text-orange-999">Angry</h3>
        <img src={angry} alt="angry" className="w-36 mt-4" />
      </div>
      <div
        className="flex flex-col items-center justify-center p-5 rounded-2xl bg-blue-888 w-full min-h-52 cursor-pointer"
        onClick={() => handleMood("happy")}
      >
        <h3 className="text-xl  md:text-2xl  font-bold text-blue-999">Happy</h3>
        <img src={happy} alt="happy" className="w-36 mt-4" />
      </div>
      <div
        className="flex flex-col items-center justify-center p-5  rounded-2xl bg-green-888 w-full min-h-52 cursor-pointer"
        onClick={() => handleMood("sad")}
      >
        <h3 className="text-xl md:text-2xl  font-bold text-green-999">Sad</h3>
        <img src={sad} alt="sad" className="w-36 mt-4" />
      </div>
      <div
        className="flex flex-col items-center justify-center  p-5 rounded-2xl bg-pink-888 w-full min-h-52 cursor-pointer"
        onClick={() => handleMood("amazing")}
      >
        <h3 className="text-xl md:text-2xl  font-bold text-pink-999">
          Amazing
        </h3>
        <img src={amazing} alt="amazing" className="w-36 mt-4" />
      </div>
    </div>
  );
};

export default Card;
