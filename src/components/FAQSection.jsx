import React from "react";
import { FAQ } from "../assets";
import Section from "./Section";
import Button from "./Button";

const FAQSection = () => {
  const faqItems = [
    {
      number: "01.",
      question: "How d I stay updated on new content and events?",
      answer:
        "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
    {
      number: "02.",
      question: "How can I contact customer cyber punk support?",
      answer:
        "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
    {
      number: "03.",
      question: "Can I purchase cyberpunk-themed merchandise?",
      answer:
        "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
    {
      number: "04.",
      question:
        "Are there any rules or guidelines for participating in the community?",
      answer:
        "A realm where advanced technology meets dystopian reality. Our website is your gateway....",
    },
  ];

  return (
    <Section
      className="bg-[#0E0C15] "
      crosses
      crossesOffset="lg:translate-y-[0]"
      customPaddings
      id="hero"
    >
      <div className="min-h-screen  text-cyan-400 font-mono">
        <section className="container mx-auto py-8">
          <div className="relative flex flex-wrap md:flex-nowrap items-center sm:justify-between justify-center gap-3  px-4 md:px-0">
            <div className=" ml-8 md:ml-0 w-full h-full md:w-auto  md:h-[300px] lg:h-[440px] xl:h-[480px] mt-5">
              <div className="relative h-full rounded-md w-full md:w-[340px] lg:w-[400px] xl:w-[430px] mx-auto">
                <img
                  src={FAQ}
                  alt="Neon Dreams"
                  className="h-full w-full object-right-top object-cover rounded-md"
                />
              </div>
            </div>

            <div className=" lg:max-w-[500px] md:max-w-[350px] w-full relative mt-4 md:mt-0">
              <h1 className="text-center md:text-start text-3xl lg:text-4xl font-bold text-white font-family">
                Your{" "}
                <span className="bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
                  Portal to a <br className="hidden md:block" />
                  Gritty
                </span>{" "}
                Tech-Driven <br className="hidden md:block" /> Future.
              </h1>
              <p className="text-[14px] text-[#dddd] font-normal font-Montserrat mt-10 text-center md:text-start">
                A realm where advanced technology meets dystopian reality. Our
                website is your gateway to a universe of neon lights, gritty
                streets, and cybernetic enhancements.
              </p>
              <div className="md:inline-flex flex items-center justify-center md:items-start  gap-10 mt-10">
                <Button>Read More</Button>
                <div className=" h-10 text-center cursor-pointer justify-center flex w-32 p-[2px] bg-gradient-to-r from-[#F0B71F] to-[#E03609] text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:from-[#e0ac1c] hover:to-[#d63408]">
                  <div className="w-full h-full py-1 rounded-md bg-[#0E0C15] font-semibold">
                    <span>Learn More</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center md:text-start max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-4xl text-white lg:text-5xl font-bold text-center font-family leading-[60px]">
              Frequently Asked <br />
              <span className="bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text">
                Questions
              </span>
            </h1>
            <p className="mt-4 text-gray-400 text-base text-center md:text-lg">
              A realm where advanced technology meets dystopian reality. Our
              website is your gateway to a universe of neon lights, gritty
              streets, and cybernetic enhancements.
            </p>
          </div>

          <div className="  text-white px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
            {faqItems.map((faq, index) => (
              <div
                key={index}
                className=" border-gradient-to-r from-[#E03609] to-[#F0B71F] font-family"
              >
                <div className="flex items-start mt-10">
                  <span className="bg-gradient-to-r from-[#E03609] to-[#F0B71F] text-transparent bg-clip-text text-3xl font-semibold mr-4">
                    {faq.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 ">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 text-sm max-w-sm leading-relaxed font-Montserrat">
                      {faq.answer}
                    </p>
                    <div className=" mt-4 w-full h-[1px] bg-gradient-to-r from-[#E03609] to-[#F0B71F] " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Section>
  );
};

export default FAQSection;
