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
import { PathFindingVisualizerLogo } from "../icons/path-finding-visualizer-logo";
import Pic1 from "../../assets/path-finding-visualizer/path-finding-visualizer-pic1.webp";

export function PathFindingVisualizerDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PathFindingVisualizerLogo className="h-full aspect-square cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Path Finding Visualizer</DialogTitle>
          <DialogDescription className="flex flex-col gap-4">
            <p>
              One of my earliest web projects, this app visualises different
              path finding algorithms, users can create their own mazes or get a
              maze algorithm to make it for them.
            </p>
            <p>
              This project was written using Angular with bootstrap styling.
            </p>
            <img src={Pic1} />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"link"}>
            <a
              href="https://github.com/BillyDyball/path-finding-visualizer-angular"
              target="_blank"
            >
              Source Code
            </a>
          </Button>
          <Button variant={"link"}>
            <a
              href="https://path-finding-visualizer-three.vercel.app/"
              target="_blank"
            >
              View App
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
