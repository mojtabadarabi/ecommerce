import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/icons/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#0C68F4',
          '500':'#063A88',
          '900':'#021736'
        },
        secondary: {
          DEFAULT: '#F45E0C',
          '100':'#FDDBC9'
        },
        gray:{
          DEFAULT:'#717171'
        },
        black:'#0C0C0C'
      },
      boxShadow: {
        '1': '-1px 0px 1px -1px rgba(0,7,23,0.5)',
        '2': '1px 1px 5px -1px rgba(0,7,23,0.5)'
      }
    },
  },
  plugins: [],
} satisfies Config;
