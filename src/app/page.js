"use client";
import Image from "next/image";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import MyStory from "@/components/MyStory";
import FoundersMission from "@/components/FoundersMission";
import MyLifestyle from "@/components/MyLifeStyle";
import OurServices from "@/components/OurServices";
import OurWorks from "@/components/OurWorks";
import RatingsAndClients from "@/components/RatingsAndClients";
import SocialFeeds from "@/components/SocialFeeds";
import ContactMe from "@/components/ContactMe";

import orangeBlob from "@/images/common/orange-blob.png";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Crouselslider from "@/components/Crouselslider";
import Navigatebutton from "@/components/Navigatebutton";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "@/components/Navbar";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function Home() {


  gsap.registerPlugin(useGSAP,ScrollToPlugin);

  useGSAP(() => {
    const button = document.querySelector("#Mystory");
    const button1 = document.querySelector("#Service");
    const button2 = document.querySelector("#Works");
    const button3 = document.querySelector("#Social");
    const button4 = document.querySelector("#letsTalkBtn");

    button.addEventListener("click", () => {
      gsap.to(window, {duration: 2, scrollTo:{y:"#section1", offsetY:70},ease:"back.out"});
    });
    button1.addEventListener("click", () => {
      gsap.to(window, {duration: 2, scrollTo:{y:"#section2", offsetY:70},ease:"back.out"});
    });
    button2.addEventListener("click", () => {
      gsap.to(window, {duration: 3, scrollTo:{y:"#section3", offsetY:70},ease:"back.out"});
    });
    button3.addEventListener("click", () => {
      gsap.to(window, {duration: 4, scrollTo:{y:"#section4", offsetY:70},ease:"back.out"});
    });
    button4.addEventListener("click", () => {
      gsap.to(window, {duration: 3, scrollTo:{y:"#section5", offsetY:70},ease:"back.out"});
    });
   
  },
 
); 

  return (
    <>
      <NextUIProvider>
        <div className=" w-full fixed z-10 p-1">
          <Nav />
        </div>
        <div
          style={{
            minHeight: "200vh",
            position: "relative",
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >
          <Navigatebutton />
          <Hero />
          <Experience />
          <div id="section1">

          <MyStory />
          </div>
          <FoundersMission />
          <MyLifestyle />
          <div id="section2">
          <OurServices />

          </div>
          <div id="section3">
          <OurWorks />

          </div>
          {/* <RatingsAndClients /> */}
          <div id="section4">

          <SocialFeeds />
          </div>
          <div id="section5">

          <ContactMe />
          </div>
          <Image
            src={orangeBlob}
            height={500}
            width={700}
            className="absolute right-[-450px] top-[400px] min-h-[500px] min-w-[700px]"
          />
        </div>
        {/* <Footer /> */}
      </NextUIProvider>
    </>
  );
}
