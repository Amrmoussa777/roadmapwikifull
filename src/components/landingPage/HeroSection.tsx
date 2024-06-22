"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

const texts = [
  "Become Frontend Engineer",
  "Get Into\nHarvard",
  "Lose 10kg in 30 Days",
  "Become Frontend Engineer",
];

const images = [
  "/roadmapExamples/front.png",
  "/roadmapExamples/harvard.png",
  "/roadmapExamples/lose.png",
  "/roadmapExamples/front.png",
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(2000);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, intervalDuration);

    return () => clearInterval(interval);
  }, [intervalDuration]);

  useEffect(() => {
    if (index === 0 || index === texts.length - 1) {
      setIntervalDuration(1000);
    } else {
      setIntervalDuration(2000);
    }
  }, [index]);

  return (
    <>
      <section className="bg-gradient-to-tr from-gradient-start/30 via-gradient-via/10 to-gradient-end/40">
        <div className="bg-gradient-to-b from-white via-white/0 to-white/0">
          <div className="flex flex-col md:flex-row md:items-center justify-around mx-[6vw] h-[calc(100vh-50px)] md:gap-5">
            {/* Slogan and CTAs */}
            <div className="flex flex-col gap-2 mt-10 md:mt-0 md:mb-24 md:w-[35%]">
              <div className="min-h-[200px]">
                <h1 className="text-5xl font-extralight text-left font-outfit">
                  Your Ultimate 🚀 <br />
                  Roadmap to <br />
                  <div className="h-28 flex justify-center items-center ">
                    <div className="h-28 inline-block overflow-hidden ">
                      <div
                        className={`flex flex-col ${
                          index === 0
                            ? ""
                            : "transform transition-transform duration-1000 ease-in-out"
                        }  `}
                        style={{ transform: `translateY(-${index * 25}%)` }}
                      >
                        <div
                          className={`font-outfit font-extrabold h-28 text-primary `}
                        >
                          Become Frontend Engineer
                        </div>
                        <div
                          className={`font-outfit font-extrabold h-28 text-pink-900 `}
                        >
                          Get Into Harvard
                        </div>
                        <div
                          className={`font-outfit font-extrabold h-28  text-orange-500 `}
                        >
                          Lose 5kg in 30 Days
                        </div>
                        <div
                          className={`font-outfit font-extrabold h-28 text-primary `}
                        >
                          Become Frontend Engineer
                        </div>
                      </div>
                    </div>
                  </div>
                </h1>
                <div className="flex-grow"></div>
              </div>
              <div className="flex flex-col gap-8">
                <p className="text-[15px] font-inter font-normal text-title-foreground/80 mt-2">
                  Detailed roadmap steps to achieve your goals,
                  {<br />} tailored for you by industry experts.
                </p>
                <div className="flex gap-4">
                  <Button className="h-12 w-[208px] p-[5px] font-inter text-base text-white font-medium bg-primary hover:bg-primary transition ease-in-out duration-700 hover:scale-105">
                    Roadmaps
                  </Button>

                  <Button
                    variant={"outline"}
                    className="h-12 w-[208px] p-1 font-inter text-base font-medium text-title-foreground bg-transparent border-2 border-gray-300 hover:bg-transparent hover:scale-105 transition ease-in-out duration-700"
                  >
                    Become a creator
                  </Button>
                </div>
              </div>
            </div>
            {/* Roadmap example */}
            <div className="relative md:w-[60%] w-full h-[90%] md:h-[90%] flex justify-center items-center">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt=""
                  className={`absolute transition-opacity ${
                    index === 0 ? "duration-0" : "duration-500"
                  } ease-linear ${
                    i === index ? "opacity-100" : "opacity-0"
                  } w-full h-full object-contain`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
