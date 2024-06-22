import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const steps = [
  {
    title: "Explore Roadmaps",
    desc: "Discover a variety of expertly crafted roadmaps.",
  },
  {
    title: "Choose Your Path",
    desc: "Select the roadmap that aligns with your goals.",
  },
  {
    title: "Join the Community",
    desc: "Engage with a supportive community of like-minded individuals who share your goals.",
  },
  {
    title: " Get Expert Support",
    desc: " Connect with the roadmap's creator and other experts in the community.",
  },

  // Add more objects here...
];
export function HowItWorks() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="navBar" size={"Navbar"}>
          How It Works
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <h1 className="text-3xl  font-bold text-title-foreground">
            How it works
          </h1>
          <SheetDescription>
            let's have a look of what you will have.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col items-center justify-center gap-2 py-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="flex flex-col items-center  p-2 bg-slate-50 rounded-md ">
                <span className="font-bold text-lg text-primary">
                  {step.title}
                </span>
                <p className="text-gray-400 my-auto ">{step.desc}</p>
              </span>
              {i !== steps.length - 1 ? (
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-1 h-1 bg-primary/50 rounded"></div>
                  <div className="w-1 h-1 bg-primary/50 rounded"></div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <SheetFooter className="mt-4">
          <SheetClose asChild>
            <Button variant={"default"}>Get started</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function OurMission() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="navBar" size={"Navbar"}>
          Our Mission
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Our Mission</SheetTitle>
        </SheetHeader>
        <div className="flex items-start mx-auto p-4 bg-slate-50 rounded-md m-2">
          <ul className="list-disc text-m text-left my-2 text-gray-500 pl-2">
            <li>
              At <span className="text-m font-bold">Roadmap</span>, we are
              dedicated to providing detailed, tailored roadmaps to help
              individuals achieve their goals created by experts
            </li>
            <li>We help experts share their experiences.</li>
            <li>
              Our mission is to guide users on their journey to success with
              expertly designed steps crafted by industry experts.
            </li>
            <li>
              Think of us as a platform like Reddit, but with structured
              roadmaps instead of pinned messages, enabling people to
              communicate and collaborate on achieving their goals.
            </li>
            <li>
              We empower experts to create roadmaps, share their experiences,
              and build communities around their areas of expertise.
            </li>
            <li>
              Our platform not only helps users follow structured plans but also
              fosters collaboration and support among community members.
            </li>
          </ul>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
