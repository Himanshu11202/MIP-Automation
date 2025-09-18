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
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // Make Poppins default
      },
      colors: {
        trueGray: colors.neutral,
        // light: {
        //   background: "#FFFFFF",
        //   "background-secondary": "#F8FAFC",
        //   "background-muted": "#E0F2FE",
        //   foreground: "#0F172A",
        //   "foreground-secondary": "#334155",
        //   "foreground-muted": "#64748B",
        //   card: "#FFFFFF",
        //   "card-foreground": "#0F172A",
        //   border: "#E2E8F0",
        //   input: "#F1F5F9",
        //   ring: "#0EA5E9",
        //   primary: "#0EA5E9",
        //   "primary-foreground": "#FFFFFF",
        //   secondary: "#F1F5F9",
        //   "secondary-foreground": "#0F172A",
        //   success: "#10B981",
        //   warning: "#F59E0B",
        //   error: "#EF4444",
        //   info: "#0EA5E9",
        // },
        // dark: {
        'background': '#111827',
        'background-secondary': '#1F2937',
        'background-muted': '#064E3B',
        'foreground': '#F9FAFB',
        'foreground-secondary': '#E5E7EB',
        'foreground-muted': '#9CA3AF',
        'card': '#1F2937',
        'card-foreground': '#F9FAFB',
        'border': '#374151',
        'input': '#4B5563',
        'ring': '#34D399',
        'primary': '#34D399',
        'primary-foreground': '#111827',
        'secondary': '#4B5563',
        'secondary-foreground': '#F9FAFB',
        'success': '#22C55E',
        'warning': '#EAB308',
        'error': '#EF4444',
        'info': '#34D399',
        // },
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
  },
  plugins: [],
};
