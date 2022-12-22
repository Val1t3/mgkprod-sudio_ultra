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
        'xs': '10px',
        '278': '278px',
        '320': '320px',
        '436': '436.5px',
        '466': '466.22px',
        '480': '480px',
        '486': '486px',
        '502': '502px',
        '619': '619px',
        '685': '685px',
        '828': '828px',
        '849': '849.69px',
        '904': '904.5px',
        '1027': '1027px'
      },
      fontSize: {
        '2xs': '14px',
        '1sm': '15px',
        'sm': '16px',
        'xsm': '18px',
        'slg': '20px',
        'lg': '22px',
        'xlg': '24px',
        'xl': '28px',
        '0.5xl': '32px',
        '1xl': '36px',
        '1.5xl': '40px',
        '1.7xl': '48px',
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
      },
      screens: {
        md: '810px',
        lg: '1200px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}
