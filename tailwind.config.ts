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
        background: "#070B10",
        secondary: "#0F1722",
        card: "rgba(255, 255, 255, 0.04)",
        border: "rgba(255, 215, 160, 0.18)",
        primary: "#F8FAFC",
        muted: "#9AA4B2",
        gold: "#D6B36A",
        champagne: "#E6D4B0",
        blueAccent: "#4A9EFF",
      },
      fontFamily: {
        serif: ['var(--font-canela)', 'Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['var(--font-inter)', 'Manrope', 'Satoshi', 'sans-serif'],
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        section: "140px",
      },
    },
  },
  plugins: [],
};
export default config;
