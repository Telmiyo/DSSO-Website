module.exports = {
  mode: "jit",
  content: [],
  content: [
    "./public/**/*.html",
    // './src/**/*.{js,jsx,ts,tsx,vue}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        roles: {
          programmer: "#EB8A8A",
          designer: "#639DE5",
          artist: "#52C1AF",
          leadprogrammer: "#DE3C3C",
          leaddesigner: "#3C85DE",
          leadartist: "#27B29B",
          producer: "#663CDE",
        },
        dune: {
          white: "#F8F6F6",
          lightblue: "#A0D1D7",
          black: "#464855",
          orangespicy: "#E4865B",
          bluefremen: "#12868D",
          ultralightblue: "#D1EEEF",
          ultradeepblue: "#0E656A",
        },
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      fonseca: ["Fonseca", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("flowbite/plugin")],
};
