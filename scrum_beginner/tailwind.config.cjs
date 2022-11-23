/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#454545",
      },
      backgroundImage: {
        twoHandsIpad: "url('@/assets/images/two_hands_ipad.png')",
      },
      backgroundSize: {
        twoHandsIpad: "75vw 56.25vw",
      },
      textColor: {
        primary: "#454545",
      },
    },
  },
  plugins: [],
};
