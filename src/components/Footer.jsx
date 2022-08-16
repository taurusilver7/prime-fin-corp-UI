import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className="flex flex-col items-center justify-center py-6 sm:py-16">
      <div className="flex items-start justify-center md:flex-row flex-col mb-8 w-full">
        <div className="flex flex-1 flex-col justify-start mr-10">
          {/* <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain" 
          />
            */}
          <h1 className="text-white font-poppins text-[36px]">
            Prim<span className="text-secondary">e Fin-Co</span>rp
          </h1>
          <p className="mt-4 max-w-[310px] font-poppins font-normal text-dimWhite text-[18px] leading-[30px]">
            A new way to make payments easy, reliable and secure.
          </p>
        </div>

        {/* links*/}
        <div className="flex-[1.5] w-full flex-wrap mt-10 md:mt-0 flex flex-row justify-between">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={index}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer hover:text-secondary ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins">2022&copy; All rights reserved.</p>

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
