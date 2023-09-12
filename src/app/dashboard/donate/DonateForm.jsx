"use client";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "@/hooks/useAxios";

const DonateForm = () => {
  //route
  const basicRoute = useAxios();
  //form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      {/* title part  */}
      <Toaster></Toaster>

      {/* form start */}
      <div className="mb-10 w-[300px] md:w-[500px] mx-auto">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* title */}

          {/* danated  */}

          <div className=" form-control w-full my-6  rounded-xl border border-[#999999] p-1">
            <input
              type="number"
              placeholder="Enter Your Amount"
              className="input rounded-none w-full p-2 "
              {...register("doanted", { required: true })}
            />
          </div>
          {errors.doanted?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}

          <div className=" form-control w-full my-4  rounded-xl border border-[#999999] p-1">
            <textarea
              placeholder="Why do you want to donate?"
              className="input rounded-none w-full p-2"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          {errors.message?.type === "required" && (
            <p className=" text-red-800 text-center py-1">
              This feild cann't be empty
            </p>
          )}
          <button
            type="submit"
            className=" w-full my-4 py-3 rounded-lg px-3 font-bold bg-[#963682] text-white flex justify-center items-center"
          >
            Donate Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonateForm;
