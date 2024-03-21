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
export default function Home() {
  return (
    <div style={{ minHeight: "200vh" }}>
      <Hero />
      <Experience />
      <MyStory />
      <FoundersMission />
      <MyLifestyle />
      <OurServices />
      <OurWorks />
      <RatingsAndClients />
      <SocialFeeds />
      <ContactMe />
    </div>
  );
}
