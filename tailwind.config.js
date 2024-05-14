/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#A2D2FF",
          100: "#BDE0FE",
        },
        pink: {
          550: "#FFC8DD",
          650: "#FFAFCC",
          750: "#E58C8A",
          850: "#DEBEDC",
        },
      },
    },
  },
  plugins: [],
}
