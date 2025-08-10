import type { Config } from "tailwindcss";
export default {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#1A1B23",
        blueA: "#4978F2",
        blueB: "#7666F3",
        tealA: "#5ABDA7"
      },
      boxShadow: { card: "0 6px 24px rgba(0,0,0,.24)" },
      backgroundImage: {
        "hero-grad":
          "radial-gradient(1200px 600px at 10% 0%, rgba(73,120,242,.15), transparent 50%), radial-gradient(1000px 500px at 90% 30%, rgba(118,102,243,.15), transparent 60%)"
      }
    }
  },
  plugins: []
} satisfies Config;
