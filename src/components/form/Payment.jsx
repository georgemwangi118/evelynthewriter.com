import { useState } from "react";
import express from "../../assets/american-express.jpeg";
import visa from "../../assets/visa.png";
import mastercard from "../../assets/mastercard.png";
import discover from "../../assets/discover.jpg";

const Payment = () => {
  const [itemCount, setItemCount] = useState(1);
  const itemPrice = 28.0;
  const totalToPay = itemCount * itemPrice;

  // const incrementItem = () => {
  //   setItemCount(itemCount + 1);
  // };

  // const decrementItem = () => {
  //   if (itemCount > 1) {
  //     setItemCount(itemCount - 1);
  //   }
  // };
  return (
    <div
      className="container mx-auto p-4 border border-gray-100 rounded-lg bg-green-50"
      style={{ position: "sticky", top: 0 }}
    >
      {/* Item to Pay */}
      <div className="mb-4">
        <hr />
        <p>College</p>
        <p>Essay</p>
        <hr />
        <p className="p-2">
          {itemCount} page(s) * ${itemPrice}{" "}
          <span style={{ fontWeight: "bold", paddingLeft: 10 }}>
            ${totalToPay}
          </span>
        </p>
        {/* <div className="flex items-center mt-2">
          <button
            onClick={decrementItem}
            className="bg-red-500 text-white px-3 py-1 rounded-full mr-2"
          >
            -
          </button>
          <span className="text-lg font-semibold">{itemCount}</span>
          <button
            onClick={incrementItem}
            className="bg-green-500 text-white px-3 py-1 rounded-full ml-2"
          >
            +
          </button>
        </div> */}
      </div>

      <hr />

      {/* Total to Pay */}
      <div className="flex relative">
        <h2 className="text-lg font-semibold">Total to Pay</h2>
        <p style={{ position: "absolute", right: 10 }}>${totalToPay}</p>
      </div>

      {/* Payment Images */}
      <div className="mb-4">
        <div className="flex space-x-10">
          {/* Add payment images here */}
          <img src={visa} alt="visa" className="w-12 h-12" />
          <img src={mastercard} alt="mastercard" className="w-12 h-12" />
          <img src={express} alt="visa" className="w-12 h-12" />
          <img src={discover} alt="mastercard" className="w-12 h-12" />
          {/* Add more payment images as needed */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
