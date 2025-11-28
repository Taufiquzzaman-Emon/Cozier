import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilters, setShowFilters] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // TOGGLE CATEGORY
  const toggleCategory = (e) => {
    if (selectedCategories.includes(e.target.value)) {
      setSelectedCategories((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSelectedCategories((prev) => [...prev, e.target.value]);
    }
  };
  // TOGGLE TYPE
  const toggleType = (e) => {
    if (selectedTypes.includes(e.target.value)) {
      setSelectedTypes((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setSelectedTypes((prev) => [...prev, e.target.value]);
    }
  };
  // FILTER LOGIC
  const filterLogic = () => {
    let filtered = products.slice();
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((item) =>
        selectedTypes.includes(item.subCategory)
      );
    }
    setFilterProducts(filtered);
  };
  //  SORT LOGIC
  const sortedProducts = () => {
    let sorted = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(sorted.sort((a, b) => a.price - b.price));
        break;

      case "high-low":
        setFilterProducts(sorted.sort((a, b) => b.price - a.price));
        break;

      default:
        filterLogic();
        break;
    }
  };

  useEffect(() => {
    filterLogic();
  }, [selectedCategories, selectedTypes]);

  useEffect(() => {
    sortedProducts();
  }, [sortType]);

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
              <input
                type="checkbox"
                className="w-3"
                value="Men"
                onChange={toggleCategory}
              />
              Men
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Women"
                onChange={toggleCategory}
              />
              Women
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Kids"
                onChange={toggleCategory}
              />
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
              <input
                type="checkbox"
                className="w-3"
                value="Topwear"
                onChange={toggleType}
              />
              Topwear
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Bottomwear"
                onChange={toggleType}
              />
              Bottomwear
            </label>
            <label className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value="Winterwear"
                onChange={toggleType}
              />
              Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* RIGHT PRODUCT PANEL */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"All"} text2={"Collections"} />
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
