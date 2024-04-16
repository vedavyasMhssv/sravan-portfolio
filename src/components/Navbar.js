"use client";
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
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { useRouter,usePathname   } from 'next/navigation'

const Nav = () => {
  const router = useRouter()
  const pathname = usePathname()


  const active=`bg-white text-black w-full border rounded-full items-center justify-center flex text-center gap-4`
  const unactive=`w-full border rounded-full items-center justify-center flex text-center gap-4`

 
  return (
    <>
      <Navbar
        maxWidth="2xl"
        className="w-[98%] mx-auto  backdrop-blur-md  bg-black   border  border-white  h-14 rounded-full"
        shouldHideOnScroll
      >
        <NavbarBrand className="flex items-center justify-start ">
          <Image
            className="rounded-full h-20 w-20 object-contain absolute left-0 "
            src={Logo}
          />
          <span className=" font-[Pacifico] md:text-[24px] text-lg font-normal leading-[40px] tracking-wide ml-10 capitalize">
            Sravan Kumar Angadi
          </span>
        </NavbarBrand>
        <NavbarContent
          className="hidden sm:flex gap-12 uppercase ml-12"
          justify="end"
        >
          <NavbarItem>
            <Link
              id="Mystory"
              className="text-sm font-bold leading-7 tracking-wider text-white hover:text-[#FF7143] transition-all duration-700 "
              color="foreground"
              href="#"
            >
              My story
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              id="Service"
              className="text-sm font-bold leading-7 tracking-wider text-white hover:text-[#FF7143] transition-all duration-700"
              href="#"
              aria-current="page"
            >
              Service
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
          <Link
          id="Works"
            className="text-sm font-bold leading-7 tracking-wider text-white hover:text-[#FF7143] transition-all duration-700"
            href="#"
          >
            Works
          </Link>
        </NavbarItem> */}
          <NavbarItem>
            <Link
              id="Social"
              className="text-sm font-bold leading-7 tracking-wider text-white hover:text-[#FF7143] transition-all duration-700"
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
              <Sheet>
                <SheetTrigger asChild>
                  <IoMdMenu size={24} />
                  {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
                </SheetTrigger>
                <SheetContent className="bg-transparent backdrop-blur-sm border-none">
                  <SheetHeader>
                    <SheetTitle>
                      <span className="text-white font-[Pacifico] md:text-[24px] text-lg font-normal leading-[40px] tracking-wide ">
                        Sravan Kumar Angadi
                      </span>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="py-4 border-none">
                    <div className=" flex justify-center  items-center gap-2 px-4 border-none">
                      <SheetClose onClick={()=>router.push('/')} className="w-full py-2">
                      <div
                        className={pathname==='/'?active:unactive}
                      >
                        <p className="text-center self-center">Home</p>
                      </div>

                      </SheetClose>
                    </div>
                    <div className=" flex justify-center items-center gap-2 px-4">
                      <SheetClose onClick={()=>router.push('/Mystory')} className="w-full py-2">
                      <div
                        id="Mystory"
                        className={pathname==='/Mystory'?active:unactive}
                      >
                        <p className="text-center self-center">My story</p>
                      </div>

                      </SheetClose>
                    </div>
                    <div className=" flex justify-center items-center gap-2 px-4">
                    <SheetClose onClick={()=>router.push('/Service')}  className="w-full py-2">
                      <div
                        id="Service"
                        className={pathname==='/Service'?active:unactive}
                      >
                        <p className="text-center self-center">Service</p>
                      </div>

                      </SheetClose>
                    </div>
                    <div className=" flex justify-center items-center gap-2 px-4">
                    <SheetClose  onClick={()=>router.push('/Social')}  className="w-full py-2">
                      <div
                        id="Social"
                        className={pathname==='/Social'?active:unactive}
                      >
                        <p className="text-center self-center">Social</p>
                      </div>

                      </SheetClose>
                    </div>
                  </div>

                 
                </SheetContent>
              </Sheet>
            </div>
          </NavbarItem>
        </NavbarContent>
        
      </Navbar>
    </>
  );
};

export default Nav;
