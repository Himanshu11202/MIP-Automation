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

  useGSAP(
    () => {
      const el = container.current;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          onEnter: () => {
            gsap.to(el, {
              opacity: 1,
              x: 0,
              duration: 1, // Duration when entering
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(el, {
              opacity: 0,
              x: align === "left" ? -100 : 100,
              duration: 0.3, // Duration when leaving
              ease: "power1.inOut",
            });
          },
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
