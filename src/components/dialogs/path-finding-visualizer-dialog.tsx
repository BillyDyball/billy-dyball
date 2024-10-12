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

export function PathFindingVisualizerDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PathFindingVisualizerLogo className="h-full cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Path Finding Visualizer</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit">Source Code</Button>
          <Button type="submit">View App</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
