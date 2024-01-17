/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      strokeWidth: {
        '0.5': '0.5',
      },
      colors: {
        'custom-teal': '#2f707d',
        'custom-white' : '#ffffff54',
      },
      dropShadow: {
        'custom-2xl' : '-11px 14px 3px rgba(0, 0, 0, 0.5',
        'custom-3xl': '-11px 14px 3px rgba(0, 0, 0, 0.8)'
      }
    },
  },
  plugins: [],
}

