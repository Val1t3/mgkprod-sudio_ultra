/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          500: "#838386"
        },
        black: {
          300: "#1b191e",
          500: "#121217"
        },
        orange: {
          500: "#ea3d25"
        }
      },
      borderWidth: {
        '1': '1px',
      },
      spacing: {
        '436': '436.5px'
      },
      fontSize: {
        lg: '22px',
        xl: '28px',
        '2xl': '56px',
        '3xl': '80px',
        '4xl': '128px'
      },
      letterSpacing: {
        tight: '-2px',
      }
    },
  },
  plugins: [],
}
