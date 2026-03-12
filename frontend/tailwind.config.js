/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./dashboard/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        cloud: "#F6F8FB",
        mint: "#0FB98B",
        sun: "#FFB454",
        coral: "#F25F5C",
        steel: "#4B5563"
      }
    }
  },
  plugins: []
};
