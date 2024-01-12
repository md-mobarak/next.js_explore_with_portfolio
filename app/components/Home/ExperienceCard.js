"use client";

const ExperienceCard = () => {
  return (
    <section className="flex justify-center items-center lg:block">
      <div className="lg:px-[200px] w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-around space-y-10 lg:space-y-0  gap-x-28 lg:my-[90px]">
        <div className="lg:w-[310px] w-[200px] h-[120px]  rounded-md lg:h-[183px] flex justify-center items-center bg-[#d0d0f7]">
          <div>
            <h1 className="text-[60px] font-bold"> 10+</h1>
            <span> Years Experience</span>
          </div>
        </div>
        <div className="lg:w-[310px] w-[200px] h-[120px]  rounded-md lg:h-[183px] bg-[#efdac5] flex justify-center items-center">
          <div>
            <h1 className="text-[60px] font-bold"> 100+</h1>
            <span className="text-center"> Client Handle</span>
          </div>
        </div>
        <div className="lg:w-[310px] w-[200px] h-[120px]  rounded-md lg:h-[183px] bg-[#c3fafd] flex justify-center items-center">
          <div>
            <h1 className="text-[60px] font-bold"> 500+</h1>
            <span className="text-center"> Project Completed</span>
          </div>
        </div>
      </div>

      <img
        src="https://i.ibb.co/RSjhc1p/Vector.png"
        className="hidden lg:block"
        alt="Vector"
        border="0"
      />
    </section>
  );
};

export default ExperienceCard;
