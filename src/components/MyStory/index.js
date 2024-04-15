"use client";
import React from "react";
import { motion } from "framer-motion";
import arrow from "@/images/common/ArrowWhite.png";
import sravan from "@/images/common/sravan.jpg";

import Image from "next/image";
import Crouselslider from "../Crouselslider";
function MyStory() {
  return (
    <div className="flex flex-col">
      {" "}
      <div className="flex py-12 mt-4 mb-8 gap-12  justify-center text-right">
        <motion.div
          // reveals content from left to right
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          viewport={{ once: false }}
          transition={{ duration: 2 }}
          className=" text-3xl md:text-8xl leading-10 font-semibold "
        >
          <p className="text-[--color-theme] ">MY</p>
          STORY.
        </motion.div>
        <div className="relative min-h-[60px] min-w-[60px] md:min-h-[140px] md:min-w-[140px] ms-5 flex items-end">
          <motion.div
            whileInView={{ rotate: "-135deg" }}
            transition={{
              ease: "linear",
              duration: 2,
              repeat: 0,
            }}
            viewport={{ once: false }}
            className="text-white flex items-end min-h-[60px] min-w-[60px] md:min-h-[140px] md:min-w-[140px]"
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
      <div className="mt-10 md:max-w-[800px] mx-auto text-center">
        <p className="mx-auto text-4xl font-bold leading-14 tracking-tighter">
          WELCOME TO MY WORLD.
        </p>
        <p className="mt-5 text-base font-normal leading-7 tracking-tighter text-center">
          The Founder and CEO of{" "}
          <span className="text-[--color-theme]">
            Angadi World Technologies Pvt. Ltd.
          </span>{" "}
          and{" "}
          <span className="text-[--color-theme]">
            International Business Expedition Trailblazers
          </span>
          . My goal is to support aspiring entrepreneurs, collaborate with
          like-minded individuals, and create ventures that bring health,
          wealth, and happiness to all involved.
        </p>
      </div>
      <div className="mt-10 md:max-w-[800px] w-full mx-auto text-center flex   border-white border ">
        <div className="flex-1 relative">
          <Image
            className="absolute "
            src={sravan}
            height={100}
            width={100}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              verticalAlign: "middle",
            }}
            unoptimized
          />
        </div>
        <div className="border-s border-s-white p-5 flex flex-col flex-1 text-[14px] text-left">
          <p>
            {`“I strive to bring together the best minds and work towards a shared
          goal of achieving  greatness with the power of teamwork and
           collaboration. My passion for innovation and  growth has been the
          driving force behind my  journey as an entrepreneur, and I’m proud to
           have built a thriving business that has impacted  the lives of many.”`}
          </p>
          <p className="mt-2 mb-1 text-base font-semibold leading-7 tracking-tighter">
            SRAVAN KUMAN ANGADI
          </p>
          <p className="text-[--color-theme] text-base font-semibold leading-7 tracking-tighter">
            FOUNDER - CEO
          </p>
        </div>
      </div>
       <div className="py-28">
        <Crouselslider/>
       </div>
    </div>
  );
}

export default MyStory;
