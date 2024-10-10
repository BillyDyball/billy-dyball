import { useState, useEffect, useRef } from "react";
import { GlassCard } from "@/components/glass-card";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { IconButton } from "./components/icon-button";
import Me from "./assets/me.webp";
import { RainbowCanvas } from "./components/rainbow-canvas";

// https://sparkly-speculoos-0c9197.netlify.app/

function App() {
  const gridRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-auto flex justify-center items-center bg-gray-950">
      <RainbowCanvas className="w-full h-full absolute rotate-45 top-1/2 right-1/2" />
      <div
        ref={gridRef}
        className="text-white m-auto p-2 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-rows-8 lg:grid-cols-4 lg:gap-4 lg:max-h-[800px]"
      >
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-3"
          rowSpan="md:row-span-4"
          containerClassName="flex items-end"
        >
          <div className="flex h-full w-2/3 flex-col justify-between">
            <h4 className="text-xl font-light">
              Hi, I'm <b className="font-bold">Billy Dyball</b>, a software
              developer with a strong passion for making cool web apps and
              mobile projects.
            </h4>
            <div className="flex gap-4">
              <IconButton>
                <GitHubLogoIcon className="h-4 w-4" />
              </IconButton>
              <IconButton variant="outline" size="icon">
                <LinkedInLogoIcon className="h-4 w-4" />
              </IconButton>
            </div>
          </div>
          <img
            src={Me}
            alt="Memoji"
            className="
            w-auto max-h-[300px] select-none absolute right-[-110px] bottom-[-20px] z-[-1] opacity-50 
            md:opacity-100 md:relative md:right-auto md:bottom-auto md:z-auto pointer-events-none
            "
          />
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-6"
          containerClassName="flex flex-col gap-2"
        >
          <h4 className="text-xl font-bold">About Me</h4>
          <p className="text-sm font-light">
            Hi, I'm Billy, a front-end software developer from England. My
            primary tools of choice inclues:
            <ul className="list-disc list-inside">
              <li>Typescript</li>
              <li>React</li>
              <li>Firebase</li>
              <li>Vercel</li>
              <li>Tailwind</li>
            </ul>
          </p>
          <p className="text-sm font-light">
            Although I have been experimenting with some ASP.NET core recently.
          </p>
          <p className="text-sm font-light">
            While I do have preferred tools I always choose the best one for the
            job, even if it's not on my usual list. My goal is to find the right
            solution for each project.
          </p>
          <p className="text-sm font-light">
            Beyond coding, I'm passionate about
          </p>
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-2 lg:col-span-1"
          rowSpan="md:row-span-4"
        >
          <h4 className="text-xl font-bold">Lets get to work!</h4>
          <div>
            <p className="text-sm font-light text-gray-400">Email</p>
            <p>billyjdyball@gmail.com</p>
          </div>
          <p className="text-sm font-light"></p>
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-2"
          rowSpan="md:row-span-2"
        >
          <h4 className="text-xl font-bold">Projects</h4>
          <div>
            <p>Gymmy</p>
            <p>Tickr</p>
            <p>Path Vizualizer</p>
          </div>
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-2"
        />
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-1"
        />
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-2"
          containerClassName="flex flex-col gap-4"
        >
          <h4 className="text-xl font-bold">Time Zone</h4>
          <p className="uppercase text-2xl">
            {
              date
                .toLocaleString("en-GB", {
                  timeZone: "Europe/London",
                  day: undefined,
                  month: undefined,
                  year: undefined,
                  timeZoneName: "short",
                  hour12: true,
                })
                .split(",")[1]
            }
          </p>
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-1"
        >
          <p className="text-sm font-light">
            © 2024 · Crafted with ♥️ using React by Billy Dyball.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}

export default App;
