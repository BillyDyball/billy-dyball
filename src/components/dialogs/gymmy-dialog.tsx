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
          <DialogDescription className="flex flex-col gap-4">
            <p>
              This mobile-first fitness app, built using TypeScript, React
              Native, and Expo, is designed to help users track their calories,
              macros, and fitness progress in an intuitive way. It offers a
              personalized meal planner that suggests balanced meals based on
              individual nutritional needs, giving users the tools to manage
              their diet easily. Backed by Firebase, the app securely stores
              user data and allows for seamless goal-setting and weight
              tracking. Users can set and adjust their fitness goals, making it
              an ideal companion for those new to the gym or fitness lifestyle.
            </p>
            <p>
              In the workout section, users can create custom workout routines
              and track their progress in real-time. The app’s flexible goal
              management system ensures that users stay motivated by allowing
              them to shift their targets as they progress. By focusing on
              simplicity and ease of use, the app serves as a beginner-friendly
              guide, helping users build effective habits without the overwhelm
              of complex dietary or exercise rules. Looking ahead, the app will
              integrate Stripe for subscription-based services, adding even more
              value to users’ fitness journeys.
            </p>
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
