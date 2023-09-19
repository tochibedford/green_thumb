const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.astro"],
  theme: {
    colors: {
      ...colors,
      gBright: "#efefef",
      gShade: "#141414",
      gShadeAccent: "#B8BCCA",
      gPrimaryLight: "#078A6C",
      gPrimary: "#007157",
    },
  },
  plugins: [],
};