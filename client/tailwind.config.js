/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage: {
        "background-main": "url('/img/hero-pattern.svg')"
      },
      colors: {
        primary: "#172234",
        secondary: "#B29F7E",
      },
      width: {
        "9/10": "95%",
      },
      height: {
        "9/10": "91%",
        "screen/90": "90vh",
      },
      maxWidth: {
        1: "100%",
        "3/4": "75%",
        "1/2": "50%",
        "1/4": "25%",
        "1/5": "20%",
        "1/3": "30%",
      },
      maxHeight: {
        1: "100%",
        "3/4": "75%",
        "1/2": "50%",
        "1/4": "25%",
        "1/5": "20%",
        "1/6": "10%",
      },
      minWidth: {
        1: "100%",
        "3/4": "75%",
        "1/2": "50%",
        "1/4": "25%",
        "1/5": "20%",
        "1/3": "33%"
      },
      minHeight: {
        "9/10": "90vh",
        "3/4": "75vh"
      }
    },
  },
  plugins: [],
};

