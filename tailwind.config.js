/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
    extend: {
      colors: {
        // keep the origin color and extend new colors, must put in the colors
        pizza: "#12345",
      },
      fontSize: {
        // same as color, put customized fontSize here
        huge: ["10rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh", // dynamic
      },
    },
  },
  plugins: [],
};
