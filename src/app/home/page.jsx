"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/logo.svg";

const page = () => {
  return (
    <div className="bg-[#404eed] h-[100vh]">
      <div className="flex justify-between p-6">
        <div>
          <Image src={Logo} />
        </div>
        <div className="flex items-center gap-6 text-white">
          <div className="text-base uppercase border-b border-[#404eed] hover:border-b-white max-sm:hidden">
            Home
          </div>
          <div className="text-base uppercase border-b border-[#404eed] hover:border-b-white max-sm:hidden">
            About
          </div>
          <div className="text-base uppercase border-b border-[#404eed] hover:border-b-white max-sm:hidden">
            Community
          </div>
          <button
            className="uppercase py-2 px-5 text-black bg-white rounded-3xl 
          hover:bg-[#9EF948] hover:text-white"
          >
            Get Access
          </button>
        </div>
      </div>
      <div className="h-[70vh] flex items-end max-lg:flex-wrap">
        <div className="px-8 max-lg:m-auto">
          <p className="text-xl text-white mb-4 w-[295px]">
            Porter enables creditworthy DAOs to obtain fixed-rate financing
            using their project tokens as collateral.
          </p>
          <button
            className="uppercase py-2 px-5 text-black bg-white border  rounded-3xl 
          hover:bg-[#9EF948] hover:text-white w-[295px]"
          >
            Get Access
          </button>
          <br />
          <button
            className="uppercase py-2 px-5 text-white rounded-3xl 
          hover:bg-[#9EF948] hover:text-white w-[295px] mt-2 
          border border-white "
          >
            Wallet Connect
          </button>
        </div>
        <div className="max-md:pl-8 max-sm:pl-4">
          <p className="text-8xl text-white max-md:text-3xl">
            Borrow with no liquidations against
          </p>
          <div
            className="typing-container text-8xl text-white "
            data-text="$WEB 3"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default page;
