"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { trainingHall } from "@/lib/site";

// One photo at a time; swipe on phones or use the arrows. Portrait photos are shown whole so
// the Herock Training Centre label along their bottom edge stays visible.
export function TrainingHall() {
  const track = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => setIndex(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", update, { passive: true });
    return () => el.removeEventListener("scroll", update);
  }, []);

  // Read the position from the track itself so quick repeated clicks still step one photo each.
  const go = (step: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const at = Math.round(el.scrollLeft / el.clientWidth);
    const target = (at + step + trainingHall.length) % trainingHall.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: target * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="hall">
      <ul className="hall-track" ref={track} aria-label="Herock Training Centre photos" tabIndex={0}>
        {trainingHall.map((photo, i) => (
          <li
            className="hall-slide"
            key={photo.src}
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${trainingHall.length}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 1100px) 1000px, 100vw"
            />
          </li>
        ))}
      </ul>
      <div className="hall-controls">
        <button type="button" onClick={() => go(-1)} aria-label="Previous photo">
          <span aria-hidden="true">‹</span>
        </button>
        <span className="hall-count" aria-live="polite">
          {index + 1} / {trainingHall.length}
        </span>
        <button type="button" onClick={() => go(1)} aria-label="Next photo">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
