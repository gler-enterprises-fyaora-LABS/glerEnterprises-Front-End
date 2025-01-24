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
                'neutral-100': 'var(--Neutral-100, #12153A)',
                'neutral-300': '#79767D',
                'neutral-500': '#EBF1FF'
            },
            fontFamily: {
                sans: ["Inter", "sans-serif", "Poppins"],
            },
            fontSize: {
                '14': '14px',
            },
            lineHeight: {
                '19': '19px',
            },
            letterSpacing: {
                '0.042': '0.042px',
              }
        },
    },
    plugins: [],
} satisfies Config;
