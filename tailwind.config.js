/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      backgroundImage: {
        'headerBack': "url('../img/Слой 1.png')",
        'headerBackAvatar': "url('../img/Ivan.png')",
      },

      backgroundSize: {
        '100%': '100%',
        '200%': '200%',
      },

      colors: {
        'purple': '#FF00FF',
      },

      fontSize: {
        'logoSize': '64px',
      },

      fontFamily: {
        TNR: "TNR",
      },

    },
  },
  plugins: [],
}