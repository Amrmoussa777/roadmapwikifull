// roadmap view
"use client";
import React, { useState } from "react";

const tags = ["HTML", "CSS", "JavaScript", "React", "Redux", "TypeScript"];

const roadmapSteps = [
  {
    id: 1,
    title: "Step 1",
    tag: "Step 1 tag",
    duration: "2 days",
    status: "completed",
  },
  {
    id: 2,
    title: "Step 2",
    tag: "Step 2 tag",
    duration: "1 week",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Step 3",
    tag: "Step 3 tag",
    duration: "5 days",
    status: "not-started",
  },
  {
    id: 4,
    title: "Step 4",
    tag: "Step 4 tag",
    duration: "3 days",
    status: "not-started",
  },
  {
    id: 5,
    title: "Step 5",
    tag: "Step 5 tag",
    duration: "1 month",
    status: "not-started",
  },
  {
    id: 1,
    title: "Step 1",
    tag: "Step 1 tag",
    duration: "2 days",
    status: "completed",
  },
  {
    id: 2,
    title: "Step 2",
    tag: "Step 2 tag",
    duration: "1 week",
    status: "in-progress",
  },
  {
    id: 3,
    title: "Step 3",
    tag: "Step 3 tag",
    duration: "5 days",
    status: "not-started",
  },
  {
    id: 4,
    title: "Step 4",
    tag: "Step 4 tag",
    duration: "3 days",
    status: "not-started",
  },
];
export default function RoadmapView() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [selectedStep, setSelectedStep] = useState(null);

  const handleStepClick = (step: any) => {
    setSelectedStep(step);
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedStep(null);
  };

  return (
    <div className="relative grid-background  py-8">
      <div className="relative flex flex-col gap-8 items-center ">
        <div className="absolute roadmap-dashed z-0 left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px]"></div>
        <div className="roadmap-start z-10 bg-orange-500 text-white rounded-full p-2 px-4 text-center flex gap-2 items-center">
          <img src="/icons/flag.svg" alt="flag" className="h-6 w-6 " />
          <span className="text-[20px]">FrontEnd 🚀</span>
        </div>
        {roadmapSteps.map((step, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-2 z-10 items-start justify-between p-2 bg-white rounded-md min-h-[70px] 
            border border-stroke-gray/50 min-w-[400px]  hover:scale-105 transition ease-in duration-500 shadow-sm"
              onClick={() => handleStepClick(step)}
            >
              <div className="flex justify-between items-center gap-2 w-full">
                <div className="flex gap-1 items-center">
                  <div className="bg-[#ACB5B7] h-4 w-4 rounded-md "></div>
                  <span className="font-outfit font-normal text-[#181818]">
                    {step.title}
                  </span>
                </div>

                <div className="flex gap-1 items-center flex-wrap max-w-[50%]">
                  <span className=" rounded-full  bg-red-500 text-white text-inter text-[12px] px-[7px] py-[2px]">
                    {step.tag}
                  </span>
                  <span className=" rounded-full  bg-green-500 text-white text-inter text-[12px] px-[7px] py-[2px]">
                    {step.tag}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center gap-2 w-full">
                <div className="flex gap-1 items-center">
                  <img
                    src="/icons/stepDuration.svg"
                    alt="stepDuration"
                    className="h-4 w-4 "
                  />
                  <span className="font-outfit font-light text-[12px] text-secondary-foreground-2">
                    {step.duration}
                  </span>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="flex gap-1 items-center">
                    <img
                      src="/icons/notStarted.svg"
                      alt="notStarted"
                      className="h-4 w-4 "
                    />
                    <span className="font-outfit font-light text-[12px] text-secondary-foreground-2">
                      {step.status}
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img
                      src="/icons/video.svg"
                      alt="videoICon"
                      className="h-4 w-4 "
                    />
                    <span className="font-outfit font-light text-[12px] text-secondary-foreground-2">
                      4
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img
                      src="/icons/image.svg"
                      alt="imageIcon"
                      className="h-4 w-4 "
                    />
                    <span className="font-outfit font-light text-[12px] text-secondary-foreground-2">
                      12
                    </span>
                  </div>
                </div>
              </div>
              {step.status !== "in-progress" ? (
                <></>
              ) : (
                <div className="flex flex-col gap-1 w-full pt-2">
                  <div className="w-full bg-slate-100 h-[2px]"></div>
                  <div
                    className="font-inter text-[14px] font-medium text-center bg-primary
                   text-white w-full h-[40px] p-2 rounded-sm  cursor-pointer"
                  >
                    complete Task
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* If isOverlayOpen is true, render the overlay with the selected step details. */}
      {isOverlayOpen && (
        <div
          className="absolute inset-0 bg-white mb-2 rounded  
        flex items-center justify-center z-50 "
        >
          <div className="bg-white p-4 rounded w-full h-full">
            <div className="flex flex-col justify-start items-center gap-2 w-full ">
              <div className="flex flex-col gap-2 items-center w-full">
                <div className="self-start flex items-center justify-between w-full">
                  <div className="self-start flex items-center gap-2">
                    <span className="font-outfit font-normal text-[#181818] text-[20px]">
                      HTML & CSS
                    </span>
                    <div className="flex gap-1 items-center justify-end flex-wrap">
                      {tags.map((exp, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-center font-inter text-[12px] font-medium h-[30px] text-secondery-foreground px-4
                rounded-3xl border border-stroke-gray text-center"
                        >
                          {exp}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 items-center justify-end">
                    <img
                      src="/icons/close.svg"
                      alt="close"
                      className="h-5 w-5 cursor-pointer hover:scale-125 
                        transform ease-in-out duration-500 ml-8"
                      onClick={closeOverlay}
                    />
                  </div>
                </div>
                <div className="bg-slate-100  w-full h-[1px]" />
              </div>
              <div>dsvsd</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
