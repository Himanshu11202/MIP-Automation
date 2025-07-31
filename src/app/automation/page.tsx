"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import { FC } from "react";

const Automation: FC = () => {
  return (
    <>
     

      {/* Full screen video background with overlay and heading + subtitle */}
      <section className="relative w-full h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/img/images/automation2 video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            Automation
          </h1>
          <p className="text-white max-w-xl text-lg md:text-2xl drop-shadow-md">
            MIP Automation has earned world fame in developing error-free,
            innovative, class-apart Industrial Automation solutions for their
            clients. When you want to maximize your ROI on Industrial Automation;
            then think about us.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Services Section */}
        <section className="grid md:grid-cols-3 gap-10 mb-20">
          {services.slice(0, 3).map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </section>

        {/* More Services Section */}
        <section className="grid md:grid-cols-3 gap-10 mb-20">
          {services.slice(3).map((service, index) => (
            <Card key={index + 3} {...service} />
          ))}
        </section>
      </main>
    </>
  );
};

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  alt: string;
}

const Card: FC<ServiceCardProps> = ({ image, title, description, alt }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <Image
      src={image}
      alt={alt}
      width={600}
      height={400}
      className="object-cover w-full h-48"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {description}
      </p>
    </div>
  </div>
);

const services: ServiceCardProps[] = [
  {
    image: "/img/images/industrial-automation-1800x1300.jpg",
    title: "Industrial Automation",
    alt: "Industrial Automation",
    description:
      "MIP Automation has earned world fame in developing error-free, innovative, class-apart Industrial Automation solutions for their clients.",
  },
  {
    image: "/img/images/mcc-panel-1800x1300.jpg",
    title: "MCC Power Panel",
    alt: "MCC Power Panel",
    description:
      "We design & manufacture low voltage switchgear panels & motor control centres with ideal engineering practices.",
  },
  {
    image: "/img/images/apfc-panel1-1800x1300.png",
    title: "APFC Panel",
    alt: "APFC Panel",
    description:
      "We provide fixed & automatic power compensation solutions for reactive power reduction in industrial loads.",
  },
  {
    image: "/img/images/db-panel-1280x935.jpg",
    title: "DB Panel",
    alt: "DB Panel",
    description:
      "Manufacturing distribution panel boards customized as per client specifications.",
  },
  {
    image: "/img/images/service-maintenance-1667x1152-800x552.jpg",
    title: "Service Maintenance",
    alt: "Service Maintenance",
    description:
      "Dedicated emergency management team ready to support clients promptly.",
  },
  {
    image: "/img/images/camera-040-1800x1300.jpg",
    title: "Electrical Panel",
    alt: "Electrical Panel",
    description:
      "Distribution board for dividing power feed into subsidiary circuits with protection.",
  },
];

export default Automation;
