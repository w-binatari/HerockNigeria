"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { qhseCourses } from "@/lib/site";

// A sideways-scrolling row of course cards; the arrows move it one card at a time.
export function CourseCards({ label }: { label: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () =>
      setEdges({
        start: el.scrollLeft <= 4,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
      });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const move = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * (card.getBoundingClientRect().width + 16), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="course-cards">
      <ul className="course-track" ref={track} aria-label={label} tabIndex={0}>
        {qhseCourses.map((course) => (
          <li className="course-card" key={course.title}>
            <Image src={course.photo.src} alt={course.photo.alt} fill sizes="(min-width: 720px) 300px, 72vw" />
            <span className="course-title">{course.title}</span>
          </li>
        ))}
      </ul>
      <div className="course-arrows">
        <button type="button" onClick={() => move(-1)} disabled={edges.start} aria-label="Previous courses">
          <span aria-hidden="true">‹</span>
        </button>
        <button type="button" onClick={() => move(1)} disabled={edges.end} aria-label="More courses">
          <span aria-hidden="true">›</span>
        </button>
      </div>
    </div>
  );
}
