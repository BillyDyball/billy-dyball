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
import Pic1 from "../../assets/social-roast/social-roast-pic1.webp";

export function SocialRoastDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SocialRoastLogo className="h-full aspect-square cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Social Roast</DialogTitle>
          <DialogDescription className="flex flex-col gap-4">
            <p>
              Social Roast is a fun project I built where a user can enter a
              person's{" "}
              <a
                href="https://bsky.app/"
                target="_blank"
                className="text-blue-400 underline"
              >
                BlueSky
              </a>{" "}
              social media handle and the app will then generate a roast based
              on the information it can find about them.
            </p>
            <p>
              It is powered by the BlueSky API and Gemini Ai and was built with
              React and TypeScript.
            </p>
            <img src={Pic1} />
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant={"link"}>
            <a
              href="https://github.com/BillyDyball/social-roast"
              target="_blank"
            >
              Source Code
            </a>
          </Button>
          <Button type="submit" variant={"link"}>
            <a href="https://social-roast.vercel.app/" target="_blank">
              View App
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
