import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className="flex flex-col md:flex-row py-6 sm:py-16">
      <div className="flex flex-col flex-1 items-start justify-center">
        <h2 className="font-poppins font-semibold text-white xs:text-[48px] text-[40px] leading-[66px] xs:leading-[76px] max-w-[470px]">
          Find a better card deal <br /> in few easy steps
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px] my-5 max-w-[470px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          reiciendis sed eos maxime aspernatur modi tenetur dignissimos
          corrupti? Deleniti quod aspernatur nulla adipisci doloribus magnam
          aliquam recusandae vel pariatur sunt.
        </p>
        <Button />
      </div>
      <div className="flex-1 flex md:ml-10 ml-0 md:mt-0 mt-10 relative items-center justify-center">
        <img src={card} alt="card" />
      </div>
    </section>
  );
};

export default CardDeal;
