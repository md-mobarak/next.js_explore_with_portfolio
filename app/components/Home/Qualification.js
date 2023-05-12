import React from "react";

const Qualification = () => {
  const blue = "#3638C8";
  return (
    <div className="grid grid-cols-2 gap-10 px-[60px]">
      <section className="w-[505px] h-[834px] ">
        <img
          className="mt-[-90px]"
          src="https://i.ibb.co/Kw6Vjpq/Group-10767.png"
          alt="Group-10767"
        />
      </section>
      <section>
        <span className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#1E314C"
            stroke="blue"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-[8px] w-[px] animate-spin"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <span className="ml-2"> About Me</span>
        </span>
        <h1 className="text-[40px] mb-[27px] mt-[13px] font-semibold">
          Why me? Exceptional qualifications for your projects
        </h1>
        <p className="text-[17px] text-justify">
          As an experienced UI/UX designer, I understand the importance of
          designing for the user. I bring a creative and innovative approach to
          every project, collaborating closely with clients to craft engaging
          experiences that meet their unique needs and objectives. I am
          committed to staying up-to-date with the latest design trends and best
          practices, and use my expertise in design thinking, user research, and
          prototyping to create user-centered designs that drive results for
          businesses. By choosing me for your project, you can expect attention
          to detail, effective communication, and a passion for delivering
          high-quality design solutions that meet your goals
        </p>
        <h3 className="mt-[35px] mb-[59px] text-[23px] font-semibold shadow-xl">
          Professional background of experience & expertise
        </h3>

        {/* skill add start  */}
        <div className="grid grid-cols-2 gap-x-12">
          <section className="border-r-4  border-[#3638C8]">
            <div className="relative">
              <p className="font-semibold">Dell Technologies</p>
              <small>1st Jan 2023 - At Present</small>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={blue}
                stroke={blue}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-[26px] absolute top-[-2px] right-[-14px]  w-[26px] "
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <div className="my-[52px] relative">
              <p className="font-semibold">Woop Window</p>
              <small>1st Jan 2023 - At Present</small>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={blue}
                stroke={blue}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-[26px] absolute top-[20px] right-[-14px]  w-[26px] "
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <div className="relative">
              <p className="font-semibold">Ollyo Technology</p>
              <small>1st Jan 2023 - At Present</small>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={blue}
                stroke={blue}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-[26px] absolute bottom-0 right-[-14px]  w-[26px] "
              >
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
          </section>

          <section>
            <div>
              <p className="font-semibold">Senior UI/UX Designer</p>
              <small>As an experienced Product designer, I understand </small>
            </div>
            <div className="my-[30px]">
              <p className="font-semibold">Visual Designer</p>
              <small>As an experienced Product designer, I understand </small>
            </div>
            <div>
              <p className="font-semibold">Senior UI/UX Designer</p>
              <small>As an experienced Product designer, I understand </small>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Qualification;
