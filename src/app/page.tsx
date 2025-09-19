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
import Gallery from "@/components/Gallery"; // gallery sectionn


const Home = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-screen h-screen relative bg-neutral-900">
        {/* <ImageSlider /> */}
        <ImageElement
          desktopImage="/img/background-desktop.jpg"
          className="opacity-20 bg-neutral-900"
        />
        <div className="absolute top-0 w-full h-full px-16 md:px-36 lg:px-56 flex justify-start  items-center">
          <HeroSection />
        </div>
      </section>
      <section className="w-screen h-screen bg-background-muted relative px-16 md:px-36 lg:px-56 flex justify-center  items-center">
        <IntroSection />
        
      </section>
      
      <section className="my-4">
        <IntroCards />
      </section>
             {/* ✅ Gallery Section Added */}
      <Gallery />
      <section id="coustomer-feedback" className="w-full mx-auto px-8 ">
        <SectionTitle
          pretitle="coustomer feedback"
          title="what our coustomers says"
          align="left"
          zeroXMarginPadding
        />
        <CoustomerFeedBack />
      </section>


      <Faq />
      <Cta />
      <PopupWidget />
    </>
  );
};

export default Home;
