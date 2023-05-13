import React from "react";

const DegitalService = () => {
  const blue = "#3638C8";
  return (
    <div>
      <div className="flex justify-around items-center px-[60px] my-10">
        <section>
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
            <span className="ml-2">Services</span>
          </span>
          <h2 className="text-[35px] font-semibold">
            Digital service <br /> range offered
          </h2>
        </section>
        <section className="lg:w-[285px] lg:h-[215px] p-[20px]">
          <img src="https://i.ibb.co/ZSrCgPx/Group-2769.png" alt="" />
          <h4 className="font-semibold text-[20px]">Brand Identity</h4>
          <small className="text-[14px]">
            Web / Software many more services lishing and graphic design,
          </small>
        </section>
        <section className="lg:w-[285px] lg:h-[215px] p-[20px]">
          <img src="https://i.ibb.co/NY0yG2R/Group-10771.png" alt="" />
          <h4 className="font-semibold text-[20px]">UI/UX Design</h4>
          <small className="text-[14px]">
            Web / Software many more services lishing and graphic design,
          </small>
        </section>
        <section className="lg:w-[285px] lg:h-[215px] p-[20px]">
          <img src="https://i.ibb.co/KKCs705/Group.png" alt="" />
          <h4 className="font-semibold text-[20px]">Video & Animation</h4>
          <small className="text-[14px]">
            Web / Software many more services lishing and graphic design,{" "}
          </small>
        </section>
      </div>
      {/* <a href="https://ibb.co/VmYB68R"><img src="https://i.ibb.co/TLMhy56/Ellipse-39.png" alt="Ellipse-39" border="0"></a> */}

      <section className="flex justify-end">
        <img src="https://i.ibb.co/TLMhy56/Ellipse-39.png" alt="" />
      </section>
    </div>
  );
};

export default DegitalService;
