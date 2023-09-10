"use client";
import useEventsData from "@/hooks/useEventsData";
import React from "react";
import EventTable from "./EventTable";
import { Toaster } from "react-hot-toast";
import useAxios from "@/hooks/useAxios";
import MakeEventFrom from "./MakeEventFrom";

export const metadata = {
  title: " Dashboard | Events",
};
const EventPage = () => {
  const [eventsData, refetch] = useEventsData();

  return (
    <div className="max-w-screen-xl  px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-[#aa3b4c] text-xl font-bold sm:text-2xl ">
          Our Events
        </h3>
        <p>difuuuuuuuuuuuh</p>
        <MakeEventFrom refetch={refetch}></MakeEventFrom>
      </div>
      <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto w-[200px] md:w-[500px] lg:w-[1100px]">
        <Toaster></Toaster>
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b text-center">
            {/* heading  */}
            <tr>
              <th className="py-3 px-6">Serial No</th>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Event Name</th>
              <th className="py-3 px-6">Shot Title</th>
              <th className="py-3 px-6">Description</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">Location</th>

              <th className="py-3 px-6">Decision</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {/* datas */}
            {eventsData?.map((item, idx) => (
              <EventTable
                item={item}
                key={item._id}
                idx={idx}
                refetch={refetch}
              ></EventTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventPage;
