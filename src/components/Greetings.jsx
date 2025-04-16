import React from "react";
import Section from "./Section";
import { Cybernetic } from "../constants";

const Greetings = () => {
  return (
    <Section
      className="bg-[#0E0C15]"
      crosses
      crossesOffset="lg:translate-y-[0]"
      customPaddings
      id="hero"
    >
      <div className="bg-[url('/public/1000028896.webp')]  bg-cover bg-center h-screen  ">
        <div className=" h-full flex  backdrop-opacity-5 bg-[#000000c0] items-center justify-center ">
          <div className=" container mx-auto px-4 md:px-8 py-12 md:py-24 relative z-10">
            <div className="flex flex-col items-center justify-center md:flex-row gap-8 md:gap-12 lg:gap-24">
              <div className="md:w-1/1 space-y-6 lg:space-y-8 ">
                <h3 className="text-center md:text-start text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold le text-white font-family leading-[55px] md:leading-[65px] xl:leading-[90px]">
                  Greetings! Dive <br className="hidden md:block" /> into the
                  Cybernetic <br className="hidden md:block" /> Universe
                </h3>
                <p className="text-[#dddd] font-medium text-[18px] font-Montserrat">
                  Our website is your gateway to a universe of neon lights,
                  gritty streets, and cybernetic enhancements. Explore the
                  high-tech, low-life world where the lines between humanity and
                  machinery blur.
                </p>
              </div>
              <div className="md:w-1/2 ">
                <div className="flex items-center justify-center border border-amber-500 rounded-2xl">
                  <div className=" bg-white/5 backdrop-blur-sm rounded-2xl p-6 w-full space-y-4 text-white shadow-lg">
                    {Cybernetic.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer"
                      >
                        <div className="flex items-center gap-6">
                          <span
                            className={`w-3 h-3 rounded ${item.color}`}
                          ></span>

                          <span className="font-medium text-sm">
                            {item.label}
                          </span>
                        </div>

                        <span className="text-lg">→</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Greetings;
