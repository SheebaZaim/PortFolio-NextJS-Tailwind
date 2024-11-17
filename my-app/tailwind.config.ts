import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        green:{
          50:'#30AF5B',
          90:'#292C27',
        },
        gray:{
          10:'#EEEEEE',
          20:'#A2A2A2',
          30:'#7B7B7B',
          50:'#585858',
          90:'#141414',

        },
      },
      backgroundImage: {
        
    },
    screens:{
      xs:'400px',
      '3xl':'1680px',
      '4xl':'2200px',
    },
    maxWidth:{
      '10xl':'1512px'
    },
    borderRadius:{
      '5xl':'40px',
    },
  },
  },
  plugins: [],
};
export default config;