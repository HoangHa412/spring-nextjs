import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '769px',
        '2xl': '1440px'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        subtle: 'var(--text-subtle)',
        primary: 'var(--primary)'
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '7': '2rem',
        '8': '2.5rem',
        '9': '2.75rem',
        '10': '3rem',
        '11': '4rem',
        '12': '5rem',
        '13': '6rem'
      },
      borderRadius: {
        sharp: '0',
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        fill: '200px'
      },
    }
  },
  plugins: []
}
export default config
