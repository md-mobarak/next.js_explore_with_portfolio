import React from "react";
import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
const MyProject = () => {
  const blue = "#3638C8";
  return (
    <div className="px-[80px] mt-[120px] mb-[40px]">
      <span className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={blue}
          stroke={blue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-[8px] w-[8px] "
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        <span className="ml-2"> Portfolio</span>
      </span>
      <h2 className="font-semibold mb-[75px] text-[40px]">
        Our esteemed portfolio of accomplishments
      </h2>
      <div className="grid grid-cols-3 gap-[20px]">
        <section className="w-[386px] h-[335] relative p-[16px] rounded-md shadow-box">
          <Image
            src="https://i.ibb.co/616pm0c/Rectangle-13.png"
            width={354}
            height={303}
          />
          <button className="w-[321px] absolute bottom-[30px] right-9 h-[85px] bg-white rounded-md">
            <div className="flex justify-between items-center px-5">
              <section>
                <span className="font-semibold">USA Based Web Agency </span>{" "}
                <br />
                <small> App Design</small>
              </section>
              <section>
                {" "}
                <BsArrowUpRight className="text-3xl font-semibold"></BsArrowUpRight>
              </section>
            </div>
          </button>
        </section>
        <section className="w-[386px] h-[335] p-[16px] rounded-md shadow-box">
          <Image
            src="https://i.ibb.co/N6sb8vD/Rectangle-13-6.png"
            alt="Rectangle-13-6"
            width={354}
            height={303}
          />
        </section>
        <section className="w-[386px] h-[335] p-[16px] rounded-md shadow-box">
          <Image
            src="https://i.ibb.co/0yrmzdv/Rectangle-13-3.png"
            alt="Rectangle-13-3"
            width={354}
            height={303}
          />
        </section>
        <section className="w-[386px] h-[335] p-[16px] rounded-md shadow-box">
          <Image
            src="https://i.ibb.co/tQyB7S7/Rectangle-13-4.png"
            alt="Rectangle-13-4"
            width={354}
            height={303}
          />
        </section>
        <section className="w-[386px] h-[335] p-[16px] rounded-md shadow-box">
          <Image
            src="https://i.ibb.co/s2hxCmp/Rectangle-13-5.png"
            alt="Rectangle-13-5"
            width={354}
            height={303}
          />
        </section>
        <section className="w-[386px] h-[335] p-[16px] rounded-md shadow-box">
          <Image
            src="https://i.ibb.co/tYhrdL7/Rectangle-13-1.png"
            alt="Rectangle-13-5"
            width={354}
            height={303}
          />
        </section>
      </div>
    </div>
  );
};

export default MyProject;
