import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#18181b",
          elevated: "#202024",
          card: "#18181b",
          input: "#121212",
        },
        border: {
          DEFAULT: "rgba(252, 128, 25, 0.18)",
          muted: "rgba(224, 224, 224, 0.12)",
        },
        accent: {
          DEFAULT: "#FC8019",
          muted: "rgba(252, 128, 25, 0.14)",
        },
        highlight: {
          teal: "#2DD4BF",
          purple: "#A78BFA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "page-gradient":
          "radial-gradient(ellipse 120% 80% at 50% -20%, rgba(252, 128, 25, 0.16) 0%, rgba(18, 18, 18, 0.96) 38%, #050505 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
