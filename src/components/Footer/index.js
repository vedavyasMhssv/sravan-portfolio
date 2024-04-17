import React from "react";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";

function Footer() {
  return (
    <div>
      <div className="m-10 flex items-center justify-center border border-white rounded-lg p-32 relative ">
        <p className="text-5xl font-semibold relative z-30">
          Let's start a{" "}
          <span className="font-[Pacifico] text-7xl font-normal">Project</span>
        </p>
        <div
          className="absolute text-white rounded-lg z-20 flex justify-center items-end"
          id="start"
        >
          <button className="relative z-30 mb-20 font-semibold">
            {" "}
            CONTACT ME
          </button>
        </div>
      </div>
      <div className="p-10 flex uppercase justify-between flex-wrap gap-5">
        <div className="flex flex-col gap-3">
          <p className="text-[--color-theme] font-bold text-sm">Links</p>
          <p className="font-normal text-sm">about me</p>
          <p className="font-normal text-sm">our solutions</p>
          <p className="font-normal text-sm">our projects</p>
          <p className="font-normal text-sm">social</p>
        </div>
        <div className="flex flex-col gap-3 min-w-fit">
          <p className="text-[--color-theme] font-bold text-sm">company</p>
          <p className="font-normal text-sm">
            {" "}
            angadi world technologies pvt ltd
          </p>
          <p className="font-normal text-sm">qr angadi</p>
          <p className="font-normal text-sm">
            international business expedition trailblazers
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <hr className="lg:hidden"></hr>
          <div>
            <p className="text-[12px]">email</p>
            <p className="text-3xl lowercase">sravan@angadiworldtech.com </p>
          </div>
          <div>
            <p className="text-[12px]">phone</p>
            <p className="text-3xl">+91-9110314465</p>
          </div>
          <div>
            <p className="text-[12px]">social</p>
            <p className="text-3xl flex gap-2 mt-2">
              <AiFillInstagram />
              <FaFacebookSquare />
              <IoLogoLinkedin />
              <FaSquareTwitter />
              <TbBrandYoutubeFilled />
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="flex justify-center md:text-[14px] py-3 text-xs">
        <p>2024 SRAVAN KUMAR ANGADI - All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
