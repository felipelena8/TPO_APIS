/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "coral": '#E04556',
        "rosa": '#FFF1F1',
        "verde": "#00CA5D",
        "celeste": "#20B0CF"
      },
      boxShadow: {
        'card': '0px 0px 43px - 14px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}

