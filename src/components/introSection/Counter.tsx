"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Counter({ start = 0, end = 100, duration = 2 }) {
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const obj = { val: start };
      gsap.to(obj, {
        val: end,
        duration,
        ease: "power1.out",
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Math.floor(obj.val).toString();
          }
        },
      });
    },
    { scope: countRef }
  );

  return <span ref={countRef}>{start}</span>;
}
