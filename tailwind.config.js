/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        red: "#D80027",
        titleColor: "#464A50",
        textColor: "#777D85",
        grey: "#969CAB",
        formColor: '#343A42',
        formBgColor: '#F8F8FA',
        footerBgColor: '#1B2129',
        colorGrey: '#474D55'
      },
    },
  },
  plugins: [],
}