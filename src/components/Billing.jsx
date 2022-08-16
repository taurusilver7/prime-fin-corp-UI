import React from "react";
import { apple, google, bill } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className="flex flex-col-reverse md:flex-row py-6 sm:py-16"
    >
      <div className="flex flex-1 items-center justify-center mr-0 md:mr-10 mt-0 md:mt-10 relative">
        <img src={bill} alt="bill" className="w-full relative z-[5]" />

        {/* image gradients */}
        <div className="absolute z-[3] -left-1/2 top-0 white__gradient w-1/2 h-1/2 rounded-full" />
        <div className="absolute z-[0] -left-1/2 bottom-0 pink__gradient w-1/2 h-1/2 rounded-full" />
      </div>

      {/* billing content */}
      <div className="flex flex-col flex-1 justify-center items-start">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full">
          Easily control your <br className="hidden sm:block" />
          billing & invoicing.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px] max-w-[470px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad hic est
          quasi at placeat, laudantium sed explicabo! Error odit velit possimus
          harum, sequi, dignissimos rem a maiores accusamus, laudantium ut.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple_store"
            className="mr-5 cursor-pointer object-contain"
          />
          <img
            src={google}
            alt="apple_store"
            className="cursor-pointer object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
