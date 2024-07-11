/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#121212",  // Dark background color
        secondary: "#3700b3", // Secondary color
        light: "#bbbbbb",     // Light text color
        "white-100": "#ffffff",
        "dark-100": "#050816",
        "dark-200": "#090325",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobgg.png')",
      },
    },
  },
  plugins: [],
};
