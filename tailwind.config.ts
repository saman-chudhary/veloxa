import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111318",       // primary background / near-black
        secondary: "#1A1D24",  // panels, cards, header
        light: "#F5F5F5",      // light surfaces / inverted text
        accent: "#FFD54A",     // speed-yellow, CTAs, highlights
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      clipPath: {
        slant: "polygon(0 0, 100% 0, 100% 88%, 0 100%)",
      },
      backgroundImage: {
        "speed-lines":
          "repeating-linear-gradient(115deg, rgba(255,213,74,0.08) 0px, rgba(255,213,74,0.08) 2px, transparent 2px, transparent 40px)",
      },
    },
  },
  plugins: [],
};
export default config;
