/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1970F1", 
        secondary: "#909090", 
        danger: "#DF4759", 
        lightGrey:"#EEEEEE",
        lighestGrey:"#F1F1F1",
        sideText:"#808080"
        
       
       
      },
    },
  },
  plugins: [],
}