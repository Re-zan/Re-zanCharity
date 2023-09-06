import React from "react";
import { pacifico, zila } from "@/utils/fonts";
import { FaCalendarAlt, FaLocationArrow } from "react-icons/fa";

const OurSingleEvents = ({ items }) => {
  const { name, small_description, date, venue } = items;
  return (
    <div className="text-white mb-5 space-y-2">
      <h2 className={`${pacifico.className} text-sm md:text-2xl `}>{name}</h2>
      <p className={`${pacifico.zila}  hidden md:block  text-md`}>
        {small_description}
      </p>
      <div className="md:flex gap-3 text-xs md:text-lg ">
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
      <hr className=" bg-white mt-1" />
    </div>
  );
};

export default OurSingleEvents;
