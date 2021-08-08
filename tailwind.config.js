const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: {
    // enabled: true,
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  },
  theme: {
    extend: {
      boxShadow: {
        "bottom-orange": `0 2px 0 ${colors.orange["600"]}`,
        orange: [
          `0 10px 15px -3px  ${colors.orange["600"]}66`,
          `0 4px 6px -2px ${colors.orange["600"]}11`,
        ],
      },
      colors: {
        orange: {
          100: "#fffaf0",
          200: "#feebc8",
          300: "#fbd38d",
          400: "#f6ad55",
          500: "#ed8936",
          600: "#e86726",
          700: "#c05621",
          800: "#9c4221",
          900: "#7b341e",
        },
      },
    },
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    inset: {
      0: 0,
      16: "4rem",
    },
    fontFamily: {
      patrick: "Patrick Hand SC",
      bahiana: "Bahiana",
    },
  },
  variants: {
    borderWidth: ["responsive", "last"],
    padding: ["responsive", "first", "last"],
    margin: ["responsive", "first", "last"],
    textColor: ["responsive", "hover", "focus", "group-hover"],
  },
  plugins: [],
}
