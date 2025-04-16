import React from "react";
import Section from "./Section";
import { features } from "../constants";

const Services = () => {
  return (
    <Section
      className="bg-[#0E0C15]  "
      crosses
      crossesOffset="lg:translate-y-[0]"
      customPaddings
      id="hero"
    >
      <div className="bg-black text-white font-sans py-16 px-4">
        <div className="text-center md:text-start max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-family leading-[60px]">
            Dive into the Cybernetic <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
              Universe
            </span>
          </h1>
          <p className="mt-10 text-gray-400 text-base md:text-lg">
            A realm where advanced technology meets dystopian reality. Our
            website is your gateway to a universe of neon lights, gritty
            streets, and cybernetic enhancements.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-[#0E0C15] border border-gray-800 flex items-center justify-center hover:border-orange-500 rounded-xl p-6 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 text-center md:text-left">
                <div className="h-[48px] w-[48px] bg-gradient-to-r from-[#E03609] to-[#F0B71F] rounded-md flex items-center justify-center mb-4 md:mb-0">
                  <div className="h-[44px] w-[44px] bg-[#0E0C15] rounded-md p-2.5 flex items-center justify-center">
                    <img src={feature.icon} alt="" className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{feature.title}</h2>
                  <p className="text-gray-400 text-sm mt-1">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
