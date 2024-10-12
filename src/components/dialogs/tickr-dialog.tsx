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
        <TickrLogo className="h-full cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tickr</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button>Source Code</Button>
          <Button>View App</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
