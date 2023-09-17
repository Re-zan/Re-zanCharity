import Image from "next/image";
import React from "react";

const DonateHistroyData = ({ item, idx }) => {
  const { name, email, image, paymentId, amount } = item;
  return (
    <tr key={idx} className="text-center">
      <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
        {image && <Image src={image} alt={name} width={50} height={50}></Image>}

        <div>
          <span className="block text-gray-700 text-sm font-medium">
            {name}
          </span>
          <span className="block text-gray-700 text-xs">{email}</span>
        </div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap"> {paymentId} </td>
      <td className="px-6 py-4 whitespace-nowrap">$ {amount} </td>
    </tr>
  );
};

export default DonateHistroyData;
