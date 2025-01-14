import Camp from "@/components/Home/Camp/Camp";
import Features from "@/components/Home/Features/Features";
import GetApp from "@/components/Home/GetApp/GetApp";
import Guide from "@/components/Home/Guide/Guide";
import Hero from "@/components/Home/Hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <Camp/>
    <Guide/>
    <Features/>
    <GetApp/>
    </>
    
  );
}
