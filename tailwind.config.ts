
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "#1A1F2C",
        foreground: "#FFFFFF",
        sidebar: "#22263a",
        sidebarAccent: "#9b87f5",
        card: "#22263a",
        accent: "#9b87f5",
        muted: "#2b3147",
        border: "#333850",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        glass: "0 4px 32px 0 rgba(20,20,45,0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
