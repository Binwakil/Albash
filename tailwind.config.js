/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('')",
        'folder-bg': "url('')",
        'upload-bg': "url('')",
      },
      colors: {
        text_primary: "#696D70",
        primary: "#004181",
        // primarylight: "#004181",
       secondary: "#2B1A82",
      //  secondarylight: "#004181",
      colorBlack: "#071625"
      
      }


    },
  },
  plugins: [],
}

