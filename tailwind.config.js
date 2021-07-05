module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      height: {
        "fit-content": "fit-content",
      },
      width: {
        "side-nav": "276px",
        "content-field": "calc(100vw - 276px)",
      },
      zIndex: {
        100: 100,
        "-1": -1,
      },
      padding: {
        15: "60px",
      },
      colors: {
        black: {
          800: "#1F1F1F",
          700: "#333333",
          600: "#545454",
          500: "#757575",
          400: "#AFAFAF",
          300: "#E2E2E2",
          200: "#EEEEEE",
          100: "#f7f7f7",
        },
        yellow: {
          800: "#674D1B",
          700: "#997328",
          600: "#BC8B2",
          500: "#FFC043",
          400: "#FFCF70",
          300: "#FFF2D9",
          200: "#FFFAF0",
        },
        green: {
          800: "#10462D",
          700: "#156A41",
          600: "#09864A",
          500: "#05A357",
          400: "#06C167",
          300: "#66D19E",
          200: "#ADDEC9",
        },
        red: {
          800: "#5A0A00",
          700: "#870F00",
          600: "#AB1300",
          500: "#E11900",
          400: "#E85C4A",
          300: "#F1998E",
          200: "#FED7D2",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
