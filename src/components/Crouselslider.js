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
      Year: "1991",
      title: "Dawn of the Innovator",
      Desc: "In the verdant landscapes of Andhra Pradesh, a future pioneer takes his first breath, destined to leave a mark on the world.",
    },
    {
      image: image2,
      Year: "2008",
      title: "Foundations of Ambition",
      Desc: "Emerging victorious from SSLC, Sravan sets his gaze upon the stars, his dreams fueled by the boundless sky.",
    },
    {
      image: image3,
      Year: "2010",
      title: "The Quest for Engineering Elegance",
      Desc: "With a leap into the world of Aeronautical Engineering, Sravan begins to mold his future, his passion for innovation taking flight.",
    },
    {
      image: image4,
      Year: "2014",
      title: "The Entrepreneurial Spark Ignites",
      Desc: "Graduation marks not just academic achievement but the birth of an entrepreneur. A to Z Services Private Limited becomes the first step in a journey that promises to reshape industries.",
    },
    {
      image: image1,
      Year: "2015-2016",
      title: "Diverse Paths, Singular Vision",
      Desc: "Exploring the realms of logistics and event management, Sravan garners insights that lay the groundwork for Local Live - a beacon of hope for talents hidden in villages, marrying technology with philanthropy.",
    },
    {
      image: image2,
      Year: "2017",
      title: "Navigating Business Horizons",
      Desc: "At Iconwave Technologies, Sravan hones his acumen as a Business Development Manager, his eyes set on transforming potential into reality.",
    },
    {
      image: image3,
      Year: "2018",
      title: "Angadi World Technologies - A Dream Realized",
      Desc: "The founding of Angadi World Technologies marks a pivotal moment. Here, innovation finds its home, birthing groundbreaking products like Jobstreamers and Planet Zoom.",
    },
    {
      image: image4,
      Year: "2024",
      title: "The Diverse Empire Expands",
      Desc: "The launch of QR Angadi, Interior Angadi, Organic Angadi, and IBETS showcases a remarkable versatility, each venture a chapter in Sravan's ongoing saga of success.",
    },
  ];

  return (
    <div className="w-full h-auto py-32 gap-8 flex md:flex-row flex-col justify-between items-center px-2">
      <div className="flex flex-col justify-start items-start gap-2 md:pl-20 pl-16 ">
        <p className="uppercase text-xs text-gray-400">
          Journey throughout the years of my life.
        </p>
        <h6 className="md:text-4xl text-3xl font-bold uppercase w-96">
          Voyage<br></br> through the{" "}
          <span className="text-[#FF7143]">chapters</span> of my existence.
        </h6>
      </div>
      <div>
        <Carousel className="w-full  ">
          <CarouselContent className="ml-1">
            {Data.map((value, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/3 lg:basis-1/3"
              >
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
                          className="md:text-lg text-md font-semibold md:w-52 w-36 text-[--color-theme]"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: hoveredIndex === index ? 1 : 0,
                            y: hoveredIndex === index ? 0 : 20,
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {value.title}
                        </motion.p>
                        <motion.p
                          className="text-white text-xs md:w-52 w-32"
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
