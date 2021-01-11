module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        tint: { 1: "#abf8ff", 2: "#7bccd4" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
