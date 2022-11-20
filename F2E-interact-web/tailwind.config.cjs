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
        footer: 'rgba(239, 69, 101, 0.9)'
      },
      backgroundImage: {
        'index-background': "url('@/assets/images/index-background.png')"
      }
    }
  },
  plugins: []
}
