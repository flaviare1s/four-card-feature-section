/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: 'hsl(0, 78%, 62%)',
        cyan: 'hsl(180, 62%, 55%)',
        orange: 'hsl(34, 97%, 64%)',
        blue: 'hsl(212, 86%, 64%)',
        veryDarkBlue: 'hsl(234, 12%, 34%)',
        grayishBlue: 'hsl(229, 6%, 66%)',
        veryLightGray: 'hsl(0, 0%, 98%)'
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      fontSize: {
        sm: '13px',
        base: '15px',
      },
      spacing: {
        '54': '222px',
        '62': '250px',
        '75': '311px',
        '90': '350px',
        '150': '540px',
      },
    },
  },
  plugins: [],
}

