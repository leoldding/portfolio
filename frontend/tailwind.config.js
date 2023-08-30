/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      "colors": {
          "orange": {
              50: "#FFF6EB",
              100: "#FFF0DB",
              200: "#FFDEB3",
              300: "#FFCE8F",
              400: "#FFBD66",
              500: "#FFAE42",
              600: "#FF9100",
              700: "#C26E00",
              800: "#804800",
              900: "#422600",
              950: "#1F1100"
          }
      },
    "screens": {
          "sm": "450px",
          "md": "850px"
    }
    },
  },
  plugins: [],
}

