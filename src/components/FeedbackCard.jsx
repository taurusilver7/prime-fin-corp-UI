import React from "react";
import { quotes } from "../assets";

const FeedbackCard = ({ content, title, img, name }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 my-5 feedback-card">
      <img
        src={quotes}
        alt="double_quotes"
        className="w-[42px]  object-contain"
      />

      <p className="font-poppins my-10 font-normal text-[18px] leading-[32px] text-white">
        {content}
      </p>

      <div className="flex">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] ">
            {name}
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
