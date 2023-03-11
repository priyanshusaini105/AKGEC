const {plugin} = require('twrnc');
module.exports = {
  plugins: [
    plugin(({addUtilities}) => {
      addUtilities({
        'font-nunito': {
          fontFamily: 'Nunito-Regular',
        },
        'font-nunito-bold': {
          fontFamily: 'Nunito-Bold',
        },
        'font-nunito-semibold': {
          fontFamily: 'Nunito-SemiBold',
        },
        roundedLayout: `bg-white rounded-t-7`,
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2855AE',
        // primary: '#1DAB87',
        secondary: {
          solid: '#ffa500',
          light: '#ffa50030',
        },
        tertiary: {
          solid: '#DD50F2',
          light: '#DD50F230',
        },
        quaternary: '#7292CF',
        quinary: '#F5F6FC',
      },
    },
  },
};
