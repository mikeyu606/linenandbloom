"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

type BeforeAfterDoorProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export default function BeforeAfterDoor({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before cleaning",
  afterAlt = "After cleaning",
}: BeforeAfterDoorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[min(52svh,400px)] sm:h-[min(56svh,460px)] md:h-[min(60svh,500px)] aspect-[3/4] max-w-full select-none touch-none cursor-ew-resize overflow-hidden shadow-2xl mx-auto"
      style={{ borderRadius: "9999px 9999px 1.25rem 1.25rem" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
        if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
      }}
    >
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover pointer-events-none"
        priority
        sizes="420px"
        draggable={false}
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover pointer-events-none"
          priority
          sizes="420px"
          draggable={false}
        />
      </div>

      <div
        className="absolute top-0 bottom-0 z-10 pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white" />
        <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-0.5 rounded-full border-2 border-white bg-zinc-900 shadow-lg">
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden>
            <path
              d="M6.5 1L1.5 6L6.5 11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" aria-hidden>
            <path
              d="M1.5 1L6.5 6L1.5 11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
