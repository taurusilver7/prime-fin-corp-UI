import React from "react";
import { features } from "../constants";
import Button from "./Button";
// import FeatureCard from "./FeatureCard";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div className="w-[64px] h-[64px] rounded-full flex items-center justify-center bg-dimBlue">
        <img className="object-contain w-1/2" src={icon} alt="icon" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] mb-1 leading-[23px]">
          {title}
        </h4>
        <p className="font-poppins text-dimWhite text-[16px] mb-1 leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className="flex flex-col md:flex-row py-6 sm:py-16">
      <div className="flex flex-col items-start justify-center flex-1">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do business, <br className="sm:block hidden" /> We'll handle the
          money
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[478px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and save money. But with hundreds of
          credit cards in the market, it's hard to decide on one.
        </p>
        <Button styles="mt-10" />
      </div>

      {/* Features from static data */}
      <div className="flex flex-1 flex-col items-center justify-center mt-0 relative md:mt-10 ml-0 md:ml-10">
        {features.map((feat, index) => (
          <FeatureCard key={index} {...feat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
