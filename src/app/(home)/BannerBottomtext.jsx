import React from "react";
import styles from "./bannerbottom.module.css";
import Img from "@/assets/banner/banner-bottom.png";
import Image from "next/image";

const BannerBottomtext = () => {
  return (
    <section className={`${styles.custom_clip_path}  hidden lg:block`}>
      <div className="h-36 items-center  mb-5 flex text-white  justify-around">
        <p className=" pl-8 text-justify">
          At Re-zanCharity, we're dedicated to creating a brighter world by{" "}
          empowering <br></br> hope, fostering kindness, and inspiring positive
          change in communities.
        </p>

        <div className=" h-[120px]  w-[4px] bg-white py-4 relative"></div>
        <Image
          src={Img}
          alt="Charity"
          width={70}
          className=" bg-white rounded-full absolute ml-12 p-1"
        ></Image>

        <p className=" px-10 text-justify">
          Join our compassionate mission today and help us make a lasting{" "}
          <br></br> impact through acts of love and generosity worldwide.
        </p>
      </div>
    </section>
  );
};

export default BannerBottomtext;
