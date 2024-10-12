import { cn } from "@/lib/utils";
import "../styles/pulse.css";

type PulseProps = {
  color: string;
  animated?: boolean;
};

export function Pulse({ animated = true, color }: PulseProps) {
  return (
    <div
      className={cn("h-3 w-3 rounded-full")}
      style={{ backgroundColor: color }}
    >
      <div
        className={cn("pulse absolute h-3 w-3", !animated && "hidden")}
        style={{ backgroundColor: color }}
      />
    </div>
  );
}
