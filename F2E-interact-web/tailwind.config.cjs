/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        header: '#3DA9FC',
        footer: 'rgba(239, 69, 101, 0.9)',
        primary: '#BAE8E8',
        secondary: '#E3F6F5'
      },
      backgroundImage: {
        'grid-background': "url('@/assets/images/grid-background.png')",
        monitor_girl: "url('@/assets/images/monitor_girl.png')"
      }
    }
  },
  plugins: []
}
