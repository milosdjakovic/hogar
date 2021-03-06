module.exports = {
  purge: {
    // enabled: true,
    content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"]
  },
  theme: {
    extend: {
      boxShadow: {
        "bottom-orange": "0 2px 0 rgba(237, 137, 54)",
      },
    },
    screens: {
      'xs': '380px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    inset: {
      "0": 0,
      "16": "4rem",
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
