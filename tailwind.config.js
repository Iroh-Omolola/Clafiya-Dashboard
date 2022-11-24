/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "786px",
      mmd: "800px",
      lg: "1024px",
      wlg: "1023px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },

    extend: {},
    colors: {
      transparent: "transparent",
      primary: "#0A459F",
      text_black: "#52575C",
      text_black_two: "#25282B",
      black: "#000000",
      white: "#ffffff",
      background_color: "#F6F8FB",
      border_color: "#E8E8E8",
      red: "#FF6760",
      shadow_color: "rgba(16, 30, 115, 0.06)",
      tabele_color: "rgba(232, 232, 232, .2)",
    },
    fontFamily: {
      lato: ["Lato"],
    },
    backgroundImage: {
      banner: "url('/components/assets/unConvertedSvgs/banners.svg')",
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active"],
  },
  plugins: [require("@tailwindcss/forms")],
};
