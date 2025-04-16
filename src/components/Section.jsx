import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      <div className="hidden absolute z-50 -top-1 left-5 w-0.25 h-full bg-gradient-to-b from-[#F0B71F] to-[#E03609] pointer-events-none md:block lg:left-7.5 xl:left-14" />
      <div className="hidden absolute z-50 -top-1 right-5 w-0.25 h-full bg-gradient-to-b from-[#E03609] to-[#F0B71F] pointer-events-none md:block lg:right-7.5 xl:right-14" />

      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-0 right-0 h-0.25 bg-gradient-to-r from-[#E03609] to-[#F0B71F] ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
