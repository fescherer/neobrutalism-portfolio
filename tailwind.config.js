const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['!./node_modules', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: 'var(--background)',
      'background-accent': 'var(--background-accent)',
      foreground: 'var(--foreground)',
      'foreground-accent': 'var(--foreground-accent)',
      primary: 'var(--primary)',
      'primary-dark': 'var(--primary-dark)',
      'primary-contrast': 'var(--primary-contrast)'
    },
    fontFamily: {
      sans: ["'Darker Grotesque', sans-serif", ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      xs: '0.5rem', // 8px
      sm: '0.625rem', // 10px
      base: '0.875rem', // 14px
      xl: '1rem', // 16px
      '2xl': '1.125rem', // 18px
      '3xl': '1.25rem', // 20px
      '4xl': '2rem', // 32px
      '5xl': '2.5rem', // 40px
      '6xl': '4rem' // 64px
    },
    extend: {}
  },
  plugins: []
}
