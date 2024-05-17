"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-around items-center p-2 h-[50px]">
        <div className="flex items-center gap-1">
          <Image src="/roadmap.svg" width={30} height={30} alt="Roadmap logo" />
          <h1 className="font-poppins font-semibold text-2xl ">Roadmap</h1>
        </div>

        <div className="md:hidden order-last">
          <button onClick={() => setIsOpen(!isOpen)}>
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

        <div className={`${isOpen ? "block" : "hidden"} md:flex gap-4`}>
          <Link href="/roadmaps">
            <span className="font-poppins font-medium text-base rounded-sm hover:bg-slate-100 p-2 text-title-foreground">
              Roadmaps
            </span>
          </Link>
          <Link href="/howitworks">
            <span className="font-poppins font-medium text-base rounded-sm hover:bg-slate-100 p-2 text-title-foreground">
              How it works
            </span>
          </Link>
          <Link href="/ourMission">
            <span className="font-poppins font-medium text-base rounded-sm hover:bg-slate-100 p-2 text-title-foreground">
              Our Mission
            </span>
          </Link>
        </div>

        <div className="flex -gap-1">
          <Button
            className="h-9 w-18 bg-white hover:bg-slate-100 
          rounded-r-none shadow-none  font-inter text-base text-title-foreground font-medium"
          >
            Log In
          </Button>
          <Button className="h-9 w-32 -ml-1  font-inter text-base text-white font-semibold bg-primary-background hover:bg-primary">
            Get started
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
