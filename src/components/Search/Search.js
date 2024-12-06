import React from "react";
import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="search-container flex justify-center items-center">
      <input
        type="text"
        placeholder="search"
        className="w-[50%] border-0 outline-0 py-2 pl-5 pr-[42px]"
      />
      <IoSearch className="text-2xl translate-x-[-38px] fill-[#bfbfbf]" />
    </div>
  );
};

export default Search;
