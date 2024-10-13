import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TickrLogo } from "../icons/tickr-logo";

export function TickrDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TickrLogo className="h-full aspect-square cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Tickr</DialogTitle>
          <DialogDescription className="flex flex-col gap-4">
            <p>
              Tickr is a cryptocurrency tracking application that delivers
              real-time and historical data for a variety of cryptocurrencies.
              The backend is built with ASP.NET Core, while the frontend is
              developed using React and TypeScript.
            </p>
            <p>
              This project was completed over five days during a development
              sprint at work. The goal was to build a project from scratch and
              explore new technologies. Having no prior experience with web
              APIs, Redis, or cryptocurrency data, I saw this as a valuable
              opportunity to expand my skill set.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"link"}>
            <a href="https://github.com/BillyDyball/tickr" target="_blank">
              Source Code
            </a>
          </Button>
          {/* <Button variant={"link"}>
            <a href="https://github.com/BillyDyball/tickr" target="_blank">
              View App
            </a>
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
