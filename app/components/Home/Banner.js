const Banner = () => {
  return (
    <div className="lg:flex items-center lg:justify-center w-full  px-4 lg:px-16 bg-[#F4F8FE]">
      <div className="lg:w-1/2 lg:pr-8">
        <h1 className="text-4xl lg:text-5xl mb-4 lg:mb-11 font-bold text-[#1F2432]">
          UI/UX Designer <br />
          <span className="text-[#3638C8]">Alex</span>, Based in United <br />{" "}
          Arab Emirates
        </h1>
        <p className="text-[#1F2432] mb-8 lg:mb-8">
          Experienced UI/UX designer creating user-centered designs that
          simplify complex interactions and delight users
        </p>
        <div className="flex flex-col lg:flex-row items-center">
          <button className="mb-4 lg:mb-0 py-3 lg:py-4 rounded-full text-white bg-[#3638C8] px-8 lg:px-24">
            Have a project
          </button>
          <button className="py-3 ml-0 lg:ml-4 lg:mr-4 rounded-full border border-black px-8 lg:px-22">
            Let’s Talk
          </button>
        </div>
      </div>

      <div className="lg:w-1/2">
        <img
          src="https://i.ibb.co/5KYX6q2/Hero-image-1.png"
          alt="Hero-image"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Banner;
