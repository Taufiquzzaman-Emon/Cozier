import React from "react";
import { assets } from "../assets/assets";
import { FiPhone, FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Contact</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li className="flex items-center gap-2">
              <FiPhone className="text-lg" />
              +880 123 456 789
            </li>

            <li className="flex items-center gap-2">
              <FiMail className="text-lg" />
              cozier@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="text-center text-gray-500 text-sm py-5 border-t">
          &copy; {new Date().getFullYear()} <b>Cozier.</b> All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
