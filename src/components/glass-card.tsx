import { useRef } from "react";
import { Card } from "./ui/card";

export interface GlassCardProps {
  colSpan?: string;
  rowSpan?: string;
  mousePosition: { x: number; y: number };
  children?: React.ReactNode;
}

const GlassCard = ({
  mousePosition,
  colSpan,
  rowSpan,
  children,
}: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const calculateGradientPosition = (): { x: string; y: string } => {
    if (!cardRef.current) return { x: "50%", y: "50%" };
    const rect = cardRef.current.getBoundingClientRect();
    const x = mousePosition.x - rect.left;
    const y = mousePosition.y - rect.top;
    return { x: `${x}px`, y: `${y}px` };
  };

  const { x, y } = calculateGradientPosition();

  return (
    <Card
      ref={cardRef}
      className={`
        border-none h-max sm:h-auto group bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm
        bg-opacity-20 overflow-hidden transform-y-[-40%] rounded-lg p-6 align-start flex-none
        justify-start relative transform perspective-1200 w-full transition duration-75 ease-in-out
        col-span-1 ${colSpan || "md:col-span-2"} ${rowSpan || ""}
        `}
    >
      <div
        className="absolute inset-0 transition-opacity duration-300 ease-in-out"
        style={{
          backgroundImage: `radial-gradient(circle 150px at ${x} ${y}, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%)`,
          opacity: 1,
        }}
      />
      {children}
    </Card>
  );
};

export { GlassCard };
