import Image from "next/image";
import React from "react";
import searchbar from "/public/searchbar.svg";

export default function Searchbar() {
  return (
    <form className="[ flex items-center w-[270px] gap-2 ] [ pl-3 ] [ border rounded-lg shadow-sm bg-white overflow-hidden ]">
      <Image width={17} height={17} src={searchbar.src} alt="searchbar" />
      <input
        className="w-full h-full py-2 pr-3 focus:outline-none"
        type="search"
        maxLength={30}
        placeholder="Search"
      ></input>
    </form>
  );
}
