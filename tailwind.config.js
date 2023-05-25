const withMT = require("@material-tailwind/html/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        intelBlue: "#123456",
        qRailsBlue: "#1E88E5",
        tuffShedRed: "#C8102E",
        replayYellow: "#FDB913",
      },
    },
  },
  plugins: [],
});
