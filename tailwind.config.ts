import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "100%",
        md: "728px",
        lg: "960px",
        xl: "960px",
        "2xl": "1200px"
      },
    },
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
      },
      fontFamily: {
        plusjakarta: ["PlusJakartaSans", "sans-serif"],
      },
      screens: {
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
