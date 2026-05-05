/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0B0B0B',
          surface: '#111111',
          elevated: '#161616',
        },
        gold: {
          DEFAULT: '#facd12',
          hover: '#facd12',
          muted: '#facd1220',
        },
        zinc: {
          925: '#0f0f0f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05' }],
        '8xl': ['6rem',   { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.06)',
        gold: '#facd12',
      },
      boxShadow: {
        'gold-sm': '0 0 0 1px rgba(212,175,55,0.3)',
        'gold-glow': '0 0 24px rgba(212,175,55,0.15)',
        'surface': '0 1px 0 rgba(255,255,255,0.04)',
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
