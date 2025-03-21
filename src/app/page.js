import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/hero";

export default function Home() {
  return (
   <div>
    <Navbar/>
    <HeroSection/>
   </div>
  );
}
