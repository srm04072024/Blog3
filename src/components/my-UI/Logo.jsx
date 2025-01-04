import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logo({ className = "", clickable = false }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        clickable ? navigate("/") : null;
      }}
      className={`text-center text-3xl font-bold text-[#09350c] font-mono ${className} py-2`}
    >
      <span className=" px-2 py-1 bg-gradient-to-r from-amber-500 via-amber-500 to-lime-500 rounded-lg text-white mr-2 lowercase">
        Blogger&apos;s
      </span>
      <span className=" bg-clip-text  text-transparent bg-gradient-to-r from-amber-500 via-amber-500 to-lime-500 italic">
        Blog
      </span>
    </div>
    // <div onClick={() => { clickable ? navigate("/") : null }} >
    //     <img src="./logo.png" alt="logo" className={`h-[40px] ${className}`} />
    // </div>
  );
}
