"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import React from "react";
import bannerImage from "@/assets/banner/Charity_Hands_bg.jpg";
import styles from "@/components/CommonBanner/banner.module.css";
import { pacifico } from "@/utils/fonts";
import VolunterSingleData from "./VolunterSingleData";

const MeetOurVlouantre = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const volunteerTeam = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 30,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      phone_number: "+1234567890",
    },
    {
      id: 2,
      name: "David Wilson",
      age: 25,
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      phone_number: "+9876543210",
    },
    {
      id: 3,
      name: "Emily Davis",
      age: 28,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      phone_number: "+1112223333",
    },
    {
      id: 4,
      name: "Michael Brown",
      age: 32,
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
      phone_number: "+4445556666",
    },
  ];
  return (
    <section
      style={{
        backgroundImage: `url(${bannerImage.src})`,
      }}
      className={`${styles.banner} bg-cover bg-no-repeat h-[1120px] md:h-[1500px] lg:h-[750px] bg-center mt-20`}
    >
      <div className={`${styles.banner_content}  my_container  pt-16`}>
        <h2
          className={`${pacifico.className} text-2xl  md:text-3xl lg:text-5xl text-[#aa3b4c] p-2 border-dashed  border-b-2 border-b-[#aa3b4c]`}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          Meet Our Volunater Team
        </h2>
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-10 p-3 lg:p-0 my-12">
          {volunteerTeam.map((items) => (
            <VolunterSingleData
              items={items}
              key={items.id}
            ></VolunterSingleData>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurVlouantre;
