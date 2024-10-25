import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      animation: {
        // Extending the default Tailwind animations instead of replacing
        spin: "spin 1s linear infinite", // Keeping the default `animate-spin`
        "ping-large": "ping-large 1s ease-in-out infinite",
      },
      keyframes: {
        // Extending keyframes as well
        spin: {
          to: { transform: "rotate(360deg)" }, // Default spin keyframes
        },
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3.2)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
