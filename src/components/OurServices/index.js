import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import web from '../../images/Crouselimage/web.png'
import app from '../../images/Crouselimage/app.png'
import soft from '../../images/Crouselimage/soft.png'
import email from '../../images/Crouselimage/email.png'
import search from '../../images/Crouselimage/search.png'
import market from '../../images/Crouselimage/market.png'
import QR from '../../images/Crouselimage/QR.png'
import project from '../../images/Crouselimage/project.png'
import pen from '../../images/Crouselimage/pen.png'
import Image from 'next/image'

function OurServices() {


  const data=[
    {
      icon:web,
      title:'web development',
      desc:"Elevate your online experience with our expert web development services"
    },
    {
      icon:app,
      title:'app development',
      desc:"Trust our expertise for seamless and impactful app development."
    },
    {
      icon:soft,
      title:'software development',
      desc:"Empowering your digital journey through expert software development."
    },
    {
      icon:email,
      title:'email marketing',
      desc:"Elevate your outreach and engagement with our tailored email marketing solutions."
    },
    {
      icon:search,
      title:'seo',
      desc:"Let us optimize your digital presence for top search engine rankings and increased traffic."
    },
    {
      icon:market,
      title:'social media marketing',
      desc:"Elevate your brand awareness and engagement with our tailored social media solutions."
    },
    {
      icon:pen,
      title:'ui ux design',
      desc:"Let us shape your digital journey with our UI/UX expertise"
    },
    {
      icon:QR,
      title:'QR TECHNOLOGY',
      desc:"Explore the future of seamless interactions with our cutting-edge QR solutions."
    },
    {
      icon:project,
      title:'project management',
      desc:"Efficiently guiding your projects to success with our expert project management solutions."
    },
  ]
  return (
    <div className="flex w-full flex-col justify-center items-center gap-8 mx-auto px-8 py-8 ">
      <div>
        <h1>Our Services</h1>
      </div>
      <div className="flex justify-start items-center  gap-4 flex-col w-full mx-auto  ">
       

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4 "
        > 
         <h6 className="font-bold uppercase text-white text-sm leading-7 py-4">angadi world technology</h6>
          <CarouselContent>
            {data.map((value, index) => (
              <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="rounded-none bg-[#FFFFFF1A] border-none">
                    <CardContent className="flex flex-col items-start justify-center aspect-square w-full p-3 gap-4">
                     <Image className="h-12 w-12" src={value.icon}/>
                     <h6 className="text-white uppercase font-semibold text-sm">{value.title}</h6>
                     <p className="text-white text-xs font-extralight w-auto">{value.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute md:top-8 md:right-32 -bottom-8 left-12">
            <CarouselPrevious className="bg-[rgb(0,0,0,0.6)] text-sm" />
            <CarouselNext className="bg-[rgb(0,0,0,0.6)] text-sm"/>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default OurServices;
