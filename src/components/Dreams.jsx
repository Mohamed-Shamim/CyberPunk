import React from "react";
import Section from "./Section";
import { dreams, Revolution, unders } from "../assets";

const Dreams = () => {
  return (
    <Section
      className=" md:-mt-[5.25rem] -mt-[10rem]  bg-[#0E0C15] lg:pt-0 pt-30 pb-20 "
      crosses
      crossesOffset="lg:translate-y-[0]"
      customPaddings
      id="hero"
    >
      <div className="relative flex flex-wrap md:flex-nowrap items-center sm:justify-between justify-center gap-3 container px-4 md:px-0">
        <div className="order-1 md:order-2 ml-8 md:ml-0 w-full h-full md:w-auto  md:h-[300px] lg:h-[440px] xl:h-[480px] mt-5">
          <div className="relative h-full w-full md:w-[340px] lg:w-[400px] xl:w-[430px] mx-auto">
            <img
              src={dreams}
              alt="Neon Dreams"
              className="h-full w-full object-right-top object-cover"
            />
            <div className="absolute bottom-0 right-0 left-0  bg-gradient-to-b from-[#0e0c1500] to-[#0E0C15] w-full z-[2] h-[150px]" />
          </div>
        </div>

        <div className="order-2 md:order-1 lg:max-w-[500px] md:max-w-[350px] w-full relative mt-4 md:mt-0">
          <h1 className="text-center md:text-start text-3xl lg:text-4xl font-bold text-white font-family">
            Where{" "}
            <span className="bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
              Neon Dreams <br className="hidden md:block" /> & Digital
            </span>{" "}
            Nightmares <br className="hidden md:block" /> Converge.
          </h1>
          <p className="text-[14px] text-[#dddd] font-normal font-Montserrat mt-6 text-center md:text-start">
            A realm where advanced technology meets dystopian reality. Our
            website is your gateway to a universe of neon lights, gritty
            streets, and cybernetic enhancements. Explore the high-tech,
            low-life world where the lines between humanity and machinery blur.
          </p>
          <div className="flex  items-start md:items-center justify-between mt-6 gap-4 md:gap-0">
            <div className="text-center md:text-start">
              <h1 className="text-3xl mb-2 font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
                89,2K+
              </h1>
              <p className="text-[16px] text-white">Discover the Future</p>
            </div>
            <div className="text-center md:text-start">
              <h1 className="text-3xl mb-2 font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
                7001+
              </h1>
              <p className="text-[16px] text-white">Stories and Lore</p>
            </div>
            <div className="text-center md:text-start">
              <h1 className="text-3xl mb-2 font-semibold bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
                3,124+
              </h1>
              <p className="text-[16px] text-white">Art and Design</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-wrap items-center md:justify-between justify-center gap-3 container px-4 md:px-0 mt-10">
        <div className="w-full h-full md:w-[290px] md:h-auto lg:h-[440px] lg:w-auto xl:h-[470px] xl:w-auto mb-4">
          <div className="relative h-full w-full ">
            <img
              src={unders}
              alt="Neon Dreams"
              className="h-full w-full object-center object-cover"
            />
            <div className="absolute bottom-0 right-0 left-0  bg-gradient-to-b from-[#0e0c1500] to-[#0E0C15] w-full z-[2] h-[200px]" />
          </div>
        </div>

        <div className=" lg:max-w-[500px] md:max-w-[350px] w-full relative mt-20 md:mt-0">
          <h1 className="text-center md:text-start text-3xl lg:text-4xl font-bold text-white font-family">
            Unveil{" "}
            <span className="bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
              the Secrets <br className="hidden md:block" />
              of the
            </span>{" "}
            Cybernetic
            <br className="hidden md:block" />
            Underworld.
          </h1>
          <p className="text-[14px] text-[#dddd] font-normal font-Montserrat mt-6 text-center md:text-start">
            A realm where advanced technology meets dystopian reality. Our
            website is your gateway to a universe of neon lights, gritty
            streets, and cybernetic enhancements.
          </p>
          <div className="relative flex items-start mt-4">
            <div className=" w-full h-full flex items-center justify-center rounded-md p-[1px] bg-gradient-to-b from-[#E03609] to-[#F0B71F]">
              <div className="w-full bg-[#0E0C15] rounded-md ">
                <div className="flex items-center gap-4 justify-center">
                  <div className="py-2 px-4">
                    <img
                      src={Revolution}
                      alt=""
                      className="h-[150px] w-[270px] object-center object-cover rounded-md"
                    />
                  </div>
                  <div className="">
                    <h3 className="text-white text-start font-Montserrat font-semibold text-[20px] ">
                      Join the Revolution
                    </h3>
                    <p className=" text-start text-[14px] text-[#dddd] font-normal font-Montserrat mt-5">
                      Explore the high-tech, low-life world where the lines
                      between humanity and machinery blur.
                    </p>
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

export default Dreams;
