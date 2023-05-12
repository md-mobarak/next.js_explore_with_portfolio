import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full   ">
      <div className="grid grid-cols-2">
        <div className="flex justify-start items-center h-[100px] pl-[100px]">
          <Image
            src="https://i.ibb.co/NWL95f0/Exclude.png"
            width="50"
            height="36"
            alt="Picture of the author"
          />
          <div>
            <h4 className="text-[#31384B] font-bold font-lato text-[20px] ">
              Alex Smith
            </h4>
            <small className="text-[12px]">Ui uX Designer</small>
          </div>
        </div>

        <div className="">
          <ul className="flex  justify-evenly items-center h-[100px]">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li className="lg:pr-[10px]">
              <button className="btn bg-[#3638C8] rounded-full px-[24px] py-[12px] text-white">
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
