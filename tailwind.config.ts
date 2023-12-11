import type { Config } from 'tailwindcss'

const { colors: defaultColors } = require('tailwindcss/defaultTheme')

const colors = {
    ...defaultColors,
    ...{
        "custom": {
            "100": "hsl(234, 12%, 34%)",
            "200" : "hsl(229, 6%, 66%)",
            "300" : "hsl(0, 0%, 98%)"
        },
        "c" :{
          "100" : "hsl(180, 62%, 55%)",
        },
        "r" :{
          "100" : "hsl(0, 78%, 62%)",
        },
        "b" :{
          "100" : "hsl(212, 86%, 64%)",
        },
        "o" :{
          "100" : "hsl(34, 97%, 64%)",
        },
    },
}


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors : colors
    },
  },
  plugins: [],
}
export default config
