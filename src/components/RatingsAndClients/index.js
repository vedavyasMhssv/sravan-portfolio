import React from "react";
import Image from "next/image";

import alpha from "@/images/our-clients/alpha.png";
import amazon from "@/images/our-clients/amazon.png";
import sweets from "@/images/our-clients/amrutha-sweets.png";
import cfinancio from "@/images/our-clients/cfinancio.png";
import gopalan from "@/images/our-clients/gopalan.png";
import hungerDrug from "@/images/our-clients/hunger-drug.png";
import kepio from "@/images/our-clients/kepio.png";
import mbt from "@/images/our-clients/mythri-business-technologies.png";
import nehaGroup from "@/images/our-clients/neha-group.png";
import parentsEye from "@/images/our-clients/parents-eye.png";
import pioneerOnline from "@/images/our-clients/pioneer-online.png";
import promptitude from "@/images/our-clients/promptitude.png";
import sbg from "@/images/our-clients/sbg.png";
import shakthi from "@/images/our-clients/shakthi.png";
import ukd from "@/images/our-clients/ukd.png";
import wdh from "@/images/our-clients/wdh.png";
import wink from "@/images/our-clients/wink.png";

import rating from "@/images/our-clients/rating.png";
import stars from "@/images/our-clients/stars.png";

