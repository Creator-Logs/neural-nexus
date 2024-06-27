import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#23A1A1",
        black: "#0C0D0E",
        "dark-gray": "#26292B",
        blue: "#286298",
        white: "#F7F7F7",
        "blue-gray": "#BAC9CA",
        gray: "#616A6B",
        purple: "#4032E2",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.414rem",
        xl: "1.999rem",
        "2xl": "2.827rem",
        "3xl": "3.998rem",
        "4xl": "5.653rem",
        "5xl": "7.993rem",
      },
    },
  },
  plugins: [],
};
export default config;
