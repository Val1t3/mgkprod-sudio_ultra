/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: {
          300: "#737580",
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
        '320': '320px',
        '436': '436.5px',
        '466': '466.22px',
        '480': '480px',
        '828': '828px',
        '849': '849.69px',
      },
      fontSize: {
        sm: '16px',
        lg: '22px',
        xlg: '24px',
        xl: '28px',
        '1xl': '36px',
        '2xl': '56px',
        '2.5xl': '64px',
        '3xl': '80px',
        '4xl': '128px'
      },
      letterSpacing: {
        tight: '-2px',
      },
      borderRadius: {
        '4xl': '48px'
      }
    },
  },
  plugins: [],
}
