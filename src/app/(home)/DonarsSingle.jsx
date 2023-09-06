import React from "react";
import { pacifico, zila } from "@/utils/fonts";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
const DonarsSingle = ({ items }) => {
  const { name, age, image, donation_amount, small_info } = items;
  return (
    <div>
      {" "}
      <div className=" text-white mb-5 space-y-2  flex justify-end gap-4">
        <div className="flex items-center">
          <div>
            {" "}
            <h2 className={`${pacifico.className} text-sm md:text-2xl `}>
              Name: {name}
            </h2>
            <p className={`${pacifico.zila}  hidden lg:block text-md`}>
              {small_info}
            </p>
            <p className={`${pacifico.zila}  md:text-md`}>
              Donated : $ {donation_amount}
            </p>
            <p className={`${pacifico.zila}  text-md`}>Age: {age}</p>
          </div>
        </div>
        <Image alt="Donars" src={image} width={90} height={50}></Image>
      </div>
      <hr className=" bg-white my-4" />
    </div>
  );
};

export default DonarsSingle;
