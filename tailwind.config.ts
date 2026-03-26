import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // Ye line honi chahiye
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // Agar src folder use kar rahe ho to ye bhi
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
export default config;