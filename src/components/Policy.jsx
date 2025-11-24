import React from "react";
import { assets } from "../assets/assets.js";

const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          className="w-12 m-auto mb-5"
          src={assets.exchange_icon}
          alt="exchange"
        />
        <p className="font-semibold">Easy Returns & Refunds</p>
        <p className="text-gray-400">
          We offer hassle-free returns and refunds for all our products.
        </p>
      </div>
      <div>
        <img
          className="w-12 m-auto mb-5"
          src={assets.quality_icon}
          alt="exchange"
        />
        <p className="font-semibold">7 Day Replacement</p>
        <p className="text-gray-400">
          If you receive a defective product, we will replace it within 7 days.
        </p>
      </div>
      <div>
        <img
          className="w-12 m-auto mb-5"
          src={assets.support_img}
          alt="exchange"
        />
        <p className="font-semibold">24/7 Customer Support</p>
        <p className="text-gray-400">
          Our support team is available around the clock to assist you.
        </p>
      </div>
    </div>
  );
};

export default Policy;
