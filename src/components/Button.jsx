import React from "react";

const Button = ({ className, children }) => {
  return (
    <div>
      <button
        className={`${className} group relative  cursor-pointer items-center ml-auto lg:inline-flex justify-between gap-3 bg-gradient-to-r from-[#F0B71F] to-[#E03609] px-4 py-2 text-white rounded-lg transition-all duration-200 hover:shadow-lg hover:from-[#e0ac1c] hover:to-[#d63408] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      >
        <span className="text-base font-medium font-sans">{children}</span>
        {/* <span className="transition-transform duration-200 group-hover:translate-x-1 text-lg">
          →
        </span> */}
      </button>
    </div>
  );
};

export default Button;
