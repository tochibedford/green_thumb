const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./src/**/*.astro",
    "./src/pages/blog/**/*.astro",
  ],
  theme: {
    colors: {
      ...colors,
      gBright: "#efefef",
      gShade: "#141414",
      gShadeAccent: "#B8BCCA",
      gPrimaryLight: "#078A6C",
      gPrimary: "#007157",
    },
    screens: {
      //delete to switch to mobile first
      "2xl": { max: "1439px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
