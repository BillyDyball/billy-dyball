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
import { GymmyLogo } from "../icons/gymmy-logo";

export function GymmyDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <GymmyLogo className="h-full aspect-square cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gymmy</DialogTitle>
          <DialogDescription>
            Gymmy is a complete fitness application avaliable on the Apple and
            Google play store which I designed, developed, and built by myself.
            With the help of a business partner we success set up a business for
            the application.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button asChild variant={"link"}>
            <a href="https://www.gymmy-apps.com/" target="_blank">
              View App
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
