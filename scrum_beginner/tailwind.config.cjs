/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#454545",
      },
      backgroundImage: {
        oneHandsIpad: "url('@/assets/images/one_hand_ipad.png')",
        twoHandsIpad: "url('@/assets/images/two_hands_ipad.png')",
        productBacklog: "url('@/assets/images/one_hand_ipad.png')",
        backlogPanel: "url('@/assets/images/backlog-panel.png')",
        sprintBlock: "url('@/assets/images/sprint_block.png')",
        block1: "url('@/assets/images/block-1.png')",
        block2: "url('@/assets/images/block-2.png')",
        block3: "url('@/assets/images/block-3.png')",
        block4: "url('@/assets/images/block-4.png')",
      },
      backgroundSize: {
        twoHandsIpad: "75vw 56.25vw",
      },
      textColor: {
        primary: "#454545",
        secondary: "#9E9D9C",
      },
    },
  },
  plugins: [],
};
