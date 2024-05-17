import Image from "next/image";
import { Star } from "lucide-react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/landingPage/HeroSection";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
    </>
  );
}
