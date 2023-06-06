import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      'mono': ['Azeret Mono', 'ui-monospace'],
      'sans': ['Din', 'ui-sans-serif', 'system-ui'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config