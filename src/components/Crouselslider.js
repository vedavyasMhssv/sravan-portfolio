"use client";
import React, { useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import image1 from "../images/Crouselimage/1.png";
import image2 from "../images/Crouselimage/2.png";
import image3 from "../images/Crouselimage/3.png";
import image4 from "../images/Crouselimage/4.png";
import Image from "next/image";
import { motion } from "framer-motion";

export function Crouselslider() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const Data = [
    {
      image: image1,
      Year: "2009",
      Desc: "I attended ABC School and excelled as a student. Throughout my academic journey, I devoted myself to learning and consistently strived for excellence. My dedication and hard work were evident in my achievements, earning me recognition as a fantastic student.",
    },
    {
      image: image2,
      Year: "2010",
      Desc: "I pursued aeronautical engineering with fervor. Through rigorous coursework and hands-on projects, I delved into aircraft design, propulsion systems, and aerodynamics. My dedication paid off, earning me recognition as a promising engineer. My journey fills me with pride for the future of aviation.",
    },
    {
      image: image3,
      Year: "2018",
      Desc: "As a Business Development Manager, I excelled in navigating complex markets with strategic agility. Leveraging expertise in sales and marketing, I drove growth through proactive initiatives and targeted networking. I fostered strong partnerships and exceeded targets, contributing success.",
    },
    {
      image: image4,
      Year: "2019",
      Desc: "As CEO of Angadi World Technology, I drive innovation and excellence in digital marketing. Leading a talented team, we stay ahead in the industry, delivering cutting-edge solutions to clients. Through strategic partnerships and client-centric approaches.",
    },
  ];

  return (
    <div className="w-full h-auto py-32 gap-8 flex md:flex-row flex-col justify-between items-center px-2">
      <div className="flex flex-col justify-start items-start gap-2 md:pl-20 pl-12 ">
        <p className="uppercase text-xs text-gray-400">
          Journey throughout the years of my life.
        </p>
        <h6 className="text-4xl font-bold uppercase w-96">
          Voyage<br></br> through the{" "}
          <span className="text-[#FF7143]">chapters</span> of my existence.
        </h6>
      </div>
      <div>
        <Carousel className="w-full  ">
          <CarouselContent className="ml-1">
            {Data.map((value, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/3">
                <div className="">
                  <Card className="w-auto h-auto rounded-none">
                    <CardContent
                      className="flex p-0"
                      onMouseOver={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Image
                        className="h-[28rem] object-fill hover:brightness-75 transition-all duration-500"
                        src={value.image}
                      />
                      <motion.div
                        className="absolute flex justify-start items-start gap-4 flex-col bottom-4 pb-4 px-4 overflow-hidden"
                        initial={{ opacity: 1, y: 0 }}
                        animate={{
                          opacity: hoveredIndex === index ? 1 : 0,
                          y: hoveredIndex === index ? 0 : 40,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <h6 className="text-white text-2xl font-bold leading-7">
                          {value.Year}
                        </h6>
                        <motion.p
                          className="text-white text-xs md:w-52 w-36"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            y: hoveredIndex === index ? 0 : 20,
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {value.Desc}
                        </motion.p>
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 1, y: 0 }}
                        animate={{
                          opacity: hoveredIndex === index ? 0 : 1,
                          y: hoveredIndex === index ? 0 : 40,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute bottom-16 text-white text-2xl font-bold pl-4 md:w-52 w-36"
                      >
                        {value.Year}
                      </motion.p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute md:-left-[23rem] md:bottom-20 -bottom-8 left-16 bg-red-600">
            <CarouselPrevious className="bg-[rgb(0,0,0,0.6)]" />
            <CarouselNext className="bg-[rgb(0,0,0,0.6)]" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Crouselslider;
