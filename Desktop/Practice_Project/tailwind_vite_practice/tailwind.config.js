/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alkatra: ["Alkatra", "cursive"],
        dancing: ["Dancing Script", "cursive"],
      },
      colors: {
        primary: "#020617",
        secondary: "#ff4500",
      },
    },
  },
  plugins: [],
};
