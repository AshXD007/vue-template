/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      fontFamily:{
        'Inter':['Inter'],
      },
      daisyui:{
        themes:false
      }
    },
    plugins: [require("daisyui")],
  }