/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733", // Agrega un color personalizado
      },
      // fontFamily: {
      //   custom: ["CustomFont", "sans"], // Agrega una fuente de texto personalizada
      // },
    },
  },
  plugins: [],
};
