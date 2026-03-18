module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Pure Black + Electric Blue Theme
        background: {
          DEFAULT: '#0a0a0a',
          light: '#111111',
          card: '#111111',
        },
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#60a5fa',
          glow: 'rgba(59, 130, 246, 0.5)',
        },
        accent: {
          DEFAULT: '#3b82f6',
          dark: '#1d4ed8',
          light: '#93c5fd',
          glow: 'rgba(59, 130, 246, 0.5)',
          hover: '#2563eb',
          subtle: 'rgba(59, 130, 246, 0.1)',
        },
        text: {
          DEFAULT: '#ffffff',
          body: '#cbd5e1',
          muted: '#94a3b8',
          dark: '#64748b',
        },
        border: {
          DEFAULT: 'rgba(59, 130, 246, 0.2)',
          glow: 'rgba(59, 130, 246, 0.4)',
          accent: 'rgba(59, 130, 246, 0.3)',
        },
      },
      maxWidth: {
        content: '1200px',
      },
      spacing: {
        sidebar: '35vw',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'grid-flow': 'grid-flow 20s linear infinite',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
        'data-packet': 'data-packet 2s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'grid-flow': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '50px 50px' },
        },
        'terminal-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'data-packet': {
          '0%': { offsetDistance: '0%' },
          '100%': { offsetDistance: '100%' },
        },
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #3b82f6 0deg, #1d4ed8 180deg, #3b82f6 360deg)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'glow-accent': '0 0 20px rgba(59, 130, 246, 0.3)',
        'glow-accent-lg': '0 0 40px rgba(59, 130, 246, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.1)',
      },
    },
  },
  plugins: [],
};
