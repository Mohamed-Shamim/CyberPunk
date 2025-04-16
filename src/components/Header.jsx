import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { shadepro } from "../assets";
import SectionSvgHeader from "../assets/svg/SectionSvgHeader";
import Button from "./Button";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <>
      <div
        className={` fixed top-0 left-0 w-full z-40 border-b lg:bg-[#0E0C15] md:px-10 xl:px-20 px-0 lg:backdrop-blur-sm ${
          openNavigation ? "bg-[#0E0C15]" : "bg-black backdrop-blur-sm"
        }`}
      >
        <SectionSvgHeader />

        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
          <a className="block w-[12rem] xl:mr-8" href="#hero">
            <img src={shadepro} width={190} height={40} alt="shadepro" />
          </a>
          <nav
            className={`${
              openNavigation ? "flex" : "hidden"
            } fixed top-[4.70rem] left-0 right-0 bottom-0 bg-[#0E0C15] lg:static lg:flex lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col items-center justify-center text-white mx-auto lg:flex-row">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  onClick={handleClick}
                  className={`block relative font-code text-2xl font-semibold text-[#FFFFFF] transition-colors hover:text-[#9c80ff] ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semiboldx lg:leading-5 lg:hover:text-white xl:px-12`}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <button className="cursor-pointer">
              <HamburgerMenu />
            </button>
          </nav>
          <Button className={"lg:inline-flex hidden"}>Get started free</Button>
          <button
            className="ml-auto lg:hidden"
            px="px-3"
            onClick={toggleNavigation}
          >
            <MenuSvg openNavigation={openNavigation} />
          </button>
        </div>
        <div className=" absolute right-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#F0B71F] to-[#E03609]"></div>
      </div>
    </>
  );
};

export default Header;
