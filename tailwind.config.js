/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                myShadow: "1px 2px 2px rgba(0,0,0,0.3)",
            },
            container: {
                center: true,
            },
        },
    },
    plugins: [],
};