import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'mono': ['Azeret Mono']
    },
    extend: {},
  },
  plugins: [],
} satisfies Config