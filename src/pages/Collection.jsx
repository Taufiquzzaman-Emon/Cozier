import React, { useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* LEFT FILTER PANEL */}
      <div className="min-w-60">
        {/* FILTER TOGGLE (MOBILE) */}
        <p
          onClick={() => setShowFilters(!showFilters)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          Filters
          <img
            className={`h-3 sm:hidden transform transition-transform duration-300 ${
              showFilters ? "rotate-90" : ""
            }`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </p>

        {/* CATEGORY FILTER */}
        <div
          className={`
            border border-gray-300 pl-5 py-3 mt-6 
            overflow-hidden transition-all duration-300
            ${showFilters ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
            sm:max-h-none sm:opacity-100 sm:block
          `}
        >
          <p className="mb-3 text-sm font-medium">Category</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Men" />
              Men
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Women" />
              Women
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Kids" />
              Kids
            </label>
          </div>
        </div>

        {/* TYPE / SUBCATEGORY FILTER */}
        <div
          className={`
            border border-gray-300 pl-5 py-3 my-5 
            overflow-hidden transition-all duration-300
            ${showFilters ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
            sm:max-h-none sm:opacity-100 sm:block
          `}
        >
          <p className="mb-3 text-sm font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Topwear" />
              Topwear
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Bottomwear" />
              Bottomwear
            </label>
            <label className="flex gap-2">
              <input type="checkbox" className="w-3" value="Winterwear" />
              Winterwear
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
