import { cyber, Ecllipse, Futures } from "../assets";
import Section from "./Section";
import Button from "./Button";

const Hero = () => {
  return (
    <Section
      className="lg:pt-[6rem] -mt-[5.25rem] pt-40  bg-[#0E0C15] h-[1045px] px-5 scroll-auto"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className=" mx-auto text-center flex-col items-center justify-center ">
        <h1 className=" text-white xl:text-[150px] lg:text-[125px] md:text-[105px] sm:text-[90px] text-[55px] lg:tracking-widest font-family font-bold text-center ">
          Cyber Punk
        </h1>
        <div className=" relative flex items-center justify-center ">
          <div className=" absolute lg:-top-36 md:-top-28 sm:-top-24 -top-16 ">
            <div class=" relative w-full aspect-square max-w-[600px] mx-auto items-center ">
              <img
                src={cyber}
                alt="cyber"
                className="z-10 object-center object-cover h-full w-full"
              />
              <div className=" absolute bottom-0 bg-gradient-to-b from-[#0e0c1500] to-[#0E0C15] w-full z-[2] h-[200px]" />
              <div className="z-[3] absolute bottom-28 lg:left-20 md:left-10 hidden md:block">
                <div className="relative">
                  <img
                    src={Ecllipse}
                    alt=""
                    className="lg:h-16 lg:w-16 h-12 w-12 pointer-events-none"
                  />
                  <span className="absolute inset-0 h-[160px] w-[1px] -top-32 lg:left-8 md:left-6 bg-gradient-to-b from-[#E03609] to-[#F0B71F]" />
                  <span className="absolute inset-0 h-[1px] lg:w-[100px] w-[72px] -top-32 lg:-left-[68px] md:-left-[47px]  bg-gradient-to-r from-[#F0B71F] to-[#E03609]" />
                  <div className="absolute inset-0 w-fit -top-[140px] lg:-left-60 md:-left-40">
                    <h2 className="text-white text-start text-[16px] font-Montserrat font-semibold items-center flex gap-3">
                      <div className="h-[5px] w-[5px] rounded-full bg-white" />
                      Stories & Lore
                    </h2>
                    <p className="text-[#DDDDDD] text-start text-[11px] font-semibold ">
                      Dive into compelling narratives <br /> set in a dystopian
                      future
                    </p>
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="absolute z-[3] -right-[100px] md:-right-[110px] lg:-right-[190px] xl:-right-[63%] top-40 md:block hidden text-end">
                <h2 className=" text-[#FEFFFF] md:text-[28px] xl:text-[36px] text-[24px]  text-end font-medium font-Montserrat ">
                  Events and <br />
                  <span className="font-semibold">Updates</span>{" "}
                </h2>
                <p className=" text-[#dddd] md:text-[14px] md:max-w-[200px] w-[250px] mt-9">
                  Explore the high-tech, low-life world where the lines between
                  humanity and machinery blur.
                </p>

                <Button className="mt-10">Read More</Button>
              </div>
            </div>
          </div>
          <div className="absolute md:top-[370px] sm:top-[300px] top-[290px] px-4">
            <div className=" z-[4] relative flex flex-wrap sm:justify-between justify-center gap-5 items-end md:gap-14 xl:gap-52 lg:gap-24 ">
              <div className="md:w-[405px] h-[182px] w-[350px]  rounded-md bg-gradient-to-r from-[#E03609] to-[#F0B71F] flex items-center justify-center mb-7 md:mb-0">
                <div className="md:w-[402px] h-[180px] w-[348px] rounded-md bg-[#0E0C15]">
                  <div className="flex items-center justify-center gap-3">
                    <div className=" h-[160px] w-[180px] rounded-md bg-amber-100 m-3">
                      <img
                        src={Futures}
                        alt=""
                        className=" h-full w-full overflow-hidden rounded-md object-center object-cover"
                      />
                    </div>
                    <div className="text-start">
                      <h1 className=" text-start text-3xl font-bold font-Montserrat inline-block bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
                        76,285K+
                      </h1>
                      <h2 className="text-white text-start font-Montserrat font-semibold text-[20px] mt-3">
                        Experience the Future
                      </h2>
                      <p className="text-[#dddd] text-[14px] font-normal mt-3 text-start">
                        Explore the high-tech, low-life world where the lines
                        between
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <h1 className="text-2xl text-white font-normal font-Montserrat text-start">
                  Art and{" "}
                  <span className="font-semibold ">
                    {" "}
                    <br /> Design
                  </span>{" "}
                </h1>
                <p className="text-[#dddd] max-w-[200px] text-start mt-3 sm:mb-0 mb-5">
                  Feast your eyes on stunning visuals and concept art that bring
                  the cyberpunk
                </p>
              </div>
              <div className="h-[120px] w-[125px] bg-gradient-to-r rounded-md from-[#E03609] to-[#F0B71F] flex items-center bott justify-center sm:mb-0 mb-5 ">
                <div className="h-[118px] w-[123px] rounded-md bg-[#0E0C15] text-start p-3">
                  <h1 className="text-start text-4xl font-bold font-Montserrat inline-block  bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
                    17+
                  </h1>
                  <p className="text-white text-start font-Montserrat font-semibold text-[16px] mt-2">
                    Years of <br /> Experiences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
