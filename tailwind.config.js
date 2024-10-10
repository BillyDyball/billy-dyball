/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "--un-shadow": "2px 2px 0 var(--un-shadow-color)",
        custom:
          "var(--un-ring-offset-shadow),var(--un-ring-shadow),var(--un-shadow);",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
