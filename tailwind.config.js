/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'kaushan': ['Kaushan Script', 'cursive']
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
