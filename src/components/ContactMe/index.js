"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import arrow from "@/images/common/Arrow.png";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
// social icons
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaSquareTwitter } from "react-icons/fa6";
import { TbBrandYoutubeFilled } from "react-icons/tb";
function ContactMe() {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <div className="bg-white px-5 py-10 sm:px-40 text-black" id="contact-us">
      <div className="flex sm:gap-5 max-w-[800px] mx-auto">
        <motion.div
          // reveals content from left to right
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" text-4xl md:text-6xl font-bold text-black "
        >
          ALL YOU HAVE TO DO IS SAY{" "}
          <span className="text-[--color-theme]">'HELLO'</span>
        </motion.div>
        <div className="relative min-h-[60px] min-w-[60px] md:min-h-[140px] md:min-w-[140px] ms-5 flex items-end">
          <motion.div
            whileInView={{ rotate: "-135deg" }}
            transition={{
              ease: "linear",
              duration: 0.3,
              repeat: 0,
            }}
            viewport={{ once: true }}
            className="text-black flex items-end min-h-[60px] min-w-[60px] md:min-h-[120px] md:min-w-[120px]"
          >
            <Image
              src={arrow}
              height={60}
              width={60}
              className="h-[60px] w-[60px] md:h-[120px] md:w-[120px]"
              unoptimized
            />
          </motion.div>
        </div>
      </div>
      <p className="uppercase font-semibold mt-10">
        fill out the necessary details, i will contact you!
      </p>
      <div className="flex gap-10">
        <form
          onSubmit={submitHandler}
          className="md:flex-[0.7] flex-1 text-black font-bold"
        >
          <div className="flex gap-5 my-5 flex-wrap">
            <input
              type="text"
              placeholder="FIRST NAME"
              className="placeholder:text-black placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 focus-visible:outline-none"
            />
            <input
              type="text"
              placeholder="LAST NAME"
              className="placeholder:text-black placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 focus-visible:outline-none"
            />
          </div>

          <input
            type="text"
            placeholder="EMAIL ID"
            className="placeholder:text-black placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 w-full focus-visible:outline-none"
          />
          <select className="text-black font-bold border-b border-b-[black] text-[14px] flex-1 w-full my-5 uppercase focus-visible:outline-none">
            <option value="" className="text-black font-bold text-[14px]">
              Service
            </option>
            <option value="1" className="text-black font-bold text-[14px] ">
              Option 1
            </option>{" "}
            <option value="2" className="text-black font-bold text-[14px]">
              Option 2
            </option>
          </select>
          <input
            type="text"
            placeholder="MESSAGE"
            className="placeholder:text-black placeholder:font-bold border-b border-b-[black] placeholder:text-[14px] flex-1 w-full focus-visible:outline-none"
          />
          <button className=" uppercase my-5 border border-black w-[80%] mx-auto p-[10px] rounded-bl-[30px] rounded-tr-[30px] hover:bg-black hover:text-white">
            contact me
          </button>
        </form>
        <div className="flex-[0.3] bg-black p-8 text-white rounded-bl-[30px] rounded-tr-[30px]  flex-col hidden md:flex relative">
          <p className="uppercase my-2 font-bold">Contact me :</p>
          <hr></hr>
          <div>
            <div className="flex gap-5 py-2 items-center">
              <MdEmail />
              <p>sample@gmail.com</p>
            </div>
            <div className=" flex gap-5 py-2">
              <FaPhoneAlt />
              <p>+91 6756276379</p>
            </div>
          </div>
          <hr className="mb-5"></hr>
          <div className=" flex gap-5">
            <FaLocationDot className="text-white mt-[5px]" />
            <p>sample address 21A Hyderabad India</p>
          </div>
          <div className="text-xl  flex gap-2 relative max-w-fit ml-auto bottom-[-15px] right-[-20px]">
            <AiFillInstagram />
            <FaFacebookSquare />
            <IoLogoLinkedin />
            <FaSquareTwitter />
            <TbBrandYoutubeFilled />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
