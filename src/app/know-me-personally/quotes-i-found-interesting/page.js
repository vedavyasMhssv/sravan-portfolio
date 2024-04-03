"use client";
import React, { useLayoutEffect } from "react";
import Image from "next/image";
import arrow from "@/images/common/Arrow.png";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  const quotes = [
    {
      quote:
        "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle.",
      author: "Steve Jobs",
    },
    {
      quote:
        "In the midst of winter, I found there was, within me, an invincible summer.",
      author: "Albert Camus",
    },
    {
      quote: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      quote:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
    },
    {
      quote: "The best way to predict the future is to create it.",
      author: "Abraham Lincoln",
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
        <p className="text-5xl uppercase font-bold">QUOTES I FOUND</p>
      </div>
      <div className="mt-20  max-w-[800px] mx-auto">
        {quotes.map((quote) => {
          return (
            <div className="flex flex-col mb-20">
              <p
                className="text-5xl font-normal leading-relaxed text-center"
                style={{ fontFamily: "Pacifico" }}
              >
                {quote.quote}
              </p>
              <p className="text-center font-bold mt-5 text-3xl tracking-widest">
                - {quote.author}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
