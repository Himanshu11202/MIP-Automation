"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DeveloperCard({
  name,
  role,
  skills,
  info,
  email,
  image,
  linkedin,
  github,
}) {
  return (
    <motion.div
      className="w-full max-w-7xl mx-auto bg-white shadow-2xl rounded-3xl p-12 flex flex-col md:flex-row items-center gap-10 transition-transform duration-500 hover:scale-105 hover:shadow-3xl"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Left: Image */}
      <div className="w-64 h-64 md:w-64 md:h-64 flex-shrink-0 overflow-hidden rounded-xl">
        <Image
          src={image}
          alt={name}
          width={256}
          height={256}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right: Info */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-4xl font-bold text-gray-800">{name}</h3>
        <p className="text-secondary font-semibold text-xl mt-2">{role}</p>
        <p className="text-gray-700 mt-3 text-lg">{skills}</p>
        <p className="text-gray-600 mt-5 text-justify text-base">{info}</p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 mt-8 justify-center md:justify-start">
          <a
            href={email ? `mailto:${email}` : "#"}
            className="bg-primary text-textPrimary hover:bg-textPrimaryLight px-10 py-3 rounded-full  transition font-semibold text-lg"
          >
            Email
          </a>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-textPrimary hover:bg-textPrimaryLight px-10 py-3 rounded-full transition font-semibold text-lg"
            >
              LinkedIn
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-textPrimary hover:bg-textPrimaryLight  px-10 py-3 rounded-full transition font-semibold text-lg"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
