import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#F2C14E",
          dark: "#0b0b0f"
        }
      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(90deg, #F2C14E 0%, #E8A626 100%)',
        'brand-grad-soft': 'linear-gradient(90deg, rgba(242,193,78,0.25), rgba(232,166,38,0.15))'
      },
      boxShadow: {
        glow: "0 0 30px rgba(242,193,78,0.3)"
      }
    },
  },
  plugins: [],
};

export default config;
