import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["HelveticaNeue", "Arial", "sans-serif"],
      },
    },
  },
} satisfies Config;

