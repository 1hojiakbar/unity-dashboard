// import img from "../unity-dashboard/src/assets/imgaes/main-bg.png"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-dark-blue": "rgb(17, 20, 45)",
        light: "#ffffff",
        "divider-color": "rgb(228, 228, 228)",
        "active-color": "rgb(108, 93, 211)",
        secondary: "rgb(128, 129, 145)",
        font: `"Inter", sans-serif`,
        "white-color": "rgb(255, 255, 255)",
        "card-bg": "rgb(255, 235, 246)",
      },
    },
  },
  plugins: [],
};
