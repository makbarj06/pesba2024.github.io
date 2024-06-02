/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/backgroundpesbaweb.png')",
      },
    },
  },
  plugins: [],
};
