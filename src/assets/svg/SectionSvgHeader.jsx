import PlusSvg from "./PlusSvg";
import PlusSvgRight from "./PlusSvgRight";

const SectionSvg = ({ crossesOffset, className }) => {
  return (
    <>
      <PlusSvg
        className={` ${className} hidden absolute z-50 top-[69px] left-[0.8500rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[2.500rem]`}
      />

      <PlusSvgRight
        className={` ${className} hidden absolute z-50 top-[69px] right-[0.8500rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[2.500rem]`}
      />
    </>
  );
};

export default SectionSvg;
