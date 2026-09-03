/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sre: {
          bg:       '#0a0e0f',
          surface:  '#0f1419',
          surface2: '#161d24',
          border:   '#1e2d2f',
          green:    '#00ff88',
          cyan:     '#00d4ff',
          amber:    '#f5a623',
          danger:   '#ff4444',
          muted:    '#8a97a8',
        },
      },
      fontFamily: {
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow':   'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink':        'blink 1s step-end infinite',
        'scan':         'scan 8s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
};
