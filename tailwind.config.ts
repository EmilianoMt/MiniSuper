import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kodchasan', 'sans-serif'], 
      },
      colors: {
        backgroundPurple: "#7474A0",
        backgroundGray: "#E9E9E9", 
        buttonBlue: "#475792", 
        "8282A9": "#8282A9",
        foreground: "var(--foreground)", 
      },
      borderRadius: {
        lg: "12px", 
      },
    },
  },
  plugins: [nextui()],
} satisfies Config;
