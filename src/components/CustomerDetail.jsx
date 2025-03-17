import React from "react";
import { star } from "../assets/icons";

const CustomerDetail = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div className="rounded-full overflow-hidden flex justify-center w-[120px] h-[120px]">
        <img src={imgURL} alt="customer" />
      </div>
      <p className=" max-w-[370px] text-center text-slate-gray text-lg font-montserrat">{feedback}</p>
      <div className="flex gap-2">
        <img src={star} alt="" width={23} height={20} />
        <span className="text-slate-gray leading- font-montserrat text-xl">
          ({rating})
        </span>
      </div>
      <h2 className="text-3xl font-bold font-palanquin">{customerName}</h2>
    </div>
  );
};

export default CustomerDetail;
