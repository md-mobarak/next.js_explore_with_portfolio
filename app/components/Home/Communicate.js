import React from "react";

const Communicate = () => {
  return (
    <div className="flex justify-center items-center my-16">
      <div className="lg:w-[1080px] relative lg:h-[481px]">
        <img src="https://i.ibb.co/Fg0XP4F/Group-384-1.png" alt="" />
        <div className="absolute lg:top-40 lg:left-44">
          <div className="text-center">
            <h1 className="text-[48px]  font-bold text-white">
              Send me a message and make <br /> something together.
            </h1>
            <p className="text-white lg:mt-[12px] mb-[40px]">
              Grow faster with a website that helps you convert more customers.
            </p>
            <button className="bg-white font-semibold rounded-full w-[158px] h-[49px]">
              Have a project?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communicate;
