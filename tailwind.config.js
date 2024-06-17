/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'custom' : '0px 20px 55px 5px rgb(0,0, 0, 0.8)'
      }
    },
    fontFamily:{
      'mont':['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}

