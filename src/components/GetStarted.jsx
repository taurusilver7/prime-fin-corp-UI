import React from "react";
import { arrowUp } from "../assets";

const GetStarted = () => {
  return (
    <div className="flex items-center justify-center w-[140px] rounded-full bg-blue-gradient h-[140px] p-[2px] cursor-pointer">
      <div className="flex items-center justify-center flex-col bg-primary w-[100%] h-[100%] rounded-full">
        <div className="items-start flex justify-center flex-row">
          <p className="font-poppins text-[18px] leading-[23px] font-medium mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrow"
            className="object-contain w-[23px] h-auto"
          />
        </div>

        <p className="font-poppins text-[18px] leading-[23px] font-medium">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
