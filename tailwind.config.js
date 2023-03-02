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
        secondary: {
          solid:"#ffa500",
          light:"#ffa50030"
        },
        tertiary: '#F5F6FC',
        quaternary: '#7292CF',
      },
    },
  },
};
