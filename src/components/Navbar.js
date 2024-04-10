'use client'
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Button,
} from "@nextui-org/react";
import Logo from "../images/Crouselimage/LOGO.png";
import Image from "next/image";
import { createPortal } from "react-dom";
import Link from "next/link";
import styles from "./Header/index.module.css";
import Backdrop from "./Backdrop";
import { Squash as Hamburger } from "hamburger-react";



const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isOpen, setOpen] = useState(false);

  

  const links = [
    { name: "My Story", to: "#" },
    { name: "Service", to: "#" },
    { name: "Works", to: "#" },
    { name: "Social", to: "#" },
  ];

  const menuItems = [
    "My Story",
    "Service",
    "Works",
    "Social"
    
  ];
  return (
    <>
    <Navbar
      maxWidth="2xl"
      className="w-[98%] mx-auto  backdrop-blur-md  bg-[rgb(0,0,0,0.2)]   border  border-white  h-14 rounded-full"
      shouldHideOnScroll
    >
      <NavbarBrand className="flex items-center justify-start ">
        <Image className="rounded-full h-20 w-20 object-contain absolute left-0 " src={Logo} />
        <span className=" font-[Pacifico] md:text-[24px] text-lg font-normal leading-[40px] tracking-wide ml-10">
          Sravan Kumar Angadi
        </span>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          <Link
            id="Mystory"
            className="text-sm font-bold leading-7 tracking-wider text-white "
            color="foreground"
            href="#"
          >
            My story
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
          id="Service"
            className="text-sm font-bold leading-7 tracking-wider text-white"
            href="#"
            aria-current="page"
          >
            Service
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
          id="Works"
            className="text-sm font-bold leading-7 tracking-wider text-white"
            href="#"
          >
            Works
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
          id="Social"
            className="text-sm font-bold leading-7 tracking-wider text-white"
            href="#"
          >
            Social
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
        <button
            id="letsTalkBtn"
            className="hidden md:flex ml-auto border border-[--color-border1] rounded-[50px] px-4 uppercase py-2  gap-3 items-center bg-black w-fit"
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
          </button>
          <div className="flex md:hidden">
          <NavbarMenuToggle aria-label={isOpen ? "Close menu" : "Open menu"}>
          <Hamburger toggled={isOpen} toggle={setOpen} />

          </NavbarMenuToggle> 
          </div>
      
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-[rgb(0,0,0,0.4)] flex justify-start items-center gap-2 px-4">
      {menuItems.map((item, index) => (
          <NavbarMenuItem className="w-full border rounded-full items-center flex text-center gap-4" key={`${item}-${index}`}>
            <Link
      
              className="w-full  "
              href="#"
              size=""
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
       
      </NavbarMenu>
    </Navbar>

    </>
  );
};

export default Nav;
