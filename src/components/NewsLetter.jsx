import React from "react";

const NewsLetter = () => {
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Get 20% off on your first order
      </p>
      <p className="text-gray-400 mt-3">Subscribe to our newsletter</p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button
          className="bg-black text-white text-xs px-10 py-4 cursor-pointer hover:bg-gray-800 transition"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
