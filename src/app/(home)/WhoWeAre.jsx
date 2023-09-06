import React from "react";
import { pacifico, zila } from "@/utils/fonts";
import imgData from "@/assets/whoweare.jpg";
import Image from "next/image";
import { Donatebutton, Volanterbutton } from "@/components/Buttons";

const WhoWeAre = () => {
  return (
    <section className="my_container grid grid-cols-1 md:grid-cols-2 ">
      {/* section heading part */}
      <div className="flex items-center pl-3 lg:pl-0">
        <div className="space-y-4">
          <h2 className={`${pacifico.className}  text-5xl text-[#aa3b4c] `}>
            Who We Are
          </h2>
          <p
            className={`${zila.className}  text-xl  text-[#5c5b5c] md:w-[300px] lg:w-[500px]  `}
          >
            We are a dedicated team at Re-zanCharity, driven by compassion,
            working tirelessly to create positive change and support those in
            need."
          </p>
          <div className="flex justify-center md:justify-start ">
            <Donatebutton></Donatebutton>
            <div className="ml-5">
              <Volanterbutton></Volanterbutton>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={imgData}
        alt="charity people"
        className=" object-cover hover:rounded-2xl mt-5 md:mt-0"
      ></Image>
    </section>
  );
};

export default WhoWeAre;
