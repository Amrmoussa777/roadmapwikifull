import { Button } from "@/components/ui/button";
import Navbar from "../../../components/Navbar";
import RoadmapView from "../roadmapview";
import RoadmapCommunity from "../roadmapCommunity";

interface RoadmapsProps {
  params: {
    id: string;
  };
  searchParams: {
    new: string;
  };
}

const experiences = ["Front end", "UI/UX", "version control"];
const socialMedia = {
  twitter: "/socialMedia/twitter.svg",
  youtube: "/socialMedia/yy.svg",
  linkedin: "/socialMedia/lnkdin.svg",
  discord: "/socialMedia/discord.svg",
};
const tags = ["HTML", "CSS", "React", "Next", "Tailwand", "Git"];
export default function Roadmaps({ params, searchParams }: RoadmapsProps) {
  return (
    <div className="bg-primary-background min-h-screen  ">
      {/* Content for the page */}
      <div className="flex flex-col items-start md:flex-row">
        {/* creator profile */}
        <div className=" basis-1/5 bg-white rounded-md m-2 p-4  min-w-[250px] md:sticky md:top-2 z-50">
          <div className="flex flex-col gap-4 items-center justify-start my-4">
            <img
              src="/pp.jpeg"
              alt="Creator Profile"
              className="h-32 w-32 rounded-full  border-4 border-primary  object-cover"
            />
            <div className="flex flex-col  items-center">
              <div>
                <span className="font-outfit font-semibold  text-[24px]">
                  Amr khalil
                </span>
                <span className="font-outfit text-[16px] text-subtitle-foreground font-[5]">
                  {"    "}
                  @amrkhalill
                </span>
              </div>

              <span className="font-outfit text-[16px] text-subtitle-foreground font-[5]">
                Software engineer
              </span>
            </div>
            <div className="flex  justify-between items-center  w-full gap-2">
              <Button variant="follow" size={"follow"} className="flex-auto ">
                Follow
              </Button>
              <img
                src="/icons/message.svg"
                alt="message"
                className="h-10 w-10 hover:bg-slate-600 
                rounded-full cursor-pointer border-2 hover:fill-primary hover:border-slate-500 hover:shadow-none"
              />
            </div>
          </div>
          <span className="text-secondery-foreground font-inter text-[16px] font-normal "></span>
          <div className="flex flex-col gap-4">
            <div className="">
              <div className="font-inter font-light text-[12px] text-secondery-foreground leading-[140%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummytext
                ever example text
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-poppins text-[12px] font-[200px] text-secondary-foreground-2">
                Followers
              </span>
              <span className="font-inter font-[400px] text-[14px] text-secondery-foreground">
                1299
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-poppins text-[12px] font-[200px] text-secondary-foreground-2">
                Roadmaps subscribers
              </span>
              <span className="font-inter font-[400px] text-[14px] text-secondery-foreground">
                2000
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-poppins text-[12px] font-[200px] text-secondary-foreground-2">
                Experience
              </span>
              <div className="flex gap-2 flex-wrap">
                {/*badges of experience*/}
                {experiences.map((exp, i) => (
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

            <div className="flex flex-col">
              <span className="font-poppins text-[12px] font-[200px] text-secondary-foreground-2">
                Social Media
              </span>
              <div className="flex gap-2 flex-wrap">
                {/*social media*/}
                {Object.keys(socialMedia).map((platform, i) => {
                  return (
                    <img
                      key={i}
                      src={socialMedia[platform as keyof typeof socialMedia]}
                      alt={platform}
                      className="h-10 w-10 cursor-pointer"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-auto m-2 ">
          {/* Content for the second column */}
          <div className="bg-white rounded-md   overflow-hidden  z-50 ">
            {/* Roadmap Header*/}
            <div className="flex flex-col gap-1 justify-start "></div>
            <img
              key={"roadmapHeader"}
              src={"/roadmapCover.png"}
              alt={"RoadmapHeader"}
              className="h-[75px] w-full cursor-pointer object-cover "
            />
            <div className="flex flex-col md:flex-row justify-between items-center gap-[3px] p-2 ">
              <div className="font-outfit font-semibold text-[30px]  text-secondery-foreground leading-7  p-4 ">
                Frontend Developer Roadmap
                <div className="font-outfit font-extralight text-[12px]  text-subtitle-foreground hidden">
                  Learn how to become front end engineer in 30m with expert
                </div>
                <div className="flex flex-row gap-2 hidden">
                  <div className="flex flex-row gap-1 justify-center items-center">
                    <img
                      src="/icons/duration.svg"
                      alt="duration"
                      className="h-4 w-4"
                    />
                    <span className="font-outfit font-light text-[12px] text-icon-fill">
                      12 weeks
                    </span>
                  </div>
                  <div className="flex flex-row gap-1 justify-center items-center">
                    <img
                      src="/icons/subscribers.svg"
                      alt="subscribers"
                      className="h-4 w-4"
                    />
                    <span className="font-outfit font-light text-[12px] text-icon-fill">
                      15 subscribers
                    </span>
                  </div>
                  <div className="flex flex-row gap-1 justify-center items-center">
                    <img
                      src="/icons/steps.svg"
                      alt="steps"
                      className="h-4 w-4"
                    />
                    <span className="font-outfit font-light text-[12px] text-icon-fill">
                      25 steps
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center justify-center px-8 ">
                <Button
                  variant="subscribe"
                  size={"subscribe"}
                  className="overflow-hidden min-w-[180px] "
                >
                  <div className="flex gap-1 items-center justify-center h-full ">
                    <img
                      src="/icons/subscribeIcon.svg"
                      alt="share"
                      className="h-8 w-8 ml-2"
                    />
                    <span className="px-1">Subscribe</span>
                    <span className="bg-semilight-red p-4 line-through">
                      10$
                    </span>
                  </div>
                </Button>

                <img
                  src="/icons/share.svg"
                  alt="share"
                  className="h-18 w-18 rounded-full  object-cover cursor-pointer border-2 border-slate-100"
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-row gap-2 my-2 justify-start items-start">
            <div className="flex-auto min-w-[450px] ">
              <RoadmapView />
              {/*community posts*/}
              <RoadmapCommunity />
              
            </div>
            <div className="lg:flex flex-col gap-4 bg-white w-[500px] p-4 py-3 rounded-md sticky top-2 hidden ">
              <div className="">
                <span className="font-poppins text-[14px] font-normal text-secondary-foreground-2">
                  Description
                </span>
                <div className="font-inter font-light text-[12px] text-secondery-foreground leading-[140%] min-w-fit">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummytext ever example text
                </div>
              </div>
              {/*font-poppins text-[14px] font-medium text-secondary-foreground-2*/}
              <div className="flex flex-col justify-start items-start gap-2">
                <div className="flex flex-col  justify-center items-start ">
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <img
                      src="/icons/duration.svg"
                      alt="duration"
                      className="h-4 w-4"
                    />
                    <span className="font-poppins text-[14px] font-normal text-secondary-foreground-2">
                      Duration
                    </span>
                  </div>
                  <span className="font-inter font-normal text-[12px] text-secondary-foreground">
                    12 weeks
                  </span>
                </div>
                <div className="flex flex-col  justify-center items-start ">
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <img
                      src="/icons/subscribers.svg"
                      alt="subscribers"
                      className="h-4 w-4"
                    />
                    <span className="font-poppins text-[14px] font-normal text-secondary-foreground-2">
                      Subscribers
                    </span>
                  </div>
                  <span className="font-inter font-normal text-[12px] text-secondary-foreground">
                    20000
                  </span>
                </div>
                <div className="flex flex-col  justify-center items-start ">
                  <div className="flex flex-row gap-1 items-center justify-center">
                    <img
                      src="/icons/steps.svg"
                      alt="substepsscribers"
                      className="h-4 w-4 "
                    />
                    <span className="font-poppins text-[14px] font-normal text-secondary-foreground-2">
                      Steps
                    </span>
                  </div>
                  <span className="font-inter font-normal text-[12px] text-secondary-foreground">
                    25
                  </span>
                </div>
              </div>

              <div className="flex flex-col">
                <span className="font-poppins text-[12px] font-[200px] text-secondary-foreground-2 mb-1">
                  Tags
                </span>
                <div className="flex gap-2 flex-wrap">
                  {/*badges of experience*/}
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

              {/* <div className="flex flex-col">
                <span className="font-poppins text-[12px] font-[200px] text-secondary-foreground-2">
                  Social Media
                </span>
                <div className="flex gap-2 flex-wrap">
                  {/*social media*/}
              {/* {Object.keys(socialMedia).map((platform, i) => {
                    return (
                      <img
                        key={i}
                        src={socialMedia[platform as keyof typeof socialMedia]}
                        alt={platform}
                        className="h-10 w-10 cursor-pointer"
                      />
                    );
                  })}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
