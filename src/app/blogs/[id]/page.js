import { Donatebutton, Volanterbutton } from "@/components/Buttons";
import getSinlgeBlogData from "@/utils/getSinlgeBlogData";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaUserCircle } from "react-icons/fa";
import { pacifico } from "@/utils/fonts";

const SingleBlogPage = async ({ params }) => {
  const { title, short_title, description, image, date, published_by } =
    await getSinlgeBlogData(params.id);

  return (
    <section className="my-20 my_container">
      <Image
        src={image}
        width={1300}
        height={300}
        alt={title}
        className="mx-auto "
      ></Image>
      <div className="flex items-center justify-between py-3 text-[#5c5b5c]">
        <p>{short_title}</p>
        <span className="flex items-center gap-2">
          <FaCalendarAlt></FaCalendarAlt> {date}
        </span>
      </div>
      <div className=" space-y-5  shadow-xl p-6">
        <h3 className={`${pacifico.className}  text-5xl text-[#7c276b] `}>
          {title}
        </h3>
        <span className="flex items-center gap-2 text-[#5c5b5c]">
          <FaUserCircle></FaUserCircle> {published_by}
        </span>
        <p className=" text-justify text-[#5c5b5c]">{description}</p>
        <div className="flex justify-start  ">
          <Donatebutton></Donatebutton>
          <div className="ml-5">
            <Volanterbutton></Volanterbutton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPage;
