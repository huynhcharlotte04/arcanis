import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        graphite: "#111418",
        obsidian: "#080A0D",
        slateblue: "#283849",
        copper: "#C98B5A",
        brass: "#E0BE7C",
        porcelain: "#F4EFE7",
        mist: "#C4CEDA",
        inkline: "rgba(244, 239, 231, 0.12)"
      },
      boxShadow: {
        premium: "0 28px 90px rgba(0, 0, 0, 0.38)"
      },
      fontFamily: {
        sans: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
