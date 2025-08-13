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

const Home = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-screen h-screen relative">
        {/* <ImageSlider /> */}
        <ImageElement
          desktopImage="/img/background-desktop.jpg"
          className="opacity-20"
        />
        <div className="absolute top-0 w-full h-full px-16 md:px-56 flex justify-start  items-center">
          <HeroSection />
        </div>
      </section>
      <section className="w-screen h-screen bg-background-muted relative px-16 md:px-56 flex justify-center  items-center">
        <IntroSection />
      </section>
      <section className="my-4">
        <IntroCards />
      </section>
      <section id="coustomer-feedback" className="w-full mx-auto px-8 ">
        <SectionTitle
          pretitle="coustomer feedback"
          title="what our coustomers says"
          align="left"
          zeroXMarginPadding
        />
        <CoustomerFeedBack />
      </section>
      <Hero />
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page"
      >
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don't forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <PopupWidget />
    </>
  );
};

export default Home;
