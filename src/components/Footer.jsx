import React from "react";
import { FaLinkedin, FaFacebookF, FaTwitter } from "react-icons/fa";
import Section from "./Section";

const Footer = () => {
  const informationLinks = ["Press Centre", "Our Blog", "Term and Condition"];
  const menuLinks = ["About", "Services", "Blog"];
  const contactInfo = [
    "Phone: +123 456 789",
    "Email: info@cyberai.example",
    "Neo-Tokyo, District 9",
  ];
  const footerBottomLinks = ["Terms", "Privacy", "Cookies"];
  const socialIcons = [
    { icon: <FaLinkedin className="text-lg" />, link: "#" },
    { icon: <FaFacebookF className="text-lg" />, link: "#" },
    { icon: <FaTwitter className="text-lg" />, link: "#" },
  ];

  return (
    <Section
      className="bg-[#0E0C15] -mb-20"
      crosses
      crossesOffset="lg:translate-y-[0]"
      customPaddings
      id="hero"
    >
      <footer className=" text-white px-6 py-10">
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-lg font-semibold ">
              Cyber.AI - Cyber Punk Website
            </h2>
            <p className="text-sm mt-2 text-gray-400">
              Explore the high-tech, low-life world where the lines between
              humanity
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Information</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              {informationLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Menu</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              {menuLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              {contactInfo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 lg:mx-8 pt-4 mt-8" />
        <div className=" container   flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© Cyber.AI - Cyber Punk 2024. All rights reserved.</p>

          <div className="flex space-x-4 mt-2 md:mt-0">
            {footerBottomLinks.map((item, index) => (
              <span key={index} className="hover:text-white cursor-pointer">
                {item}
              </span>
            ))}
          </div>

          <div className="flex space-x-4 mt-2 md:mt-0">
            {socialIcons.map((item, index) => (
              <a key={index} href={item.link} className="hover:text-white">
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </Section>
  );
};

export default Footer;
