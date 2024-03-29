/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '0px',
      'md': '850px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        "inter": ['Inter', 'sans-serif'],
        "poppins": ['Poppins', 'sans-serif'],
        "rubik": ['Rubik', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

