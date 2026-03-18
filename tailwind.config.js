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
        // Dynamic theme colors - will be overridden by CSS variables
        background: {
          DEFAULT: 'var(--background)',
          light: 'var(--background-light)',
          card: 'var(--background-card)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          light: 'var(--primary)',
          glow: 'var(--border-glow)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          dark: 'var(--accent-dark)',
          light: 'var(--primary)',
          glow: 'var(--border-glow)',
          hover: 'var(--primary-dark)',
          subtle: 'var(--border-glow)',
        },
        text: {
          DEFAULT: 'var(--text)',
          body: 'var(--text-body)',
          muted: 'var(--text-muted)',
          dark: 'var(--text-muted)',
        },
        border: {
          DEFAULT: 'var(--border-glow)',
          glow: 'var(--border-glow)',
          accent: 'var(--border-glow)',
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
          '0%, 100%': { boxShadow: '0 0 20px var(--border-glow)' },
          '50%': { boxShadow: '0 0 40px var(--border-glow)' },
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
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, var(--primary) 0deg, var(--accent-dark) 180deg, var(--primary) 360deg)',
      },
      boxShadow: {
        'glow': '0 0 20px var(--border-glow)',
        'glow-lg': '0 0 40px var(--border-glow)',
        'glow-accent': '0 0 20px var(--border-glow)',
        'glow-accent-lg': '0 0 40px var(--border-glow)',
        'inner-glow': 'inset 0 0 20px var(--border-glow)',
      },
    },
  },
  plugins: [],
};
