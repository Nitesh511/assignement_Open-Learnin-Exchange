import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        h1: ["36px", { lineHeight: "130%", letterSpacing: "0%" }],
        base: ["16px", { lineHeight: "150%", letterSpacing: "0%" }],
        navbar: ["16px", { lineHeight: "100%", letterSpacing: "0%" }],
        button: ["16px", { lineHeight: "110%", letterSpacing: "0%" }],
      },
      fontWeight: {
        regular: "400",
        semibold: "600",
        bold: "700",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
