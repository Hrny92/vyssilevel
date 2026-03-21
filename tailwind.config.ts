import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#142f4C",
          50: "#e8edf2",
          100: "#c5d3de",
          200: "#9fb5c8",
          300: "#7897b2",
          400: "#587fa2",
          500: "#3a6892",
          600: "#2e5a80",
          700: "#214a6b",
          800: "#1a3d59",
          900: "#142f4C",
          950: "#0d1f32",
        },
        sky: {
          brand: "#3FB1E1",
          light: "#7dcce9",
          dark: "#2a8eb8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-navy": "linear-gradient(135deg, #142f4C 0%, #1e4a72 100%)",
        "gradient-sky": "linear-gradient(135deg, #3FB1E1 0%, #2a8eb8 100%)",
        "gradient-hero":
          "linear-gradient(180deg, rgba(20,47,76,0.85) 0%, rgba(20,47,76,0.4) 100%)",
        "gradient-section":
          "linear-gradient(135deg, #142f4C 0%, #1e4a72 50%, #3FB1E1 100%)",
        "gradient-card":
          "linear-gradient(135deg, rgba(63,177,225,0.1) 0%, rgba(20,47,76,0.05) 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-down": "slideDown 0.3s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
