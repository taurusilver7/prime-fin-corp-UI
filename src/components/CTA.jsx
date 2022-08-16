import React from "react";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="flex items-center justify-center my-6 sm:my-16 px-6 sm:px-16 py-4 sm:py-12 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex-1 flex flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full">
          Try our service now
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px] max-w-[470px] mt-5">
          Everything you need to accept card payments and grow your business
          anywhere on the planet
        </p>
      </div>

      <div className="sm:mt-0 mt-10 sm:ml-10 ml-0">
        <Button styles="" />
      </div>
    </section>
  );
};

export default CTA;
