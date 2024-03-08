/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "themeAccent": "#3d5a80",
        "themePrimary": "#98c1d9",
        "themeNeutral": "#e0fbfc",
        "themeDanger": "#ee6c4d",
        "themeText": "#293241",
        "themeWhite": "#FFF",
        "themeBlack": "#070504"
      },
      fontFamily: {
        'themeFont' : ['Montserrat', 'sans']
      }
    },
  },
  plugins: [],
};
