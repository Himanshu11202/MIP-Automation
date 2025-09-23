import Head from "next/head";
import Hero from "@/components/hero";
import SectionTitle from "@/components/sectionTitle";

import { benefitOne, benefitTwo } from "@/components/data";
import Video from "@/components/video";
import Benefits from "@/components/benefits";
import Cta from "@/components/cta";
import Faq from "@/components/faq";
import PopupWidget from "@/components/popupWidget";
//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));
import React from "react";
import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import IntroCards from "@/components/IntroCards";
import CoustomerFeedBack from "@/components/coustomerFeedback";
import ImageElement from "@/components/ImageSlider/ImageElement";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/introSection";
import Gallery from "@/components/gallery/Gallery"; // gallery sectionn

const Home = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-screen h-screen relative bg-white flex jc mt-nav">
        <div className="w-11/12 md:w-4/5 h-4/5 bg-neutral-900 mx-auto my-auto relative rounded-3xl overflow-hidden">
          <ImageElement
            desktopImage="/img/background-desktop.jpg"
            className="opacity-20"
          />
          <div className="absolute top-0 w-full h-full px-8 md:px-16 lg:px-36 flex justify-start  items-center">
            <HeroSection />
          </div>
        </div>
      </section>
      <section className="w-screen h-screen bg-background-muted relative px-16 md:px-36 lg:px-56 flex justify-center  items-center">
        <IntroSection />
      </section>

      <section className="my-4">
        <IntroCards />
      </section>
      <section id="coustomer-feedback" className="w-full mx-auto px-8 my-8">
        <SectionTitle
          pretitle="coustomer feedback"
          title="what our coustomers says"
          align="left"
          zeroXMarginPadding
        />
        <CoustomerFeedBack />
      </section>
      <Gallery />
      <section id="faq" className="w-full mx-auto px-8 my-8">
        <SectionTitle
          pretitle="Frequently asked questions"
          title="FAQs"
          align="left"
          zeroXMarginPadding
        />
        <Faq />
      </section>
      <Cta />
      {/* <PopupWidget /> */}
    </>
  );
};

export default Home;
