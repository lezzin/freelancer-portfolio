/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "square-pattern": "url('/img/square-pattern.svg')",
            },
        },
        plugins: [],
    },
};
