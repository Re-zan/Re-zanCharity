import React from "react";
import { pacifico, zila } from "@/utils/fonts";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
const VolunterSingleData = ({ items }) => {
  const { name, age, image, phone_number } = items;
  return (
    <>
      <div className=" relative text-center  p-4  shadow-lg mt-5 md:mt-0 z-0 ">
        <Image src={image} alt="Our Team " width={500} height={500}></Image>
        <div className=" space-y-2 p-3 bg-[#fdfdfd] w-[220px] mx-auto  z-30 absolute -bottom-10  left-9 md:left-16 lg:left-9 hover_transtion_effect ">
          <h3 className={`${pacifico.className} text-2xl text-[#7c276b]`}>
            {name}
          </h3>
          <p className={`${pacifico.zila}  text-[#616061]  text-sm`}>
            Age: {age} years old{" "}
          </p>
          <p
            className={`${pacifico.zila}  text-[#616061]  text-sm flex items-center justify-center gap-2 pb-3`}
          >
            <FaPhoneAlt />

            {phone_number}
          </p>
        </div>
      </div>
    </>
  );
};

export default VolunterSingleData;
