/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          fadeIn: 'fadeIn 1s ease-out',
          slideInRight: 'slideInRight 0.5s ease-out',
          pulse: 'pulse 2s infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(50px)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          pulse: {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.05)' },
          },
        },
      },
    },
    plugins: [],
  }