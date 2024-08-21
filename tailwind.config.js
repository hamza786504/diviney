/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "theme-sky" : "#00DFDF",
        "theme-orange" : "#FF7847",
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #FA807C, #9070B7, #22A2E6, #3DCDEE)',
        'white-along-gradient': 'linear-gradient(to right, white 40%, rgba(250, 128, 124, 0.4) 60%, rgba(144, 112, 183, 0.4) 75%, rgba(34, 162, 230, 0.4) 95%, rgba(61, 205, 238, 0.4))'
      },
      borderWidth: {
        '2': '2px',
        '3': '3px',
      },
      borderRadius: {
        'full': '9999px',
      },
    },
  },
  plugins: [],
}
