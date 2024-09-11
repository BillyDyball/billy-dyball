import { useState, useEffect, useRef } from "react";
import { GlassCard } from "@/components/glass-card";
import { CardContent } from "./components/ui/card";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    // bg-gradient-to-br from-purple-400 to-indigo-600
    <div className="min-h-screen w-full bg-slate-950 p-8">
      <div
        ref={gridRef}
        className="text-white m-auto p-2 grid gap-2 max-w-6xl overflow-hidden relative w-full sm:p-4 sm:gap-2 md:grid-cols-2 md:gap-3 md:p-6 lg:h-screen lg:grid-rows-8 lg:grid-cols-4 lg:gap-4 lg:max-h-[800px]"
      >
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-3"
          rowSpan="md:row-span-4"
        >
          <CardContent>
            <h4>
              Hi! I'm <b>Billy Dyball</b>, a software developer with a strong
              focus on user experience, fun animations and quality design
            </h4>
          </CardContent>
        </GlassCard>
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-6"
        />
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-4"
        />
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-2"
          rowSpan="md:row-span-2"
        />
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-2"
        />
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-1"
        />
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-2"
        />
        <GlassCard
          mousePosition={mousePosition}
          colSpan="md:col-span-1"
          rowSpan="md:row-span-1"
        />
      </div>
    </div>
  );
}

export default App;
