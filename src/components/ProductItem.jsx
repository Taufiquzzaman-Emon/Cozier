import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
const ProductItem = ({ id, image, name, price }) => {
  console.log(id);
  const { currency } = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className="text-gray-700 cursor-pointer">
      <div className="overflow-hidden">
        <img
          className="transition duration-500 ease-out hover:-translate-y-2 hover:scale-110 hover:shadow-2xl"
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
