"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";

import { Squash as Hamburger } from "hamburger-react";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const links = [
    { name: "My Story", to: "#" },
    { name: "Service", to: "#" },
    { name: "Works", to: "#" },
    { name: "Social", to: "#" },
  ];
  return (
    <div className="w-full flex justify-center">
      {/* desktop navbar */}
      <div className="md:flex hidden bg fixed top-3 backdrop-blur-sm bg-white/1 border border-[--color-border1] rounded-[50px] py-2 pe-2 ps-4 w-[98%] mx-auto items-center ">
        <Link href={"#"}>
          <span className="font-[Pacifico] text-[24px] font-normal leading-[40px] tracking-wide">
            Sravan Kumar Angadi
          </span>
        </Link>

        <div className="flex gap-6 mx-auto">
          {links.map((link, index) => {
            return (
              <Link
                href={`${link.to}`}
                key={index}
                className="text-sm font-bold leading-7 tracking-wider"
              >{`${link.name}`}</Link>
            );
          })}
        </div>

        <div
          id="letsTalkBtn"
          className="ml-auto border border-[--color-border1] rounded-[50px] px-4 uppercase py-2 flex gap-3 items-center bg-black w-fit"
        >
          <div className="min-h-[8.5px] min-w-[8.5px] max-w-[8.5px] bg-[--color-green1] rounded-[50%] "></div>
          <div className={`${styles["m-scroll"]}`}>
            <div className={`${styles["m-scroll__title"]}`}>
              <div>
                <p>Let's Talk &nbsp;</p>
                <p>Let's Talk &nbsp;</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile view navbar */}
      <div className="md:hidden flex bg fixed top-3 backdrop-blur-sm bg-white/1 border border-[--color-border1] rounded-[50px] py-1 pe-5 ps-4 w-[98%] mx-auto justify-between items-center ">
        <Link href={"#"}>
          <span className="font-[Pacifico] text-[18px] font-normal leading-[40px] tracking-wide">
            Sravan Kumar Angadi
          </span>
        </Link>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
    </div>
  );
}

export default Header;
