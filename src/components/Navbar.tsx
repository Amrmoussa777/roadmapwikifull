"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { HowItWorks, OurMission } from "./landingPage/NavBarSheets";
import { useRouter } from "next/navigation";
import Roadmaps from "../app/roadmaps/[id]/page";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="flex justify-around items-center p-2 h-[50px]">
        <div className="flex items-center gap-1">
          <Image src="/roadmap.svg" width={30} height={30} alt="Roadmap logo" />
          <h1 className="font-poppins font-normal text-2xl ">Roadmap</h1>
        </div>

        <div className="md:hidden order-last">
          <button id="isOpen" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <>
                <X size={24} />
              </>
            ) : (
              <>
                <Menu size={24} />
              </>
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "flex-col" : "hidden"
          } md:flex gap-4 justify-center items-center `}
        >
          <span id="radmaps">
            <Button
              variant="navBar"
              size="Navbar"
              onClick={() => router.push("/roadmaps")}
            >
              Roadmaps
            </Button>
          </span>
          <span id="howisstwors" className="h-9">
            <HowItWorks />
          </span>

          <span id="mission" className="h-9">
            <OurMission />
          </span>
        </div>

        <div className="flex -gap-1">
          <Button
            className="h-9 w-18 bg-white hover:bg-slate-100 
          rounded-r-none shadow-none  font-inter text-base text-title-foreground font-normal"
          >
            Log In
          </Button>
          <Button className="h-9 w-32 -ml-1  font-inter text-base text-white font-semibold bg-primary hover:bg-primary">
            Get started
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
