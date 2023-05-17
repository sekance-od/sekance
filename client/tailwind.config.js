/** @type {import('tailwindcss').Config} */
module.exports = {
  'fontawesome-svg-core': {
    'license': 'free'
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        marquee: 'marquee 8s linear infinite',
        marquee2: 'marquee2 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        backgroundImage: {
          'hero-pattern': "url('https://res.cloudinary.com/braydoncoyer/image/upload/v1642953750/glowing_gradient_background_tailwind_banner.jpg')",
        }
      },
    },
    // colors: {
    //   //  primary: "#00FF00",
    //   //  secondary: "#228B22",
    //   //  white: "#FFFFFF",
    //   //  red: "#ff0000",
    //   //  yellow: "#ffff00",
    //   //  blue: "#0000ff"

    //   'blue': '#1fb6ff',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // }
  },
  plugins: [],
}
