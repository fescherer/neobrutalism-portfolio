// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '!./node_modules',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/icons/**/*.{js,ts,jsx,tsx}',
    './src/i18n/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      background: 'var(--background)',
      'background-accent': 'var(--background-accent)',
      foreground: 'var(--foreground)',
      'foreground-accent': 'var(--foreground-accent)',
      primary: 'var(--primary)',
      'primary-dark': 'var(--primary-dark)',
      'primary-contrast': 'var(--primary-contrast)',
      overlay: 'var(--black-overlay)'
    },
    fontFamily: {
      sans: ["'Darker Grotesque', sans-serif", ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      xs: '0.625rem', // 10px
      sm: '0.75rem', //12px
      base: '0.875rem', // 14px
      xl: '1rem', // 16px
      '2xl': '1.125rem', // 18px
      '3xl': '1.25rem', // 20px
      '4xl': '2rem', // 32px
      '5xl': '2.5rem', // 40px
      '6xl': '4rem' // 64px
    },
    extend: {
      height: {
        0.063: '0.063rem'
      },
      transitionProperty: {
        width: 'width'
      },
      rotate: {
        '-4': '-4deg'
      },
      maxWidth: {
        project: '1050px'
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
        15: '3.75rem'
      },
      dropShadow: {
        'neo-1-light': '1px 1px 0px var(--primary)',
        'neo-5-foreground': '5px 5px 0px var(--foreground)',
        'neo-1': '1px 1px 0px var(--primary-dark)',
        'neo-2': '2px 2px 0px var(--primary-dark)',
        'neo-3': '3px 3px 0px var(--primary-dark)',
        'neo-5': '5px 5px 0px var(--primary-dark)'
      },
      keyframes: {
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' }
        },
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '35vw' }
        },
        pop: {
          from: { opacity: 0, transform: 'scale(0.5, 0.5)' },
          to: { opacity: 1, transform: 'scale(1, 1)' }
        }
      },
      animation: {
        scale: 'scale 8s ease-in-out infinite',
        grow: 'grow 0.5s ease',
        pop: 'pop 350ms cubic-bezier(0.27,0.53,0.59,1.00)',
        'bounce-fast': 'bounce 500ms linear infinite'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
