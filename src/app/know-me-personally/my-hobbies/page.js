"use client";
import React, { useLayoutEffect } from "react";
import Image from "next/image";
import arrow from "@/images/common/Arrow.png";
import { useRouter } from "next/navigation";

import photography from "@/images/lifestyle/my-hobbies/photography.png";
import reading from "@/images/lifestyle/my-hobbies/reading.png";
import tennis from "@/images/lifestyle/my-hobbies/tennis.png";
import travelling from "@/images/lifestyle/my-hobbies/travelling.png";

function Page() {
  const router = useRouter();
  const hobbies = [
    {
      image: travelling,
      title: "travelling",
      text: "Traveling fuels my soul with adventure and discovery. From vibrant cities to serene landscapes, each journey unfolds new cultures and experiences. Immersed in local life, I embrace diversity and forge connections. Every destination is a canvas for exploration, where I collect moments, not possessions. Traveling is my passion, a constant source of inspiration and growth.",
    },
    {
      image: photography,
      title: "photography",
      text: "A visual language through which I capture moments frozen in time. With every click of the shutter, I immortalize emotions, landscapes, and stories. From the golden hues of sunset to the intricate details of everyday life, each frame tells a unique tale. Through my camera, I preserve memories and share glimpses of the world as I perceive it.",
    },
    {
      image: tennis,
      title: "tennis",
      text: "A game of precision, strategy, and relentless determination. With each serve, volley, and backhand, I embrace the challenge and exhilaration of the court. It's a sport that demands both physical prowess and mental agility, pushing me to constantly improve and adapt. I find not just a game, but a lifelong passion that inspires and energizes me.",
    },
    {
      image: reading,
      title: "reading",
      text: "Reading books captivates me, offering a passport to diverse worlds and experiences. With each page turned, I journey through imagination, gaining insights and empathy. It's a lifelong adventure of discovery and growth.",
    },
  ];

  useLayoutEffect(() => {
    const body = document.getElementsByTagName("body");
    body[0].style.backgroundColor = "white";
    body[0].style.color = "black";

    return () => {
      body[0].style.backgroundColor = "black";
      body[0].style.color = "white";
    };
  }, []);
  return (
    <div className="pt-20 min-h-[100vh]">
      <div className="flex items-center border-b-2 border-b-[#858585] max-w-[800px] mx-auto py-5  ">
        <Image
          src={arrow}
          style={{
            rotate: "-90deg",
            width: "40px",
            marginRight: "30px",
            cursor: "pointer",
          }}
          onClick={() => router.back()}
        />
        <p className="text-5xl uppercase font-bold"> my hobbies</p>
      </div>
      <div className="mt-10  max-w-[800px] mx-auto">
        {hobbies.map((hobby) => {
          return (
            <div className="flex flex-wrap items-center flex-col md:flex-row gap-[20px] mb-10 px-5">
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src={hobby.image}
                  style={{ width: "75%", height: "auto", minWidth: "150px" }}
                />
              </div>
              <div className="flex-1">
                <p className="uppercase font-bold text-3xl">{hobby.title}</p>
                <p className="text-justify">{hobby.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
