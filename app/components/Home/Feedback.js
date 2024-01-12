import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
const Feedback = () => {
  return (
    <div className="px-12  my-5">
      <div className="lg:grid grid-cols-2 ">
        <section className="lg:w-[577px] lg:h-[570px]">
          <img
            className="w-full h-full"
            src="https://i.ibb.co/kyZL4Bf/Group-2766.png"
            alt=""
          />
        </section>
        <section className="lg:p-12">
          <h1 className="lg:text-[26px] font-semibold">
            Exceptional UI/UX Designer
          </h1>
          <p>
            Alex of UI/UX designer is an exceptional professional. They exceeded
            my expectations by transforming my ideas into a visually stunning
            and highly functional design. He was responsive, professional and
            attentive to detail throughout the project. I highly recommend
            [his/her] services to anyone in need of top-notch UI/UX design.
            Thank you for your exceptional work!"
          </p>
          <br />
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">John Carter</p>
              <p>CEO & Co-Founder Winee</p>
            </div>
            <div className="flex">
              <BsFillArrowLeftCircleFill className="lg:w-6 lg:h-6 mx-2"></BsFillArrowLeftCircleFill>
              <BsFillArrowRightCircleFill className="lg:w-6 lg:h-6"></BsFillArrowRightCircleFill>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feedback;
