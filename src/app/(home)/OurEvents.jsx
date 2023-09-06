"use client";
import React from "react";
import OurSingleEvents from "./OurSingleEvents";
import { pacifico } from "@/utils/fonts";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurEvents = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const upcomingEvents = [
    {
      id: 1,
      name: "Charity Gala Night",
      small_description:
        "An elegant evening to raise funds for underprivileged children.",
      date: "2023-10-15",
      venue: "Grand Ballroom, XYZ Hotel",
    },
    {
      id: 2,
      name: "Community Fun Fair",
      small_description:
        "A day of fun and games for kids and families in need.",
      date: "2023-11-20",
      venue: "City Park",
    },
    {
      id: 3,
      name: "Medical Camp",
      small_description:
        "Free medical check-ups and vaccinations for children.",
      date: "2023-12-05",
      venue: "Local Community Center",
    },
  ];
  return (
    <section className="  my-24  relative ">
      <div
        className=" bg-[#dd445b] h-[450px] "
        style={{
          clipPath: "polygon(0% 3%, 54% 3%, 100% 100%, 0% 100%)",
        }}
      >
        <div className="my_container py-10 pl-2 lg:pl-0 text-white">
          {upcomingEvents.map((items) => (
            <OurSingleEvents items={items} key={items.id}></OurSingleEvents>
          ))}
        </div>
      </div>
      {/* section heading part */}
      <div className="  overflow-x-hidden">
        <div
          className="absolute text-center -mt-16 md:-mt-0 md:text-right top-0 right-0 lg:right-36 border-dashed  border-b-2 border-b-[#aa3b4c]"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <h2
            className={`${pacifico.className} text-2xl  md:text-3xl lg:text-5xl text-[#aa3b4c] p-2`}
          >
            Our Upcoming Events
          </h2>
        </div>
      </div>
    </section>
  );
};

export default OurEvents;
