"use client";
import Banner from "@/components/CommonBanner/Banner";
import bannerImage from "@/assets/banner/volunteer.jpg";
import React from "react";
import CommonText from "@/components/CommonText";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { useForm } from "react-hook-form";

//page title
export const metadata = {
  title: "Re-zanCharity | Events",
};

const VolunteerPage = () => {
  //animation
  useEffect(() => {
    AOS.init();
  }, []);

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <main>
      {/* banner part  */}
      <Banner
        title="Join Our Team: Volunteer Opportunities"
        des="Become a part of our mission by volunteering with Re-zanCharity. Explore rewarding opportunities that empower you to make a positive impact. Join us in creating change today!"
        bannerImage={bannerImage}
      ></Banner>

      {/* volunterr part  */}
      <section className=" my-20">
        {/* title part  */}
        <CommonText
          title="Becoming a Volunteer"
          description=" Explore opportunities to make a difference. Join Re-zanCharity as a volunteer and be part of positive change today!"
          postion="center"
        ></CommonText>

        {/* form start */}
        <div className="my-10 w-[300px] md:w-[500px] mx-auto">
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
              <input
                type="text"
                placeholder="Enter Your name"
                className="input rounded-none w-full p-4"
                {...register("name", { required: true })}
              />
            </div>
            {errors.name?.type === "required" && (
              <p className=" text-red-800 text-center py-1">
                This feild cann't be empty
              </p>
            )}

            {/* photo */}

            <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
              <input
                type="text"
                placeholder="Enter Your photo url"
                className="input rounded-none w-full p-4"
                {...register("photo", { required: true })}
              />
            </div>

            {errors.photo?.type === "required" && (
              <p className=" text-red-800 text-center py-1">
                This feild cann't be empty
              </p>
            )}

            {/* email  */}

            <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
              <input
                type="email"
                placeholder="Enter Your email"
                className="input rounded-none w-full p-4 "
                {...register("email", { required: true })}
              />
            </div>
            {errors.email?.type === "required" && (
              <p className=" text-red-800 text-center py-1">
                This feild cann't be empty
              </p>
            )}

            {/* age  */}

            <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
              <input
                type="number"
                placeholder="Enter Your age"
                className="input rounded-none w-full p-4 "
                {...register("age", { required: true })}
              />
            </div>
            {errors.age?.type === "required" && (
              <p className=" text-red-800 text-center py-1">
                This feild cann't be empty
              </p>
            )}

            {/* phone number  */}

            <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
              <input
                type="tel"
                placeholder="Enter Your phone number"
                className="input rounded-none w-full p-4 focus:border-0"
                {...register("number", {
                  required: true,

                  pattern:
                    /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                })}
              />
            </div>
            {errors.number?.type === "required" && (
              <p className=" text-red-800 text-center py-1">
                This feild cann't be empty
              </p>
            )}

            {errors.number?.type === "pattern" && (
              <p className=" text-red-800 text-center py-3">
                Phone Number must be validated
              </p>
            )}

            <div className=" form-control w-full my-8  rounded-xl border border-[#999999] p-1">
              <textarea
                className="input rounded-none w-full p-4"
                {...register("message", { required: true })}
              ></textarea>
            </div>
            {errors.name?.type === "required" && (
              <p className=" text-red-800 text-center py-1">
                This feild cann't be empty
              </p>
            )}
            <button
              type="submit"
              className=" w-full my-4 py-2 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
            >
              Make Volunteer
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default VolunteerPage;
