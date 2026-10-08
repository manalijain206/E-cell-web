/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        spaceNavy: {
          950: '#010409', // Deepest cosmic void
          900: '#020617', // Primary space background
          850: '#050B18', // Deep midnight navy
          800: '#0B132B', // Secondary space surface
          750: '#0F1D38', // Elevated navy card
          700: '#1E293B', // Muted slate border
        },
        stellarCyan: {
          accent: '#38BDF8', // Electric cosmic cyan
          pale: '#7DD3FC',   // Soft cyan frost
          frost: '#E0F2FE',  // Starlight white-cyan
        },
        astralBlue: {
          bright: '#60A5FA',
          deep: '#1E3A8A',
        },
        ivory: {
          main: '#F8FAFC',  // Crisp starlight text
          muted: '#94A3B8', // Muted celestial text
          dim: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'breathe-slow': 'breathe 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.04)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
