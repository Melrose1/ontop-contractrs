/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem", //640
        lg: "2rem", //1024
        xl: "3rem", //1280
        "2xl": "4rem", //1536
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
    require("tailwindcss-multiple-columns"),
  ],
};
