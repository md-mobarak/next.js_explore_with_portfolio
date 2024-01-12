const Qualification = () => {
  const blue = "#3638C8";
  return (
    <div className="my-16 lg:my-10">
      <div className="lg:grid grid-cols-2 gap-10 px-[60px]">
        <section className="lg:w-[505px] lg:h-[834px]  flex justify-center items-center lg:block">
          <img
            className="mt-[-90px]"
            src="https://i.ibb.co/YddLbD8/Group-10767.png"
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
            designing for the user. I bring a creative and innovative approach
            to every project, collaborating closely with clients to craft
            engaging experiences that meet their unique needs and objectives. I
            am committed to staying up-to-date with the latest design trends and
            best practices, and use my expertise in design thinking, user
            research, and prototyping to create user-centered designs that drive
            results for businesses. By choosing me for your project, you can
            expect attention to detail, effective communication, and a passion
            for delivering high-quality design solutions that meet your goals
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
                  class="h-[26px] absolute top-[23px] right-[-14px]  w-[26px] "
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
                  class="h-[26px] absolute bottom-[-29px] right-[-14px]  w-[26px] "
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </div>
            </section>

            <section className="">
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
          {/* My professional toolkit */}
          <h3 className="mt-[56px] mb-[32px] text-[23px] font-semibold shadow-xl">
            My professional toolkit
          </h3>

          <div className="grid grid-cols-5 gap-x-4">
            <img src="https://i.ibb.co/NyJbqsk/Group-2712.png" alt="" />
            <img src="https://i.ibb.co/TPbvsY6/Group-2731.png" alt="" />
            <img src="https://i.ibb.co/0FC89RK/Group-2732.png" alt="" />
            <img
              src="https://i.ibb.co/108vTvB/Group-2737.png"
              alt="Group-2733"
            />
            <img src="https://i.ibb.co/8jLtyxx/Group-10777.png" alt="" />
          </div>
          <div className="grid grid-cols-5 gap-x-4 mt-4">
            <img
              src="https://i.ibb.co/Snm6223/Group-2734.png"
              alt="Group-2734"
            />
            <img src="https://i.ibb.co/M99t1Nr/Group-2735.png" alt="" />
          </div>
        </section>
      </div>
      <div className="pl-[35px]">
        <img src="https://i.ibb.co/jzB7Bpq/Vector-1.png" alt="" />
      </div>
    </div>
  );
};

export default Qualification;
