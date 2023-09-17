import React from "react";
import DonateHistoryTable from "./DonateHistoryTable";

export const metadata = {
  title: " Dashboard | Donate History",
};
const DonateHistroyPage = () => {
  return (
    <div className="max-w-screen-xl  px-4 md:px-8">
      <div className="max-w-lg">
        <h3 className="text-[#aa3b4c] text-xl font-bold sm:text-2xl text-center">
          Donate History
        </h3>
      </div>
      <DonateHistoryTable></DonateHistoryTable>
    </div>
  );
};

export default DonateHistroyPage;
