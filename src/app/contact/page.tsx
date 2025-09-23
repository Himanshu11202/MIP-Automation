"use client";
import { Button, Input } from "@/components/Shared";
import React, { ChangeEvent, FormEvent, useRef, useState } from "react";

import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { IoIosCall } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const imgRef = useRef<HTMLImageElement>(null);
  const tlRef = useRef<GSAPTimeline>(null);
  const [formValues, setFormValues] = useState({
    fName: "",
    lName: "",
    mob: "",
    email: "",
    msg: "",
  });

  useGSAP(
    () => {
      let tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.fromTo(
        ".icons",
        { opacity: 0, duration: 0.5 },
        { opacity: 1, stagger: 0.2, duration: 0.5 }
      );
      tl.fromTo(
        ".icons",
        { opacity: 0, duration: 0.5 },
        { opacity: 1, stagger: 0.2, duration: 0.5 }
      ).to(".icons", {
        opacity: 1,
        duration: 1, // Hold the opacity at 1 for 2 seconds
      });

      if (!tlRef) return;
      tlRef.current = tl;
    },
    { scope: imgRef }
  );

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    console.log(name, value);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    alert("feature is under developement");
    setFormValues({
      fName: "",
      lName: "",
      mob: "",
      email: "",
      msg: "",
    });
  }

  const contactLinks = [
    {
      href: "tel:+919960199198",
      hoverColor: "hover:bg-blue-400 dark:hover:bg-blue-400",
      icon: IoIosCall,
    },
    {
      href: "mailto:parivartaninnovation314@gmail.com",
      hoverColor: "hover:bg-red-400 dark:hover:bg-red-400",
      icon: IoMailOutline,
    },
    {
      href: "",
      hoverColor: "hover:bg-green-400 dark:hover:bg-green-400",
      icon: FaWhatsapp,
    },
    {
      href: "",
      hoverColor: "hover:bg-purple-400 dark:hover:bg-purple-400",
      icon: FaInstagram,
    },
  ];

  return (
    <div className="w-screen min-h-[90vh] h-fit bg-white flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-14 px-6 py-6 md:px-16 md:py-12 lg:py-14 overflow-hidden lg:h-[90vh] relative dark:bg-trueGray-900 mt-24">
      <div className="w-full h-full py-6 tb:py-12 lg:py-0 flex flex-col justify-center lg:justify-between gap-12 lg:gap-4 ">
        <div>
          <h1 className="capitalize text-4xl tb:text-6xl font-bold">
            Contact Us
          </h1>
          <h2 className="capitalize text-2xl tb:text-3xl">
            Contact with our team
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className=" lg:flex lg:gap-4">
            <Input
              value={formValues.fName}
              handleChange={handleChange}
              name="fName"
              autofocus={true}
              placeholder="First Name*"
              type="text"
              required={true}
              className="border-app-soft-white dark:border-app-soft-white-dark  border-b-2 border-spacing-0 w-full outline-none dark:bg-trueGray-900"
            />
            <Input
              value={formValues.lName}
              handleChange={handleChange}
              name="lName"
              placeholder="Last Name"
              type="text"
              className="border-app-soft-white dark:border-app-soft-white-dark  border-b-2 w-full mt-4 tb:mt-8 lg:mt-0 outline-none dark:bg-trueGray-900"
            />
          </div>
          <Input
            value={formValues.mob}
            handleChange={handleChange}
            name="mob"
            placeholder="Mobile*"
            type="number"
            required={true}
            className="border-app-soft-white dark:border-app-soft-white-dark  border-b-2 w-full  mt-4 tb:mt-8 lg:mt-6 outline-none dark:bg-trueGray-900"
          />
          <Input
            value={formValues.email}
            handleChange={handleChange}
            name="email"
            placeholder="Email*"
            type="email"
            required={true}
            className="border-app-soft-white dark:border-app-soft-white-dark  border-b-2 w-full  mt-4 tb:mt-8 lg:mt-6 outline-none dark:bg-trueGray-900"
          />
          <textarea
            value={formValues.msg}
            onChange={handleChange}
            name="msg"
            // maxLength={444}
            placeholder="message"
            // rows={10}
            className="bg-app-white-1-light border-app-soft-white dark:border-app-soft-white-dark  border-2 w-full h-32 mt-4 tb:mt-8 lg:mt-6 rounded-xl px-4 py-3 resize-none dark:bg-trueGray-900"
          ></textarea>
          <Button
            type="submit"
            className="w-full bg-app-black-1-dark dark:bg-app-white-1-light text-white mt-4 tb:mt-8 py-5 hover:bg-black dark:hover:bg-app-black-3-icon-bg dark:text-black dark:hover:text-white"
          >
            Submit
          </Button>
        </form>
      </div>

      {/* Map container with responsive sizing */}
      <div className="w-full aspect-square rounded-2xl lg:h-full lg:aspect-square overflow-hidden relative bg-black order-last lg:order-none">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7536.187463304645!2d73.097182!3d19.191108!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795eaf2e4846d%3A0x560bbf05592ba3e8!2sMECH%20IT%20POSSIBLE!5e0!3m2!1sen!2sus!4v1753890587748!5m2!1sen!2sus"
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full z-0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container lg:hidden fixed bottom-5 self-center z-50 w-screen flex justify-center">
        <div className="  py-3 mx-12 px-4 bg-white shadow-2xl flex justify-between md:justify-center md:w-fit md:gap-6 items-center gap-2 dark:bg-trueGray-700 rounded-full overflow-hidden">
          {contactLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`p-4 md:p-10 aspect-square bg-trueGray-200 flex justify-center items-center rounded-[50%] transition-colors duration-300 dark:bg-trueGray-900 ${item.hoverColor}`}
            >
              <item.icon className="aspect-square text-4xl md:text-xl md:scale-[3] tb:scale-[2]" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
