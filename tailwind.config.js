/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        headings: ["Raleway", "sans-serif"],
      },
      colors: {
        blue: "hsl(198, 60%, 50%)",
        cyan: "hsl(176, 68%, 64%)",
        "light-red": "hsl(0, 100%, 63%)",
        "dark-blue-1": "hsl(217, 28%, 15%)",
        "dark-blue-2": "hsl(218, 28%, 13%)",
        "dark-blue-3": "hsl(216, 53%, 9%)",
        "dark-blue-4": "hsl(219, 30%, 18%)",
      },
    },
  },
  plugins: [],
}
