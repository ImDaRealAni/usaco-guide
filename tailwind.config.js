const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-surface': '#121212',
        'dark-high-emphasis': 'rgba(255,255,255,0.87)',
        'dark-med-emphasis': 'rgba(255, 255, 255, 0.60)',
        'dark-disabled-emphasis': 'rgba(255, 255, 255, 0.38)',
      },
    },
  },
  variants: {
    // extend: {
    //   textColor: ['disabled'],
    // },
    // variants: [
    //   // 'responsive',
    //   // 'group-hover',
    //   // 'group-focus',
    //   // 'focus-within',
    //   // 'first',
    //   // 'last',
    //   // 'odd',
    //   // 'even',
    //   // 'hover',
    //   // 'focus',
    //   // 'active',
    //   // 'visited',
    //   // 'disabled',
    //   'dark',
    //   'dark-hover',
    //   'dark-focus',
    //   'dark-active',
    //   'dark-disabled',
    //   'dark-group-hover',
    //   'dark-focus-within',
    //   'dark-even',
    //   'dark-odd',
    //   'dark-placeholder',
    // ],
    display: ['responsive', 'dark'],
    divideColor: ['responsive', 'dark'],
    backgroundColor: [
      'responsive',
      'group-hover',
      'group-focus',
      'hover',
      'focus',
      'active',
      'dark',
      'dark-group-hover',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    backgroundOpacity: [
      'responsive',
      'group-hover',
      'group-focus',
      'hover',
      'focus',
      'active',
      'dark',
      'dark-group-hover',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    borderColor: [
      'responsive',
      'group-hover',
      'group-focus',
      'hover',
      'focus',
      'dark',
      'dark-group-hover',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    boxShadow: ['responsive', 'group-focus', 'hover', 'focus', 'dark-active'],
    placeholderColor: [
      'responsive',
      'focus',
      'dark',
      'dark-focus',
      'dark-active',
    ],
    textColor: [
      'disabled',
      'responsive',
      'group-hover',
      'group-focus',
      'hover',
      'focus-within',
      'focus',
      'active',
      'dark',
      'dark-group-hover',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    textDecoration: [
      'responsive',
      'group-hover',
      'group-focus',
      'hover',
      'focus',
      'dark',
      'dark-group-hover',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    gradientColorStops: [
      'responsive',
      'hover',
      'focus',
      'dark',
      'dark-group-hover',
      'dark-hover',
      'dark-focus',
      'dark-active',
    ],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [require('tailwindcss-dark-mode')(), require('@tailwindcss/ui')],
  purge: {
    whitelist: ['mode-dark'],
    content: [
      './src/**/*.js',
      './src/**/*.ts',
      './src/**/*.tsx',
      './content/**/*.mdx',
      './gatsby-browser.tsx',
    ],
  },
};
