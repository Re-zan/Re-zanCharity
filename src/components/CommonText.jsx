import React from "react";
import { pacifico, zila } from "@/utils/fonts";

const CommonText = () => {
  return (
    <div>
      <h2 className={`${pacifico.className}  text-5xl text-[#aa3b4c]`}>
        {" "}
        Our Upcoming Events
      </h2>
      <p className={`${zila.className}  text-2xl  text-black `}>
        Re-zanCharity is a compassionate and impactful charity website dedicated
        to making the world a better place. Through our diverse charitable
        initiatives and global community, we strive to uplift disadvantaged
        lives, foster positive change, and inspire hope. Join us in our mission
        to create a brighter, more compassionate future for all.
      </p>
    </div>
  );
};

export default CommonText;
