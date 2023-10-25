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
      // keyframes: {
      //   "move-up-down": {
      //     "0%, 100%": { transform: "translateY(0)" },
      //     "50%": { transform: "translateY(20px)" },
      //   },
      //   // Puedes agregar más animaciones personalizadas aquí según sea necesario
      // },
      // animations: {
      //   "move-up-down": "move-up-down 2s ease-in-out infinite",
      //   // Puedes ajustar la duración y otros atributos de animación aquí
      // },
    },
  },
  plugins: [],
};
