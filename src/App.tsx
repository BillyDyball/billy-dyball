import { useState, useEffect, useRef } from "react";
import { GlassCard } from "@/components/glass-card";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { IconButton } from "./components/icon-button";
import Me from "./assets/me.webp";
import { RainbowCanvas } from "./components/rainbow-canvas";
import { Pulse } from "./components/pulse";
import { GymmyDialog } from "./components/dialogs/gymmy-dialog";
import { TickrDialog } from "./components/dialogs/tickr-dialog";
import { SocialRoastDialog } from "./components/dialogs/social-roast-dialog";
import { PathFindingVisualizerDialog } from "./components/dialogs/path-finding-visualizer-dialog";

// https://sparkly-speculoos-0c9197.netlify.app/

const STATUS = {
  available: "available",
  busy: "busy",
  offline: "offline",
} as const;

type ObjectValues<T> = T[keyof T];
type Status = ObjectValues<typeof STATUS>;

const getStatus = (date: Date): Status => {
  const hour = date.getHours();

  if (hour <= 5 || hour >= 22) return STATUS.offline;
  if (hour <= 7 || hour >= 18) return STATUS.busy;
  return STATUS.available;
};

const statusContext = (status: Status): { text: Status; color: string } => {
  switch (status) {
    case "offline":
      return {
        text: "offline",
        color: "#4b5563",
      };
    case "busy":
      return {
        text: "busy",
        color: "#fb923c",
      };
    case "available":
      return {
        text: "available",
        color: "#4ade80",
      };
  }
};

function App() {
  const gridRef = useRef<HTMLDivElement>(null);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [date, setDate] = useState<Date>(new Date());
  const [status, setStatus] = useState<{ text: string; color: string }>(
    statusContext(STATUS.offline)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      setDate(currentDate);
      setStatus(statusContext(getStatus(currentDate)));
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
              developer with a strong passion for making exciting web apps and
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
            primary tools of choice includes:
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
            While I do have preferred tools, I always choose the best one for
            the job. My goal is to find the right solution for each project.
          </p>
          <p className="text-sm font-light">
            Beyond coding, I'm passionate about travelling, rockets, and pickle
            ball.
          </p>
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-2 lg:col-span-1"
          rowSpan="md:row-span-4"
          containerClassName="flex flex-col gap-4"
        >
          <h4 className="text-xl font-bold">Lets get to work!</h4>
          <div>
            <p className="text-sm font-light">Email</p>
            <a href="mailto:billyjdyball@gmail.com">billyjdyball@gmail.com</a>
          </div>
          <div>
            <p className="text-sm font-light">Linkedin</p>
            <a href="https://uk.linkedin.com/in/billydyball" target="_blank">
              linkedin.com/in/billydyball
            </a>
          </div>
          <div>
            <p className="text-sm font-light">Github</p>
            <a href="https://github.com/BillyDyball" target="_blank">
              github.com/BillyDyball
            </a>
          </div>
          <p className="text-sm font-light"></p>
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-2"
          rowSpan="md:row-span-2"
          containerClassName="flex flex-col gap-2"
        >
          <h4 className="text-xl font-bold">Projects</h4>
          <div className="flex relative gap-4">
            <GymmyDialog />
            <TickrDialog />
            <SocialRoastDialog />
            <PathFindingVisualizerDialog />
          </div>
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-2"
          containerClassName="flex flex-col gap-4"
        >
          <h4 className="text-xl font-bold">Employment</h4>
          <p className="text-sm">
            Currently employed at{" "}
            <a
              className="underline"
              href="https://www.ast-networks.com/"
              target="_blank"
            >
              Applied Satellite Technologies
            </a>
          </p>
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-1"
          containerClassName="flex items-center justify-center gap-2"
        >
          <p className="text-x capitalize">{status.text}</p>
          <Pulse
            color={status.color}
            animated={status.text !== STATUS.offline}
          />
        </GlassCard>
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
          containerClassName="p-4 flex items-center"
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
