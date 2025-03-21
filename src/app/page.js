import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/hero";
import ServicesSection from "./components/Card/Card";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
    <ServicesSection/>
   </div>
  );
}
