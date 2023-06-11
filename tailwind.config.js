/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: "2rem",
        },
        extend: {
            colors: {
                primary: "#F8F4FF",
                element1: "#F73ECF",
                element2: "#61DCEA",
                element3: "#F9BB50",
                element4: "#642ABB",
                element5: "#19245F",
            },
        },
    },
    plugins: [],
};
