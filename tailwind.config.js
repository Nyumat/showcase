import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        text: "text 4s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            'background-position': 'left center',
          },
          "50%": {
            "background-size": "200% 200%",
            'background-position': 'right center',
          },
          
        },
      },
    },
  },
  plugins: [daisyui],
};
