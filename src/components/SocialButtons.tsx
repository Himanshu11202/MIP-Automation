"use client";

import { FaWhatsapp, FaInstagram, FaYoutube } from "react-icons/fa";

export default function SocialButtons() {
  return (
    <div className="fixed top-1/3 right-4 flex flex-col space-y-4 z-50">
      {/* Whatsapp */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 rounded-full bg-green-500 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="text-white text-2xl group-hover:animate-pulse" />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-400 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl"
        aria-label="Instagram"
      >
        <FaInstagram className="text-white text-2xl group-hover:animate-spin" />
      </a>

      {/* YouTube */}
      <a
        href="https://youtube.com/yourchannel"
        target="_blank"
        rel="noopener noreferrer"
        className="group w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 hover:shadow-2xl"
        aria-label="YouTube"
      >
        <FaYoutube className="text-white text-2xl group-hover:animate-pulse" />
      </a>
    </div>
  );
}
