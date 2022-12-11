/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    fontFamily: {
      sans: ["Space Mono", "sans-serif"],
    },
    extend: {
      boxShadow: {
        brutal: "4px 4px 0 0 black",
      },
      colors: {
        neo: "#fcd436",
        neo2: "#91D99C",
        neo3: "#fe747b",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
