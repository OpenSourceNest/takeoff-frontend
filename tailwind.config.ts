import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1D401D",
        secondary: "#8AB440",
      },
    },
    screens: {
      // https://tailwindcss.com/docs/screens
      'xl': {'min': '1250px'}, 
      '-xl': {'max': '1200px'},

      'lg': {'min': '1000px'},
      '-lg': {'max': '1000px'},

      'md': {'min': '750px'},
      '-md': {'max': '750px'},

      'sm': {'min': '550px'},
      '-sm': {'max': '550px'},
      
      'xs': {'min': '480px'},
      '-xs': {'max': '480px'}
    },
  },
  plugins: [],
};
export default config;
