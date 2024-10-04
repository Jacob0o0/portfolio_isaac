/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hueso: '#FFF8F0',
        gradienteI: '#1F1F1F',
        gradienteF: '#FFF8F0',
        charcoal: '#1F1F1F',
        glassF: '#9F9F9F',
      },
      animation: {
        'pulse-custom': 'pulse 2.5s infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.5)',
            opacity: '.5',
          },
        },
      },
    },
  },
  plugins: [],
}