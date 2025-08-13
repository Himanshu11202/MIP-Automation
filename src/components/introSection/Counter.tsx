"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Counter({
  start = 0,
  end = 100,
  duration = 2,
  className = "",
}) {
  const countRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const obj = { val: start };
      gsap.fromTo(
        countRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: countRef.current,
            start: "top 80%",
            once: true,
            onEnter: () => {
              // Start counting after fade-in starts
              gsap.to(obj, {
                val: end,
                duration,
                ease: "power1.out",
                onUpdate: () => {
                  if (countRef.current) {
                    countRef.current.textContent = Math.floor(
                      obj.val
                    ).toString();
                  }
                },
              });
            },
          },
        }
      );
    },
    { scope: countRef }
  );

  return (
    <span className={className} ref={countRef}>
      {start}
    </span>
  );
}
