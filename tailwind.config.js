/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4k': '3840px',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
      }, 
      colors: {
        'brand-dark': '#0B0B0B',           // Primary background
        'brand-gray': '#121212',           // Secondary background
        'brand-crimson-red': '#E10600',    // Primary accent
        'brand-soft-red': '#FF2C2C',       // Secondary accent
        'brand-muted-gray': '#B3B3B3',     // Muted text
        'brand-light-gray': '#E5E5E5',     // Light text
        'brand-white': '#FFFFFF',          // White text
      },
    },
  },
  plugins: [],
}

