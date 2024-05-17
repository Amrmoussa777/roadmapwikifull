"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
const texts = [
  "Become Frontend Engineer",
  "Get Into\nHarvard",
  "Lose 10kg in 30 Days",
];

const colors = ["text-primary-background", "text-pink-900", "text-green-500"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setOpacity(1);
      }, 400);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="bg-gradient-to-tr from-gradient-start/30 via-gradient-via/10 to-gradient-end/40">
        <div className="bg-gradient-to-b from-white via-white/0 to-white/0">
          <div
            className="flex flex-col   md:flex-row md:items-center justify-around 
                   mx-[6vw] h-[calc(100vh-50px)]"
          >
            {/* Slogan and CTAs */}
            <div className="flex flex-col gap-2  mt-10 md:mt-0 md:mb-24 md:w-[35%]">
              <div className="min-h-[200px]">
                <h1 className="text-5xl font-extralight text-left  font-outfit ">
                  Your Ultimate 🚀 <br />
                  Roadmap <br />
                  To{" "}
                  <span className="overflow-hidden transition-all duration-1000 hover:translate-x-3">
                    <span
                      className={`font-outfit font-extrabold ${colors[index]} transition-all duration-1000`}
                      style={{
                        opacity: opacity,
                      }}
                    >
                      {texts[index]}
                    </span>
                  </span>
                </h1>
                <div className="flex-grow"></div>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-lg font-outfit font-medium text-title-foreground/80 ">
                  detailed roadmap steps to achieve your goals,
                  {<br />} tailered for you by industry exports.
                </p>
                <div className="flex gap-4 ">
                  <Button
                    className="h-12 w-[208px] p-[5px]   font-inter text-base text-white
                 font-semibold bg-primary-background hover:bg-primary transition 
                 ease-in-out duration-700 hover:scale-105"
                  >
                    Roadmaps
                  </Button>

                  <Button
                    variant={"outline"}
                    className="h-12 w-[208px] p-1  font-inter text-base font-bold 
                    text-title-foreground bg-transparent border-2 border-gray-300
                     hover:bg-transparent  hover:scale-105 transition ease-in-out duration-700"
                  >
                    Become a creator
                  </Button>
                </div>
              </div>
            </div>
            {/* roadmap example */}
            <h1 className="text-5xl font-extralight text-left h-44 font-outfit shrink-0">
              Your ultimate 🚀 <br />
              Roadmap <br />
              To
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
