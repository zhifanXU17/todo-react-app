/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "input-error": "shake 1s ease-in-out",
      },
      keyframes: {
        shake: {
          "10%, 90%": { transform: "translate3d(0, -1px, 0)" },
          "20%, 80%": { transform: "translate3d(0, +2px, 0)" },
          "30%, 70% ": { transform: "translate3d(0, -4px, 0)" },
          "40%, 60% ": { transform: "translate3d(0, +4px, 0)" },
          "50%": { transform: "translate3d(0, -4px, 0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
