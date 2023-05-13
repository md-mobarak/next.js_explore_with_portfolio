"use client";
import React from "react";

const ExperienceCard = () => {
  return (
    <section>
      <div className="px-[200px] w-full grid grid-cols-3 gap-x-28 my-[90px]">
        <div className="w-[310px] rounded-md h-[183px] flex justify-center items-center bg-[#d0d0f7]">
          <div>
            <h1 className="text-[60px] font-bold"> 10+</h1>
            <span> Years Experience</span>
          </div>
        </div>
        <div className="w-[310px] h-[183px] rounded-md bg-[#efdac5] flex justify-center items-center">
          <div>
            <h1 className="text-[60px] font-bold"> 100+</h1>
            <span className="text-center"> Client Handle</span>
          </div>
        </div>
        <div className="w-[310px] h-[183px] rounded-md bg-[#c3fafd] flex justify-center items-center">
          <div>
            <h1 className="text-[60px] font-bold"> 500+</h1>
            <span className="text-center"> Project Completed</span>
          </div>
        </div>
      </div>

      <img src="https://i.ibb.co/LkgCdd0/Vector.png" alt="Vector" border="0" />
    </section>
  );
};

export default ExperienceCard;
