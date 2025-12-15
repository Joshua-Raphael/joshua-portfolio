/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        rotateBorder: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-border": "rotateBorder 10s linear infinite",
      },
    },
  },
  plugins: [],
};
