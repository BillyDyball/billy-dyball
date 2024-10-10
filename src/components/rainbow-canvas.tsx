import { useEffect, useRef } from "react";

type RainboxCanvasProps = {
  className?: string;
};

export function RainbowCanvas({ className }: RainboxCanvasProps) {
  const ref = useRef<HTMLCanvasElement>(null);
  let requestId: number | null = null;

  const col = function (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    r: number,
    g: number,
    b: number
  ) {
    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + ", 0.1)";
    ctx.fillRect(x, y, 1, 1);
  };

  const R = function (x: number, y: number, t: number): number {
    return Math.floor(192 + 64 * Math.cos((x * x - y * y) / 300 + t));
  };

  const G = function (x: number, y: number, t: number): number {
    return Math.floor(
      192 +
        64 * Math.sin((x * x * Math.cos(t / 4) + y * y * Math.sin(t / 3)) / 300)
    );
  };

  const B = function (x: number, y: number, t: number): number {
    return Math.floor(
      192 +
        64 *
          Math.sin(
            5 * Math.sin(t / 9) +
              ((x - 100) * (x - 100) + (y - 100) * (y - 100)) / 1100
          )
    );
  };

  let t = 0;

  const animate = function (ctx: CanvasRenderingContext2D) {
    for (let x = 0; x <= 35; x++) {
      for (let y = 0; y <= 35; y++) {
        col(ctx, x, y, R(x, y, t), G(x, y, t), B(x, y, t));
      }
    }
    t = t + 0.001;
    window.requestAnimationFrame(() => animate(ctx));
  };

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        requestId = window.requestAnimationFrame(() => animate(ctx));
      }
    }

    return () => {
      if (typeof requestId === "number") {
        window.cancelAnimationFrame(requestId);
      }
    };
  }, []);

  return (
    <canvas ref={ref} id="canv" width="32" height="32" className={className} />
  );
}
