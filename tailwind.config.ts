import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          blue100: '#1A78F2',
          blue900: '#6896D1',
          star100: '#FFC73B',
          neutral100: '#12153A',
          neutral200: '#2B3641',
          neutral300: '#4F6071',
          neutral400: '#677582',
          neutral500: '#88939D',
          grey600: '#9FA7AF',
          grey700: '#BCC2C8',
          grey800: '#D3D8DD',
          grey900: '#EAEEF3',
          grey950: '#F4F7F9',
          black: '#000000',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        default: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;
