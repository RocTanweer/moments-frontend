module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layouts/**/*.{js,ts,jsx,tsx}"],
  darkmode: false,
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        primary: {
          900: "#FF5A76",
          700: "#ff6982",
        },
        secondary: {
          900: "#3482F6",
          700: "#60a5fa",
        },
      },
    },
  },
  plugins: [],
};
