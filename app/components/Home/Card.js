import Image from "next/image";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Card = ({ items }) => {

  return (
    <div className="my-10">
      <section className="w-[586px] h-full relative p-[16px] rounded-md shadow-box">
        <Image src={items.img} className="lg:w-[554px] lg:h-[345px] w-full h-full" width={554} height={345} />
        <button className="w-[496px] absolute bottom-[30px] right-9 h-[85px] bg-white rounded-md shadow-box">
          <div className="flex justify-between items-center px-5">
            <section>
              <span className="font-semibold">
                Transforming a Travel Agency's Online Presence: A UI/UX Case
                Study
              </span>
            </section>
            <section>
              <BsArrowUpRight className="text-3xl font-semibold"></BsArrowUpRight>
            </section>
          </div>
        </button>
      </section>
    </div>
  );
};

export default Card;
