/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          888: "#FF843E",
          999: "#782E04",
        },
        pink: {
          888: "#FFA7BC",
          999: "#4D3238",
        },
        blue: {
          888: "#DFEBFF",
          999: "#505D87",
        },
        green: {
          888: "#A1E7EB",
          999: "#3A7478",
        },
      },
    },
  },
  plugins: [],
};
