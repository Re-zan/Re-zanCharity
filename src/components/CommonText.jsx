import React from "react";
import { pacifico, zila } from "@/utils/fonts";

const CommonText = ({ title, description, postion }) => {
  return (
    <div className={`text-${postion} space-y-4`}>
      <h2 className={`${pacifico.className}  text-5xl text-[#aa3b4c] p-2`}>
        {title}
      </h2>
      <p
        className={`${zila.className}  text-xl  text-[#5c5b5c] md:w-[500px] lg:w-[800px] mx-auto p-2`}
      >
        {description}
      </p>
    </div>
  );
};

export default CommonText;
