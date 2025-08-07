const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        app: {
          // add app specific colors

          green: "#3DDFA3",
          "green-hover": "#2fa77b",
          "green-clicked": "#32CD32",
          "black-1-dark": "#262626",
          "black-2-icon": "#404040",
          "black-3-icon-bg": "#636363",
          "black-icon-bg": "#363636",
          "black-icon-bg-hover": "#575757",
          "black-selected": "#4C4C4C",
          gray: "#a3a3a3",

          "white-1-light": "#F3F3F3",
          "soft-white": "#D9D9D9",
          "soft-white-dark": "#5c5c5c",

          "text-light": "#898989",
          "text-super-light": "#8E8E8E",

          "dark-blue": "#02000e",
          red: "#E43E3E",
          "red-hover": "#c23333",
          purple: "#944CE",
        },
      },
      // next/font tailwind configuration
      // fontFamily: {
      //   inter: ["var(--font-inter)"],
      // },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
