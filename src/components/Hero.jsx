import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col py-6 sm:py-16`}>
      <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6 justify-center items-start">
        <div className="flex flex-row items-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] ml-2">
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white">1 Month</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
          Payment Method
        </h1>

        <p className="text-dimWhite text-[18px] leading-[30px] max-w-[470px] mt-5">
          Our tean of experts use a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* Right side_ robot arm */}
      <div className="flex flex-1 items-center justify-center md:my-0 my-10 relative">
        <img src={robot} alt="billing" className="w[100%] relative z-[5]" />

        {/* robot arm gradients */}
        <div className="absolute z-[0] top-0 pink__gradient w-[40%] h-[35%]" />
        <div className="absolute z-[1] rounded-full bottom-40 top-0 white__gradient w-[80%] h-[80%]" />
        <div className="absolute z-[0] rounded-full right-20 bottom-20 blue__gradient w-[50%] h-[50%]" />
      </div>
      <div className="ss:hidden flex items-center justify-center">
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
