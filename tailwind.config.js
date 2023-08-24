/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        1440:"1440px",
        1366:"1366px",
        1280:"1280px",
        1024:"1024px",
        992:"992px",
        768:"768px",
        576:"576px",
        450:"450px",
        428:"428px",
        414:"414px",
        390:"390px",
        360:"360px",
        320:"320px",
      }
    },
  },
  plugins: [],
}