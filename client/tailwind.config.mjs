/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3f4f6", // Off-White Background
        secondary: "#0F172A", // Dark Navy Blue Text
        accent: "#acff8e", // Lacoste Green Buttons
        hoveraccent: "#14593a", // Hover Lacoste Green Button
        textLight: "#334155", // Slate Gray Subtext
        borderColor: "#CBD5E1", // Soft Gray Borders
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
