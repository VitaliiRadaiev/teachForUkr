/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/teachForUkraine/sections/**/*.php", 
    "./themes/teachForUkraine/modules/**/*.php",
    "./themes/teachForUkraine/*.php",
    "./plugins/gutenberg-custom-blocks/src/**/**/*.php",
  ],
  darkMode: "class",
  theme: {
    screens: {
      'sm': '576px',
      'md': '744px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1600px',
      '4xl': '1920px',
      'sm-max': {'max': '575.98px'},
      'md-max': {'max': '743.98px'},
      'lg-max': {'max': '1023.98px'},
      'xl-max': {'max': '1279.98px'},
      '2xl-max': {'max': '1439.98px'},
      '3xl-max': {'max': '1599.98px'},
      '4xl-max': {'max': '1919.98px'}
    },
    fontFamily: {
      ['main-font-family']: ['var(--main-font-family)'],
      ['main-font-family-italic']: ['var(--main-font-family-italic)'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
      },
    },
    extend: {
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '48': '48',
        '49': '49',
        '50': '50',
      },
      screens: {
        'only-mobile': { 'min': '0px', 'max': '47.99875rem' }
      },
      backgroundColor: {
        'background': 'var(--color-background)',
        
        'accent-first': 'var(--color-accent-first)',
        'accent-first-50': 'var(--color-accent-first-50)',
        'accent-first-10': 'var(--color-accent-first-10)',
        'accent-first-5': 'var(--color-accent-first-5)',

        'accent-second': 'var(--color-accent-second)',
        'accent-second-50': 'var(--color-accent-second-50)',
        'accent-second-10': 'var(--color-accent-second-10)',
        'accent-second-5': 'var(--color-accent-second-5)',

        'accent-third': 'var(--color-accent-third)',
        'accent-fourth': 'var(--color-accent-fourth)',
        'accent-fifth': 'var(--color-accent-fifth)',

        'dark-primary': 'var(--color-dark-primary)',
        'dark-primary-80': 'var(--color-dark-primary-80)',
        'dark-primary-60': 'var(--color-dark-primary-60)',
        'dark-primary-10': 'var(--color-dark-primary-10)',

        'light-primary': 'var(--color-light-primary)',
        'light-primary-80': 'var(--color-light-primary-80)',
        'light-primary-60': 'var(--color-light-primary-60)',
        'light-primary-40': 'var(--color-light-primary-40)',
      },
      colors: {
        'accent-first': 'var(--color-accent-first)',
        'accent-first-50': 'var(--color-accent-first-50)',
        'accent-first-10': 'var(--color-accent-first-10)',
        'accent-first-5': 'var(--color-accent-first-5)',

        'accent-second': 'var(--color-accent-second)',
        'accent-second-50': 'var(--color-accent-second-50)',
        'accent-second-10': 'var(--color-accent-second-10)',

        'accent-third': 'var(--color-accent-third)',
        'accent-fourth': 'var(--color-accent-fourth)',
        'accent-fifth': 'var(--color-accent-fifth)',

        'dark-primary': 'var(--color-dark-primary)',
        'dark-primary-80': 'var(--color-dark-primary-80)',
        'dark-primary-60': 'var(--color-dark-primary-60)',
        'dark-primary-10': 'var(--color-dark-primary-10)',

        'light-primary': 'var(--color-light-primary)',
        'light-primary-80': 'var(--color-light-primary-80)',
        'light-primary-60': 'var(--color-light-primary-60)',
        'light-primary-40': 'var(--color-light-primary-40)',
      },
      objectPosition: {
        'center-bottom': 'center bottom',
      }
    },
    transitionDuration: {
      DEFAULT: '150ms'
    }
  },
  corePlugins: {
    //aspectRatio: false,
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [],
};
