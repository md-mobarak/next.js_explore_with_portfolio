import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 w-full h-[715] px-[90px] py-16 bg-[#F4F8FE]">
      <section className="flex justify-center items-center ">
        <div>
          <h1 className="text-[50px] mb-[11px] font-bold text-[#1F2432]">
            UI/UX Designer <br />
            <span className="text-[#3638C8]">Alex</span>, Based in United <br />{" "}
            Arab Emirates
          </h1>
          <p className="text-[#1F2432] mb-[48px]">
            Experienced UI/UX designer creating user-centered designs that
            simplify complex interactions and delight users
          </p>
          <button className="py-[14px] rounded-full text-white bg-[#3638C8] px-[24px]">
            Have a project
          </button>
          <button className="py-[13px] ml-4 rounded-full border border-black px-[22px]">
            Let’s Talk
          </button>
        </div>
      </section>
      <section className="flex justify-end items-center">
        <div>
          <div className="">
            <Image
              src="https://i.ibb.co/c3ssd6G/UI.png"
              alt="UI"
              width={515}
              height={719}
            />
          </div>

          <div className="">
            <div className="absolute top-[115px] right-[280px]">
              <Image
                className="w-"
                src="https://i.ibb.co/Vxvb3BQ/2-1-Photo-Room-2.png"
                alt="UI"
                width={300}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
