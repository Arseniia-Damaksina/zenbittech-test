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
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      backgroundImage: {
        background:
          "url('https://s3-alpha-sig.figma.com/img/9bba/e4f7/be8fbaf8d7b80aeb919c8ae858f5037f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RStDFVbYbAzm4NYkoX0hVjSbftRuqqNwT10GwqjRbhg515Sehguxgb~XdF0oYybAewKXluWY4o-6uvDYwZCK4yHaef8uHXDelJj9KkQislZ8mD5aILZLc0nL-B~Xx0TGQpaVQtOtoTJ02xFut2a8ibYXdrly3jiLmy9K8OvepGIqLU5MxtJdNTs2PWZjTlFn2fjxtlhHAPW9s5hG2xYgxJqhQneIvdN-owZ45XzttkFFNyuMc~9tO-fqZcPGLd6fdWyZVU60BlC4zhckfl7~zkKS89tEB-FOnG22ZSG~wvj3086EpjfFC6qNewJGi3c25CJCo9ctH9k6UUL2bIGvng__')",
        "background-login":
          "url('https://s3-alpha-sig.figma.com/img/a47d/b256/b2f7ebf3957623e4989fbd343e95450f?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b0kbX4JdNjehkED7xnkvNZcwm~sQ5Uvw~-uKRPYFueBD3uCAZHhdik147m1fOn0KLdf7QI8LWrSuB2T7t4Ez8mZYowd2hOh8wuKuL4uC58qVVybiBTbaYHYqgVHsn0GxLdJD6DkaXcx0ySZ6g62VttMUqqh-pbB9CIXzC6UYhQjI6N0hxkG9ZjergxriJHFLaR-rhBQsv-nRIrAsxjUguT31oNdxA6u~y~hFMzfCwihfOV6vEFJRjrmA2uGpBZHRr~DCqqXKc9DuzXH-Sm8~J41lAX3-dRDuFubTsU4JCiD2CzX0AGPf40XZcG8hWfe8Ouv4Fmvmis4WdJKvahUFBA__')",
      },
      colors: {
        primary: "#172234",
        secondary: "#B29F7E",
        inputBg: "#E0E0E0",
        assetsBg: "#F2F2F2",
      },
      width: {
        "8/10": "85%",
        "9/10": "90vw",
        "card": "630px"
      },
      height: {
        "9/10": "90%",
        "18": "72px",
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
        "1/3": "33%",
      },
      minHeight: {
        "9/10": "90vh",
        "3/4": "75vh",
      },
    },
  },
  plugins: [],
};
