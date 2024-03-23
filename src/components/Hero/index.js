import React from "react";
import Image from "next/image";
import sravan from "@/images/hero/sravan.png";
import orangeBlob from "@/images/common/orange-blob.png";
import { FaPhoneAlt } from "react-icons/fa";

function Hero() {
  return (
    <div className="pt-20 flex flex-wrap md:px-0 px-5 relative z-[1]" id="hero">
      <div className="flex-1 min-w-[280px] flex-col flex justify-center items-center md:justify-end md:items-end">
        <div className="max-w-fit flex flex-col gap-y-3 pb-8">
          <div className="text-md font-bold uppercase leading-22 tracking-tighter text-[--color-theme] max-w-[600px]:mx-auto">
            Sravan kumar angadi
          </div>
          <div className="text-4xl font-bold leading-tight tracking-tighter text-left max-md:text-3xl max-w-[600px]:mx-auto">
            AN ENTREPRENEUR.
          </div>
          <div className="text-[18px]  leading-7 tracking-tight text-left max-w-[330px] max-md:text-[`14px] max-md:mx-auto">
            {`Let's`} unite our efforts to achieve your goals and bring your
            dreams to life.
          </div>
          <button className="flex items-center gap-3 mt-5 bg-[#FF71431A] max-w-[330px] p-[6.5px] text-sm font-[600] rounded-[50px] uppercase max-md:mx-auto">
            <span className="bg-[--color-theme] p-[12px] rounded-[50%]">
              <FaPhoneAlt />
            </span>
            <span>{`got a project? let’s talk!`}</span>
          </button>
        </div>
      </div>
      <div className="flex-[1.5] min-w-[280px]">
        <Image src={sravan} width={700} height={500} />
      </div>
      <Image
        src={orangeBlob}
        height={500}
        width={700}
        className="absolute left-[-440px] top-[50px] max-md:left-[-450px] min-h-[500px] min-w-[700px]"
      />
    </div>
  );
}

export default Hero;
