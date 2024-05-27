import React from "react";
import angry from "../assets/angry.png";
import happy from "../assets/happy.png";
import sad from "../assets/sad.png";
import amazing from "../assets/amazing.png";

const Card = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-4 md:gap-10 ">
      <div className="flex flex-col items-center  p-5 rounded-2xl bg-orange-888 w-full h-52">
        <h3 className="text-xl font-bold text-orange-999">Angry</h3>
        <img src={angry} alt="angry" className="w-36 mt-4" />
      </div>
      <div className="flex flex-col items-center  p-5 rounded-2xl bg-blue-888 w-full h-52">
        <h3 className="text-xl font-bold text-blue-999">Happy</h3>
        <img src={happy} alt="happy" className="w-36 mt-4" />
      </div>
      <div className="flex flex-col items-center  p-5 rounded-2xl bg-green-888 w-full h-52">
        <h3 className="text-xl font-bold text-green-999">Sad</h3>
        <img src={sad} alt="sad" className="w-36 mt-4" />
      </div>
      <div className="flex flex-col items-center  p-5 rounded-2xl bg-pink-888 w-full h-52">
        <h3 className="text-xl font-bold text-pink-999">Amazing</h3>
        <img src={amazing} alt="amazing" className="w-36 mt-4" />
      </div>
    </div>
  );
};

export default Card;
