import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cocoa: "#4B2418",
        earth: "#8E4328",
        cream: "#FFF8ED",
        palm: "#1F6F50",
        orange: "#E87825",
        gold: "#D9A441",
        charcoal: "#25150F"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(75, 36, 24, 0.12)",
        button: "0 10px 24px rgba(142, 67, 40, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
