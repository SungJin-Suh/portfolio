"use client";

import { useEffect, useRef } from "react";

const NOISE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--x", `${e.clientX}px`);
        el.style.setProperty("--y", `${e.clientY}px`);
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-30">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at var(--x, -1000px) var(--y, -1000px),
            rgba(29, 78, 216, 0.15),
            rgba(29, 78, 216, 0.14) 15%,
            rgba(29, 78, 216, 0.11) 30%,
            rgba(29, 78, 216, 0.07) 45%,
            rgba(29, 78, 216, 0.04) 60%,
            rgba(29, 78, 216, 0.015) 75%,
            rgba(29, 78, 216, 0) 90%)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: `url("${NOISE}")` }}
      />
    </div>
  );
}