function RatingsAndClients() {
  const ratings = [
    {
      content:
        "AWT did a great job in designing our website and they had a great team who has helped us all through the project from initial discussions to getting our website online. Sravan, Abhi and Dhivya worked seamlessly with our team. Expert's in what they do and strongly suggest everyone. Thank you.",
      name: "Sudheer",
      role: "web development",
      rating: "5",
    },
    {
      content:
        "I want to thank you for giving me the opportunity to serve as a intern at Angadi World Technologies.I have gained valuable insight and increased my interest in pursuing a career.",
      name: "Mary Madhuri",
      role: "intern",
      rating: "5",
    },
    {
      content:
        "Best place to get any kind of Web and Mobile Applications to be Developed",
      name: "Rohan Gunai",
      role: "development",
      rating: "5",
    },
    {
      content:
        "For interns, this Angadi world Technologies company offers the best opportunity to gain valuable learning experiences.",
      name: "Veluri Sai kusuma",
      role: "intern",
      rating: "5",
    },
  ];
  return (
    <div className="bg-white text-black py-10">
      <div className="mt-5 mb-20  p-10 flex flex-wrap  md:max-w-[80%] mx-auto">
        <div className="flex flex-col flex-1 px-10">
          <p className="text-3xl font-bold leading-9 tracking-wide  text-black">
            your satisfaction is my first priority. Delightful Testimonials from
            Our Satisfied Clients!
          </p>
          <Image
            src={rating}
            alt="alpha"
            height={400}
            width={400}
            unoptimized
            className="mt-5"
          />
        </div>
        <div className="flex flex-col flex-1 min-h-[50px] px-16  justify-between">
          {ratings &&
            ratings.map((rating, index) => {
              return (
                <div
                  className="flex flex-col border-b border-b-black"
                  key={index}
                >
                  <p className="text-sm font-semibold leading-tight text-justify">
                    {rating.content}
                  </p>
                  <div className="flex my-1 justify-between items-center">
                    <p>
                      <span className="text-lg font-bold leading-snug">
                        {rating.name}
                      </span>{" "}
                      -{" "}
                      <span className="text-base font-medium leading-tight">
                        {" "}
                        {rating.role}
                      </span>
                    </p>
                    <Image
                      src={stars}
                      alt="rating"
                      height={100}
                      width={100}
                      style={{
                        width: "75px",
                        height: "14px",
                      }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div className="">
        <p className="m-w-fit text-xl font-bold leading-tight tracking-tighter uppercase text-center mb-10">
          companies who trust us
        </p>
        <div className="mt-10 border-t-2 border-t-black border-b-2 border-b-black py-1">
          <div className="slider  border-t-2 border-t-black border-b-2 border-b-black">
            <ul className="flex items-center">
              <li>
                <Image src={alpha} alt="alpha" height={150} width={150} />
              </li>
              <li>
                <Image src={amazon} alt="amazon" height={150} width={150} />
              </li>
              <li>
                <Image src={sweets} alt="sweets" height={150} width={150} />
              </li>{" "}
              <li>
                <Image
                  src={cfinancio}
                  alt="cfinancio"
                  height={150}
                  width={150}
                />
              </li>{" "}
              <li>
                <Image src={gopalan} alt="gopalan" height={150} width={150} />
              </li>{" "}
              <li>
                <Image
                  src={hungerDrug}
                  alt="hungerDrug"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image src={kepio} alt="kepio" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={mbt} alt="mbt" height={150} width={150} />
              </li>{" "}
              <li>
                <Image
                  src={nehaGroup}
                  alt="nehaGroup"
                  height={150}
                  width={150}
                />
              </li>{" "}
              <li>
                <Image
                  src={parentsEye}
                  alt="parentsEye"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image
                  src={pioneerOnline}
                  alt="pioneerOnline"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image
                  src={promptitude}
                  alt="promptitude"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image src={sbg} alt="sbg" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={shakthi} alt="shakthi" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={ukd} alt="amazon" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={wdh} alt="wdh" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={wink} alt="wink" height={150} width={150} />
              </li>
              <li>
                <Image src={alpha} alt="alpha" height={150} width={150} />
              </li>
              <li>
                <Image src={amazon} alt="amazon" height={150} width={150} />
              </li>
              <li>
                <Image src={sweets} alt="sweets" height={150} width={150} />
              </li>{" "}
              <li>
                <Image
                  src={cfinancio}
                  alt="cfinancio"
                  height={150}
                  width={150}
                />
              </li>{" "}
              <li>
                <Image src={gopalan} alt="gopalan" height={150} width={150} />
              </li>{" "}
              <li>
                <Image
                  src={hungerDrug}
                  alt="hungerDrug"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image src={kepio} alt="kepio" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={mbt} alt="mbt" height={150} width={150} />
              </li>{" "}
              <li>
                <Image
                  src={nehaGroup}
                  alt="nehaGroup"
                  height={150}
                  width={150}
                />
              </li>{" "}
              <li>
                <Image
                  src={parentsEye}
                  alt="parentsEye"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image
                  src={pioneerOnline}
                  alt="pioneerOnline"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image
                  src={promptitude}
                  alt="promptitude"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image src={sbg} alt="sbg" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={shakthi} alt="shakthi" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={ukd} alt="amazon" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={wdh} alt="wdh" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={wink} alt="wink" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={alpha} alt="alpha" height={150} width={150} />
              </li>
              <li>
                <Image src={amazon} alt="amazon" height={150} width={150} />
              </li>
              <li>
                <Image src={sweets} alt="sweets" height={150} width={150} />
              </li>{" "}
              <li>
                <Image
                  src={cfinancio}
                  alt="cfinancio"
                  height={150}
                  width={150}
                />
              </li>{" "}
              <li>
                <Image src={gopalan} alt="gopalan" height={150} width={150} />
              </li>{" "}
              <li>
                <Image
                  src={hungerDrug}
                  alt="hungerDrug"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image src={kepio} alt="kepio" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={mbt} alt="mbt" height={150} width={150} />
              </li>{" "}
              <li>
                <Image
                  src={nehaGroup}
                  alt="nehaGroup"
                  height={150}
                  width={150}
                />
              </li>{" "}
              <li>
                <Image
                  src={parentsEye}
                  alt="parentsEye"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image
                  src={pioneerOnline}
                  alt="pioneerOnline"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image
                  src={promptitude}
                  alt="promptitude"
                  height={200}
                  width={200}
                />
              </li>{" "}
              <li>
                <Image src={sbg} alt="sbg" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={shakthi} alt="shakthi" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={ukd} alt="amazon" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={wdh} alt="wdh" height={150} width={150} />
              </li>{" "}
              <li>
                <Image src={wink} alt="wink" height={150} width={150} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RatingsAndClients;
