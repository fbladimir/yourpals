import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Robot personality colors
        'robot-blue': '#3B82F6',
        'robot-green': '#10B981',
        'robot-orange': '#F59E0B',
        'robot-purple': '#8B5CF6',
        'robot-gray': '#6B7280',
        'robot-cyan': '#06B6D4',
        'robot-red': '#EF4444',
        'robot-pink': '#EC4899',
      },
      animation: {
        'robot-float': 'robot-float 3s ease-in-out infinite',
        'robot-bounce': 'robot-bounce 2s ease-in-out infinite',
        'personality-switch': 'personality-switch 0.5s ease-in-out',
      },
      keyframes: {
        'robot-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'robot-bounce': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'personality-switch': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
