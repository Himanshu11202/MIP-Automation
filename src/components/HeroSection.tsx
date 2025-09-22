"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.to(heroRef.current, {
        opacity: 1, // must be 0–1
        y: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div ref={heroRef} className="opacity-0 translate-y-12">
      <p className="uppercase text-neutral-400 font-bold text-left">
        welcome to MIP automations
      </p>
      <h1 className="capitalize text-pretty text-5xl md:text-7xl font-semibold  max-w-[750px] text-neutral-300">
        we are <span className="text-textPrimaryLight">leading</span> brand
        which helps to <span className="text-textPrimaryLight">design</span> and{" "}
        <span className="text-textPrimaryLight">develop</span> your own{" "}
        <span className="text-textSecondaryLight">Automation</span> World
      </h1>
    </div>
  );
};

export default HeroSection;
