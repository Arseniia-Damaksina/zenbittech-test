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
        "background": "url('https://www.tripsavvy.com/thmb/7E22jmwQMQMK6bz3eI7JB-_pMvM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-761603799-5b7d6c6ec9e77c0050b2c084.jpg')"
      },
      colors: {
        primary: "#172234",
        secondary: "#B29F7E",
      },
      width: {
        "9/10": "85%"
      },
      height: {
        "18": "72px"
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

