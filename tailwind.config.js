/** @type {import('tailwindcss').Config} */

// import { plugin } from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: "#687f11",
      secondary: "#94ac1b",
      tertiary: "#446404",
      black: "#000000",
      white: "#ffffff",
      dark: "#415704",
      light: "#eef1e6",
      red: "#b91c1c",
    },
    fontFamily: {
      sans: ["Avenir", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      boxShadow: {
        DEFAULT: "5px 5px 5px 0px rgba(0, 0, 0, 0.2)",
        md: "5px 5px 5px 0px rgba(0, 0, 0, 0.8)",
      },
    },
  },
  plugins: [
    "@tailwindcss/forms",
    // plugin(function ({ matchUtilities, theme }) {
    //   matchUtilities(
    //     {
    //       "bg-gradient": (angle) => ({
    //         "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
    //       }),
    //     },
    //     {
    //       // values from config and defaults you wish to use most
    //       values: Object.assign(
    //         theme("bgGradientDeg", {}), // name of config key. Must be unique
    //         {
    //           10: "10deg", // bg-gradient-10
    //           15: "15deg",
    //           20: "20deg",
    //           25: "25deg",
    //           30: "30deg",
    //           45: "45deg",
    //           60: "60deg",
    //           90: "90deg",
    //           120: "120deg",
    //           135: "135deg",
    //         }
    //       ),
    //     }
    //   );
    // }),
  ],
};
