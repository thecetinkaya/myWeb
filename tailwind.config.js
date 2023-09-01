/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        shades: {
          100: "#cfd1d4",
          200: "#9fa2aa",
          300: "#6f747f",
          400: "#3f4555",
          500: "#0f172a",
          600: "#0c1222",
          700: "#090e19",
          800: "#060911",
          900: "#030508"
},
      },
      fontFamily:{
        logo:'Josefin Sans',
        poppins:'Poppins',
        
      }
    },
  },
  
  plugins: [],
}