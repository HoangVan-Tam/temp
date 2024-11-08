/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: { 1: "#EF482A", 2: "#E80F6D" },
        blue: { 1: "#4C96D1", 2: "#154D9F" },
        yellow: { 1: "#F3B817" },
      },
      height: {
        128: "32rem",
      },
    },
  },
  plugins: [],
};
