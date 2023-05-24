"use client";
import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [mobileNavbarToggle, setMobileNavbarToggle] = useState(false);
  const pathname = usePathname();
  const blue = "#3638C8";
  // console.log(pathname);
  return (
    <header className="w-full   ">
      <nav className="hidden lg:block">
        <div className="grid grid-cols-2 ">
          <div className="flex justify-start items-center h-[100px] pl-[100px]">
            <Image
              src="https://i.ibb.co/NWL95f0/Exclude.png"
              width="50"
              height="36"
              alt="Picture of the author"
            />
            <div>
              <h4 className="text-[#31384B] font-bold font-lato text-[20px] ">
                Alex Smith
              </h4>
              <small className="text-[12px]">Ui uX Designer</small>
            </div>
          </div>

          <div className="">
            <ul className="flex  justify-evenly items-center h-[100px]">
              <li>
                <Link
                  className={
                    pathname === "/" ? "text-[#3638C8] font-bold " : ""
                  }
                  href="/"
                  key={pathname.name}
                >
                  Home{" "}
                  {pathname === "/" && (
                    <p className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={blue}
                        stroke={blue}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-[7px] w-[7px]  "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </p>
                  )}
                </Link>
              </li>
              <li>
                <Link
                  className={
                    pathname === "/about" ? "text-[#3638C8] font-bold " : ""
                  }
                  href="/about"
                  key={pathname.name}
                >
                  About{" "}
                  {pathname === "/about" && (
                    <p className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill={blue}
                        stroke={blue}
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="h-[7px] w-[7px]  "
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                      </svg>
                    </p>
                  )}
                </Link>
              </li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li className="lg:pr-[10px]">
                <button className="btn bg-[#3638C8] rounded-full px-[24px] py-[12px] text-white">
                  Hire Me
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* mobile responsive navbar */}
      <nav className="lg:hidden">
        <section className=" flex justify-between items-center  px-3 py-2">
          <div className="flex  justify-center items-center ">
            <Image
              src="https://i.ibb.co/NWL95f0/Exclude.png"
              width="30"
              height="30"
              alt="Picture of the author"
            />

            <h5 className="text-[#31384B]  ml-1 font-lato  ">Alex Smith</h5>
          </div>
          <div>
            <button onClick={() => setMobileNavbarToggle(!mobileNavbarToggle)}>
              {!mobileNavbarToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#3638C8"
                  width="24"
                  height="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 6h16v2H4zm0 4h16v2H4zm0 4h16v2H4zm0 4h16v2H4z" />
                </svg>
              ) : (
                <RxCross2 className="text-[#3638C8] font-semibold text-xl"></RxCross2>
              )}
            </button>
          </div>
        </section>
        {mobileNavbarToggle && (
          <section>
            <ul className="navbar-ul bg-[#c1eef0]">
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
              <li className="lg:pr-[10px]">
                <button className="btn bg-[#3638C8] rounded-full px-[20px] py-[7px] text-white">
                  Hire Me
                </button>
              </li>
            </ul>
          </section>
        )}
      </nav>
    </header>
  );
};

export default Header;
