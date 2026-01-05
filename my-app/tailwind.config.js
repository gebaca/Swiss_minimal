/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Busca directamente en la carpeta src de my-app
  ],
  theme: {
    extend: {
      colors: {
        // Le damos un nombre personalizado
        'swiss-black': '#0c0a09',
        'swiss-white': '#f5f5f5',
      },
    },
  },
  plugins: [],
};
