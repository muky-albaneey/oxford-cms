/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        brand: { green:"#166534", teal:"#1e8e6e", blue:"#0D4A86", gray:"#F6F7FB" },
        ink: "#0f172a"
      },
      backgroundImage: { 'brand-gradient':'linear-gradient(90deg,#0D4A86 0%, #1e8e6e 100%)' },
      boxShadow: { soft: "0 4px 20px rgba(2,6,23,0.06)" },
    }
  },
  plugins: [],
}
