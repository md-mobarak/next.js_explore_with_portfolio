"use client";

import Image from "next/image";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
const Footer = () => {
  return (
    <div>
      <div className="grid bg-[#F4F8FE] lg:grid-cols-4 gap-10 grid-cols-1 px-20  border-b border-gray-300 mt-10 mb-3 py-8">
        <section>
          <div className="flex justify-start items-center  ">
            <Image
              src="https://i.ibb.co/NWL95f0/Exclude.png"
              width="40"
              height="25"
              alt="Picture of the author"
            />
            <div className="ml-2">
              <h4 className="text-[#31384B] font-bold font-lato text-[16px] ">
                Alex Smith
              </h4>
              <small className="text-[12px] ">Ui uX Designer</small>
            </div>
          </div>
          <p className=" text-[16px]">
            Expert UI/UX designer with exceptional attention to detail, creating
            visually stunning and highly functional designs that exceed
            expectations."
          </p>
          <br />
          <div className="flex mb-4">
            <p className="font-semibold"> Contact on:</p>
            <span className="flex justify-around items-center">
              <FaFacebookF className="w-5 h-5"></FaFacebookF>{" "}
              <IoLogoWhatsapp className="w-5 h-5 mx-2"></IoLogoWhatsapp>{" "}
              <GrLinkedinOption className="w-5 h-5 "></GrLinkedinOption>
            </span>
          </div>
        </section>
        <section>
          <h4 className="font-semibold text-[20px]">/Company</h4>
          <p className="mt-3">About</p>
          <p className="mt-3">Portfolio</p>
          <p className="mt-3">Services</p>
          <p className="mt-3">Contact</p>
        </section>
        <section>
          <h4 className="font-semibold text-[20px]">/Services</h4>
          <p className="mt-3">UIUX Design</p>
          <p className="mt-3">Brand Identity </p>
          <p className="mt-3">Writing and Translate </p>
          <p className="mt-3">Video Animation</p>
        </section>
        <section>
          <h4 className="font-semibold text-[20px]"> /Contact</h4>
          <p className="mt-3">1234 Maple StreetAnytown, USA 12345</p>
          <p className="mt-3">
            <p className="flex">
              {" "}
              <BsFillTelephoneInboundFill></BsFillTelephoneInboundFill>
              +8801601658511
            </p>

            <small>Support Hotline</small>
          </p>
          <p className="mt-3 ">
            <p className="flex">
              <MdOutgoingMail className="h-4 w-4"></MdOutgoingMail>{" "}
              Alex@website.com
            </p>{" "}
            <small>Support Email</small>
          </p>
        </section>
      </div>
      <div className="flex justify-center my-4">
        <p>© 2023 Alex Website Powered By Alex Squad </p>
      </div>
    </div>
  );
};

export default Footer;
