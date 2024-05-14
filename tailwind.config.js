/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#0D74B3",
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
