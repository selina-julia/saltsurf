module.exports = {
    prefix: "",

    content: ["./src/**/*.{html,ts}"],

    darkMode: "class", // or 'media' or 'class'
    theme: {
        colors: {
            "surf-blue": "#026E82",
            white: "#fff"
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
