const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", 
            "./public/**/*{html,js}",
  flowbite.content()],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
}