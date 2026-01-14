
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11011F',
            },
            fontFamily: {
                Outfit: ["var(--font-outfit)", "sans-serif"],
                Ovo: ["var(--font-ovo)", "serif"]
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff'
            },
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, mimax(200px, 1fr))'
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}