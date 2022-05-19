module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bahama-blue": {
          DEFAULT: "#055C9E",
          50: "#BAFDFC",
          100: "#9CF8FC",
          200: "#61E5FA",
          300: "#25C6F8",
          400: "#0793DA",
          500: "#055C9E",
          600: "#043C7C",
          700: "#032359",
          800: "#021036",
          900: "#010414",
        },
      },
    },
  },
  plugins: [],
};
