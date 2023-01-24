module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            keyframes: {
                popUp: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 100},
                },
            },
        
            animation: {
                ProjectPopUp: "popUp 2s",
            },
            animationDelay: {
                ProjectPopUp: "5s",
            }
        }
  },
  plugins: [require("daisyui")],
}
