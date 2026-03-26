/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'aleman-red': '#8B0000',
        'aleman-black': '#111111',
        'aleman-gold': '#C9A227',
        'aleman-cream': '#F5F0E6',
        'aleman-gray': '#2C2C2C',
      },
      fontFamily: {
        serif: ['var(--font-playfair)'],
        sans: ['var(--font-lato)'],
      },
    },
  },
  plugins: [],
}