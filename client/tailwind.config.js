/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: { min: "1024px", max: "1366px" },
        md: { min: "815px", max: "1024px" },
        sm: { max: "815px" },
      },
    },
  },
  plugins: [],
};
