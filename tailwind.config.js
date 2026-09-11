/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lake: {
          DEFAULT: '#0F3B4C',
          deep: '#0A2C39',
          light: '#3E6E7E',
        },
        sand: {
          DEFAULT: '#F3ECDF',
          dark: '#E7DBC3',
        },
        terracotta: {
          DEFAULT: '#C1622D',
          light: '#DD8850',
        },
        olive: {
          DEFAULT: '#5C6B45',
        },
        ink: '#171512',
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
