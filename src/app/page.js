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
export default function Home() {
  return (
    <>
      <Header />
      <div
        style={{
          minHeight: "200vh",
          position: "relative",
          maxWidth: "100vw",
          overflow: "hidden",
        }}
      >
        <Hero />
        <Experience />
        <MyStory />
        <FoundersMission />
        <MyLifestyle />
        <OurServices />
        <OurWorks />
        {/* <RatingsAndClients /> */}
        <SocialFeeds />
        <ContactMe />
        <Image
          src={orangeBlob}
          height={500}
          width={700}
          className="absolute right-[-450px] top-[400px] min-h-[500px] min-w-[700px]"
        />
      </div>
      <Footer />
    </>
  );
}
