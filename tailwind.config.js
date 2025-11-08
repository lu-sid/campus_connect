/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: "#FFE6E6",
          purple: "#E9E7FD",
          yellow: "#FFF4D4",
          rose: "#FFE3F4",
          blue: "#E4F5FF",
          green: "#E6FCE9",
        },
      },
      borderRadius: {
        card: "1.7rem",
      },
    },
  },
  plugins: [],
};
module.exports = {
   darkMode: "class",
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
  plugins: [],
}
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  // ...
}
