module.exports = {
    prefix: "",

    content: ["./src/**/*.{html,ts}"],

    darkMode: "class", // or 'media' or 'class'
    theme: {
        colors: {
            "surf-blue": "#026E82",
            white: "#fff",
            "surf-gray-900": "#333",
            "surf-gray-100": "#F9F9F9"
        },
        boxShadow: {
            "product-shadow": "0 8px 30px 0 rgba(0, 0, 0, 0.05)"
        }
    },
    variants: {
        extend: {}
    },
    corePlugins: {
        aspectRatio: false
    },
    plugins: [require("@tailwindcss/aspect-ratio")]
};
