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
import { SocialRoastLogo } from "../icons/social-roast-logo";

export function SocialRoastDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SocialRoastLogo className="h-full cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Social Roast</DialogTitle>
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
