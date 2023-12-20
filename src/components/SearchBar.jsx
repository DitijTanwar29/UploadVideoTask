import React from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex  m-5 -translate-x-3">
      <input type="text" placeholder="Search for video"  className="w-[40%] p-2 placeholder-zinc-700 font-bold bg-zinc-800 rounded-s-md ml-32  " />
      <button className="w-[6rem] bg-cyan-500 text-white p-2 rounded-e-md ">
        <FaSearch className='mx-auto' />
      </button>
    </div>
  );
};

export default SearchBar;
