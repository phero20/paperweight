import type { Config } from 'tailwindcss'

const config: Config = {
  theme: {
    extend: {
      colors: {
        paper: '#FDFBF7', // Warm cream background
        ink: '#1c1c1c',   // Soft black text
        accent: '#8B0000', // Deep editorial red for buttons/highlights
      },
    },
  },
}

export default config
