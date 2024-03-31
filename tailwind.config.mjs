import { t } from './dist/_astro/client.DSlHJlSR';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF269E",
        "primary-light": "#FFDCED",
        secondary: "#00D7B0",
        "secondary-light": "#B8FFF3",
        highlighter: "#FAF77D",
      },
    },
  },
  plugins: [require(`precss`), require(`autoprefixer`)],
};
