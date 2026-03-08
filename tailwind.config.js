/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        bg:        '#0c0c0e',
        surface:   '#131316',
        surface2:  '#1a1a1f',
        primary:   '#f0f0ee',
        secondary: '#9898a0',
        muted:     '#55555e',
      },
      keyframes: {
        pixelFlicker: {
          '0%, 94%, 100%': { opacity: '1' },
          '95%':           { opacity: '0.85' },
          '96%':           { opacity: '1' },
          '97%':           { opacity: '0.9' },
          '98%':           { opacity: '1' },
        },
        pixelGlitch: {
          '0%, 89%, 100%': { opacity: '0', transform: 'translate(0)' },
          '90%':  { opacity: '0.7', transform: 'translate(-4px,0)', color: '#5cffa0' },
          '91%':  { opacity: '0',   transform: 'translate(4px,0)' },
          '92%':  { opacity: '0.5', transform: 'translate(-2px,1px)', color: '#ff5c8a' },
          '93%':  { opacity: '0' },
        },
        floatBlock: {
          '0%':   { transform: 'translateY(12px) rotate(0deg)',   opacity: '0' },
          '10%':  { opacity: '0.7' },
          '90%':  { opacity: '0.5' },
          '100%': { transform: 'translateY(-40px) rotate(90deg)', opacity: '0' },
        },
        scrollLine: {
          '0%, 100%': { opacity: '0.3', width: '40px' },
          '50%':      { opacity: '1',   width: '60px' },
        },
      },
      animation: {
        'pixel-flicker': 'pixelFlicker 6s ease-in-out infinite',
        'pixel-glitch':  'pixelGlitch 7s 2s infinite',
        'float-block':   'floatBlock linear infinite',
        'scroll-line':   'scrollLine 1.8s ease-in-out infinite',
      },
      textShadow: {
        pixel: '4px 4px 0 #2a2a30, 8px 8px 0 #1a1a1f, 12px 12px 0 #111115',
      },
    },
  },
  plugins: [
    // Simple text-shadow plugin
    function({ matchUtilities, theme }) {
      matchUtilities(
        { 'text-shadow': (value) => ({ textShadow: value }) },
        { values: theme('textShadow') }
      );
    },
  ],
}
