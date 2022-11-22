/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#454545",
      },
    },
  },
  plugins: [],
};
