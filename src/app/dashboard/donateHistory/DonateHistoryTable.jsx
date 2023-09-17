"use client";
import usePaymentsData from "@/hooks/usePaymentsData";
import React from "react";
import DonateHistroyData from "./DonateHistroyData";

const DonateHistoryTable = () => {
  const [paymentDatas] = usePaymentsData();

  return (
    <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto w-[200px] md:w-[500px] lg:w-[1100px]">
      <table className="w-full table-auto text-sm text-left">
        <thead className="bg-gray-50 text-gray-600 font-medium border-b text-center">
          {/* heading  */}
          <tr>
            <th className="py-3 px-6">User</th>

            <th className="py-3 px-6">PaymentId</th>
            <th className="py-3 px-6">Amount</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 divide-y">
          {/* datas */}
          {paymentDatas?.map((item, idx) => (
            <DonateHistroyData
              item={item}
              key={item._id}
              idx={idx}
            ></DonateHistroyData>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DonateHistoryTable;
