const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blackgold: {
          black: "#050505",
          charcoal: "#121212",
          panel: "#181410",
          gold: "#D4AF37",
          bronze: "#8B6A2F",
          orange: "#B45A24",
          crimson: "#6E161C",
          bone: "#F2EFE6"
        }
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        accent: ["var(--font-cinzel)", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(212, 175, 55, 0.22)",
        innergold: "inset 0 0 0 1px rgba(212, 175, 55, 0.18)"
      },
      backgroundImage: {
        metal: "linear-gradient(120deg, #7a5a20 0%, #f4da82 16%, #8a661e 31%, #d4af37 50%, #5c4318 70%, #f7e6a1 100%)"
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-balance": { textWrap: "balance" },
        ".gold-text": {
          background: "linear-gradient(120deg, #fff4b4 0%, #d4af37 38%, #7d5b1d 62%, #f9df82 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent"
        }
      });
    })
  ]
};
