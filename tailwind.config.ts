import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#000000",
        background: "#000000",
        primary: "#FFFFFF",
        secondary: "#00bf63",
        accent: "#1526b4",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Playfair Display', 'Merriweather', 'serif'],
      },
      fontSize: {
        'base': '18px',
        'h1': '2.8rem',
        'h2': '2.25rem',
        'h3': '1.875rem',
        'h4': '1.5rem',
        'h5': '1.25rem',
        'h6': '1.125rem',
      },
      animation: {
        "background-gradient": "background-gradient var(--background-gradient-speed, 15s) cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite",
      },
      keyframes: {
        "background-gradient": {
          "0%, 100%": { 
            transform: "translate(calc(var(--tx-1, 0) * 100px), calc(var(--ty-1, 0) * 100px))" 
          },
          "25%": { 
            transform: "translate(calc(var(--tx-2, 0) * 100px), calc(var(--ty-2, 0) * 100px))" 
          },
          "50%": { 
            transform: "translate(calc(var(--tx-3, 0) * 100px), calc(var(--ty-3, 0) * 100px))" 
          },
          "75%": { 
            transform: "translate(calc(var(--tx-4, 0) * 100px), calc(var(--ty-4, 0) * 100px))" 
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
export default config;

