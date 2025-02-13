const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
   mode: 'jit',
   corePlugins: {
      container: false, //! I am using tailwind-bootstrap-grid
   },
   // darkMode: 'class',
   future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
   },
   experimental: {
      applyComplexClasses: true,
   },

   content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
   theme: {
      // customForms: theme => ({
      //    default: {
      //       'input, textarea': {
      //          '&::placeholder': {
      //             color: theme('colors.primary'),
      //          },
      //       },
      //    },
      // }),
      extend: {
         clipPath: {
            triangle: "polygon(0 0, 100% 0, 0 100%)",
         },


         // typography: theme => ({
         //    DEFAULT: {
         //       css: {
         //          color: theme('white'),
         //       },
         //    },
         // }),
         fontFamily: {
            en: [ 'Gotham', ...defaultTheme.fontFamily.sans],
            ar: ['Cairo', ...defaultTheme.fontFamily.sans],
            '29ltbukra': ['"29ltbukra"', ...defaultTheme.fontFamily.sans],
            // system: ['Segoe UI', ...defaultTheme.fontFamily],
         },
         colors: {
            // primary color
            // NAVY BLUE
            primary: {
               DEFAULT: '#1B3888',
               50: '#7794E4',
               100: '#6686E1',
               200: '#446CDA',
               300: '#2954CC',
               400: '#2246AA',
               500: '#1B3888',
               600: '#122559',
               700: '#08112A',
               800: '#000000',
               900: '#000000',
               950: '#000000'
            },
            // secondary color
            // turquoise - light green
            secondary: {
               DEFAULT: '#1EDCA9',
               50: '#BCF6E6',
               100: '#AAF3E0',
               200: '#86EED2',
               300: '#62EAC5',
               400: '#3EE5B8',
               500: '#1EDCA9',
               600: '#17AB83',
               700: '#11795D',
               800: '#0A4837',
               900: '#031711',
               950: '#000000'
            },
            // blue
            'accent-1': {
               DEFAULT: '#0077C0',
               50: '#79CCFF',
               100: '#64C4FF',
               200: '#3BB5FF',
               300: '#13A5FF',
               400: '#0090E9',
               500: '#0077C0',
               600: '#005488',
               700: '#003150',
               800: '#000F18',
               900: '#000000',
               950: '#000000',
            },
            // green yellow
            'accent-2': {
               DEFAULT: '#C3FF42',
               50: '#FDFFFA',
               100: '#F7FFE5',
               200: '#EAFFBC',
               300: '#DDFF94',
               400: '#D0FF6B',
               500: '#C3FF42',
               600: '#B1FF0A',
               700: '#8FD100',
               800: '#689900',
               900: '#426100',
               950: '#2F4500',
            },

            error: {
               DEFAULT: '#FF5A84',
               50: '#FFC0D0',
               100: '#FFABC1',
               200: '#FF82A3',
               300: '#FF5A84',
               400: '#FF3166',
               500: '#FF0848',
               600: '#CF0036',
               700: '#970027',
               800: '#5F0019',
               900: '#27000A',
               950: '#0B0003',
            },
         },
         backgroundImage: {
            // 'body-bg': "url('/images/body-bg-3.png')",
            // 'body-bg': "url('/images/test_bg_2.jpg')",
            // 'body-bg-1': "url('/images/picture_11.png')",
            // 'body-bg-2': "url('/images/picture_22.png')",
            // 'test-bg': "url('/images/test_bg.png')",
            // 'body-bg': "url('/images/bg_body_sm.jpg')",
            'hero': "url('/images/hero.png')",
            'hero-rtl': "url('/images/hero-rtl.jpg')",
            'hero-sm': "url('/images/hero-sm.png')",
            'together': "url('/images/together-bg-lg.png')",
            'together-ltr': "url('/images/together-bg-lg-rtl.png')",
            'together-sm': "url('/images/together-bg-sm.png')",
            'exhibition-market': "url('/images/exhibition_market.png')",
         },
      },
   },
   variants: {
      float: ['responsive', 'direction'],
      margin: ['responsive', 'direction'],
      padding: ['responsive', 'direction'],
      inset: ['responsive', 'direction'],
      fontFamily: ['direction'],
      backgroundColor: ['responsive', 'direction', 'hover', 'focus', 'disabled', 'dark'],
      display: ['responsive', 'dark'],
      textColor: ['responsive', 'direction', 'hover', 'focus', 'disabled', 'dark'],
      placeholderColor: ['focus', 'dark'],
      borderColor: ['responsive', 'direction', 'hover', 'focus', 'disabled', 'dark'],
      textAlign: ['responsive', 'direction'],
      justifyContent: ['responsive', 'direction'],
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      cursor: ['responsive', 'disabled'],
      rotate: ['responsive', 'hover', 'focus', 'direction'],
      space: ['responsive', 'direction'],
      borderWidth: ['responsive', 'direction'],
      borderRadius: ['responsive', 'direction'],
      backgroundPosition: ['responsive', 'direction'],
      letterSpacing: ['responsive', 'direction'],
      boxShadow: ['focus'],
      order: ['direction'],
      divideColor: ['dark'],
   },
   plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
      require('tailwind-bootstrap-grid')({
         rtl: true,
         // containerMaxWidths: { sm: '540px', md: '720px', lg: '960px', xl: '1140px' },
      }),

      plugin(function ({ addUtilities, variants }) {
         const newUtilities = {
            '.flip-x': {
               '--transform-scale-x': '-1',
            },
            '.flip-y': {
               '--transform-scale-y': '-1',
            },
         };
         addUtilities(newUtilities, variants('flip'));
      }),

      plugin(function ({ addVariant }) {
         addVariant('hocus', ['&:hover', '&:focus']);
      }),
   ],
};
