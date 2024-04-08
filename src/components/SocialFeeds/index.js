"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import arrow from "@/images/common/Arrow.png";
import Image from "next/image";
import user from "@/images/common/dummyUser.png";

import yt from "@/images/common/yt.png";
import twitter from "@/images/common/twitter.png";
import linkedin from "@/images/common/linkedin.png";
import insta from "@/images/common/insta.png";
import fb from "@/images/common/fb.png";

import dummyImageOne from "@/images/common/dummyImageOne.png";
import dummyImageTwo from "@/images/common/dummyImageTwo.png";
import { FacebookEmbed } from "react-social-media-embed";
import { InstagramEmbed } from "react-social-media-embed";
import { LinkedInEmbed } from "react-social-media-embed";
import { XEmbed } from "react-social-media-embed";
import { YouTubeEmbed } from "react-social-media-embed";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
function SocialFeeds() {
  const [selected, setSelected] = useState(1);
  const socialFeeds = [
    {
      image: user,
      name: "Name",
      userName: "",
      fromMedia: "fb",
      socialImg: fb,
      text: "This is a sample text!",
      cover: (
        <FacebookEmbed
          url="https://www.facebook.com/andrewismusic/posts/451971596293956"
          width={550}
        />
      ),
    },
    {
      image: user,
      name: "Name",
      userName: "@username",
      fromMedia: "instagram",
      socialImg: insta,
      text: "This is a paragraph with more information about something important.",
      cover: dummyImageTwo,
    },
    {
      image: user,
      name: "Name",
      userName: "",
      fromMedia: "twitter",
      socialImg: twitter,
      text: "This is a sample text!",
      cover: dummyImageOne,
    },
    {
      image: user,
      name: "Name",
      userName: "@username",
      fromMedia: "linkedin",
      socialImg: linkedin,
      text: "This is a paragraph with more information about something important. This something has many uses and is made of 100% recycled material.",
      cover: dummyImageTwo,
    },
    {
      image: user,
      name: "Name",
      userName: "@username",
      fromMedia: "youtube",
      socialImg: yt,
      text: "",
      cover: dummyImageOne,
    },
    {
      image: user,
      name: "Name",
      userName: "",
      fromMedia: "facebook",
      socialImg: fb,
      text: "This is a paragraph with more information about something important.",
      cover: dummyImageTwo,
    },
    {
      image: user,
      name: "Name",
      userName: "@username",
      fromMedia: "instagram",
      socialImg: insta,
      text: "This is a sample text!",
      cover: dummyImageOne,
    },
    {
      image: user,
      name: "Name",
      userName: "@username",
      fromMedia: "instagram",
      socialImg: yt,
      text: "This is a sample text!",
      cover: dummyImageTwo,
    },
  ];
  const media = [
    { name: "AWT", id: 1 },
    { name: "QR ANGADI", id: 2 },
    // { name: "IBETS", id: 3 },
  ];
  return (
    <div className="bg-white py-10">
      {" "}
      <div className="flex justify-center text-right mb-10">
        <motion.div
          // reveals content from left to right
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
          whileInView={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" text-4xl md:text-8xl font-bold text-black "
        >
          <p className="text-[--color-theme]">SOCIAL</p>
          MEDIA.
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
            className="text-black flex items-end min-h-[60px] min-w-[60px] md:min-h-[140px] md:min-w-[140px] absolute"
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
      <div className="flex md:gap-5 flex-wrap justify-between md:max-w-[60%] mx-auto px-5">
        {media.map((item) => {
          return (
            <p
              className="text-xl md:text-4xl font-bold leading-tight hover:text-black"
              style={{
                color: selected !== item.id ? "#b3b3b3" : "black",
              }}
              key={item.id}
              onClick={() => setSelected(item.id)}
            >
              {item.name}
            </p>
          );
        })}
      </div>
      <div className="max-w-[900px] mx-auto mt-10 px-10">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 500: 2, 800: 3 }}>
          <Masonry gutter="10px">
            {socialFeeds.map((feed, index) => {
              return (
                <div
                  key={index}
                  className="px-2 py-4 border border-black max-h-fit rounded-lg flex flex-col text-black"
                  style={{
                    minHeight: "fit-content",
                    boxShadow: "5px 6px 0px 0px #000000B0",
                  }}
                >
                  {/* <div className="flex items-center">
                    <Image
                      src={feed.image}
                      height={50}
                      width={50}
                      className="rounded-[50%]"
                    />
                    <div className="ms-[5px] flex flex-col text-[12px]">
                      {feed.name && (
                        <span className="font-semibold">{feed.name}</span>
                      )}
                      {feed.userName && <span>{feed.userName}</span>}
                    </div>
                    <Image
                      src={feed.socialImg}
                      height={30}
                      width={30}
                      className="ms-auto"
                    />
                  </div> */}
                  {/* {feed.text && <p className="text-[14px]">{feed.text}</p>} */}
                  <LinkedInEmbed
                    url="https://www.linkedin.com/embed/feed/update/urn:li:share:7103454613785198593"
                    width={250}
                    height={350}
                  />
                  {/* <Image
                    src={feed.cover}
                    height={50}
                    width={50}
                    className="w-[100%] h-auto mt-2"
                    unoptimized
                  /> */}
                </div>
              );
            })}
            <div className="font-[Pacifico] text-[#b3b3b3;] text-6xl flex justify-center items-center hover:text-[black] p-3">
              Refresh
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

export default SocialFeeds;
