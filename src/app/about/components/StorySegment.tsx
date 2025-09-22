"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

interface StorySegmentProps {
  align: "left" | "right" | "center";
  title: string;
  description: string;
  image: {
    src: string | StaticImport;
    alt: string;
  };
}

gsap.registerPlugin(ScrollTrigger);

const StorySegment = ({
  align = "left",
  title,
  description,
  image,
}: StorySegmentProps) => {
  const container = useRef<HTMLDivElement>(null);

  const initialX = align === "left" ? -100 : align === "right" ? 100 : 0;
  gsap.set(container.current, { opacity: 0, x: initialX });

  useGSAP(
    () => {
      if (!container.current) return;
      const el = container.current;

      const initialX = align === "left" ? -100 : align === "right" ? 100 : 0;

      // Set initial state
      gsap.set(el, { opacity: 0, x: initialX });

      // Fade in when entering
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // start when top of element reaches 80% of viewport
          toggleActions: "play none none reverse",
          // play: when scrolling down and entering
          // none: do nothing on leave
          // none: do nothing on enter back
          // reverse: fade out when scrolling back past start
        },
      });
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      id="coustomer-feedback"
      className={`w-full flex flex-col mx-auto px-8 my-14 md:gap-6 md:px-14  lg:gap-24 ${
        align === "right" ? "md:flex-row-reverse" : "md:flex-row"
      } `}
    >
      <div
        className={`image-container relative w-full  overflow-hidden rounded-xl shadow-xl md:w-[50vw] aspect-square flex-shrink-0 lg:h-[90vh] lg:w-auto`}
      >
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>
      <section className="story-info my-4 md:self-center">
        <h1 className="text-3xl lg:text-5xl font-semibold uppercase">
          {title}
        </h1>
        <p className="lg:text-2xl lg:mt-5 text-neutral-700 dark:text-neutral-400">
          {description}
        </p>
      </section>
    </section>
  );
};

export default StorySegment;
