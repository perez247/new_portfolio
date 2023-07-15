const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F5F0EA',
        other: '#E3D2BB',
        secondary: '#3C3833',
        tetiary: '#00917C',
        appGrey: '#F3F3F3',
        appGrey2: '#9B9BA3',
        antique: 'antiquewhite',
        appRed: '#BF1D20',
      },
      fontFamily: {
        body: ['Josefin Sans']
      }
    },
  },
  plugins: [],
});