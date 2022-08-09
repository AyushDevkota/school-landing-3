/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lexend: "Lexend, Arial sans-serif",
        lora: "Lora Arial sans-serif",
        quicksand: "Quicksand Arial sans-serif",
        nunito: '"Nunito Sans" Arial sans-serif',
      },
      colors: {
        primary: "#1F2059",
        text: "#D9D9D9",
        border: "#029A29",
        cardBorder: "#EBEBEB",
        description: "#707070",
        date: "#2a2a2a",
        opac: "#00000050"
      },
      backgroundImage: {
        section1: "url('/src/assets/section-1.png')",
        future: "url('/src/assets/future.png')",
      },
    },
  },
  plugins: [],
};
