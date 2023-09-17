"use client";
import React from "react";
import { Toaster, toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import useAxios from "@/hooks/useAxios";
import useAuth from "@/hooks/useAuth";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const DonateForm = () => {
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_payment_key);

  return (
    <section>
      {/* title part  */}
      <Toaster></Toaster>

      {/* form start */}
      <div className="mb-10 w-[300px] md:w-[500px] mx-auto">
        <Elements stripe={stripePromise}>
          <CheckOutFrom></CheckOutFrom>
        </Elements>
      </div>
    </section>
  );
};

export default DonateForm;
