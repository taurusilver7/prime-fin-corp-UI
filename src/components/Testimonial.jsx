import React from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonial = () => {
  return (
    <section
      id="clients"
      className="py-6 sm:py-1 flex items-center justify-center flex-col relative"
    >
      {/* Todo */}
      <div className='w-[60%] h-[60%] absolute z-[0] -right-[50%] rounded-full blue__gradient' />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full">
          What people are <br className="sm:block hidden" />
          saying about us?
        </h1>

        <div className="w-full md:mt-0 mt-6">
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30px] text-left max-w-[450px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
