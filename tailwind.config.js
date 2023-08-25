/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'plain-green': '#00BDA6',
        'plain-blue': '#9fd6e8',
        'darken-green': 'rgba(63,255,163,1)',
        'darken-blue': 'rgba(9,151,255,1)'
      }
    },
  },
  plugins: [],
}

