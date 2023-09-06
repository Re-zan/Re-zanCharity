"use client";
import React from "react";
import { pacifico, zila } from "@/utils/fonts";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurSingleEvents = ({ items }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const { name, small_description, date, venue } = items;
  return (
    <div className="text-white mb-5 space-y-2">
      <h2
        className={`${pacifico.className} text-sm md:text-2xl `}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        {name}
      </h2>
      <p
        className={`${pacifico.zila}  hidden md:block  text-md`}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      >
        {small_description}
      </p>
      <div
        className="md:flex gap-3 text-xs md:text-lg "
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="700"
      >
        <span className="flex items-center gap-2">
          <FaCalendarAlt></FaCalendarAlt> {date}
        </span>{" "}
        <span className="flex items-center gap-2">
          <span>
            <FaLocationArrow></FaLocationArrow>
          </span>{" "}
          {venue}
        </span>
      </div>
      <hr
        className=" bg-white mt-1"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="800"
      />
    </div>
  );
};

export default OurSingleEvents;
