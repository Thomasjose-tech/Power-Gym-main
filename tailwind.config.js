/** @type {import('tailwindcss').Config} */
import { screens as _screens } from 'tailwindcss/defaultTheme';

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
];

export const theme = {
  extend: {
    screens: {
      'xs': '330px',
      ..._screens,
    },
    colors: {
      primaryText: "#9C9C9C",
      accent: "#F34E3A",
    },
    keyframes: {
      "graphic-animation": {
        "0%": { opacity: "0", transform: "scale(0.8)" },
        "50%": { opacity: "0.5", transform: "scale(1.05)" },
        "100%": { opacity: "1", transform: "scale(1)" },
      },
    },
    animation: {
      "graphic-animation": "graphic-animation 1.5s ease-in-out",
    },
  },
};

export const plugins = [];
