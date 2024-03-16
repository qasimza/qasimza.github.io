/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "body-1": "#272829",
        "body-2": "#45505b",
        "body-3": "#f2f3f5",
        blue: "#0563bb",
        "blue-hover": "#067ded",
      },
    }
  },
  plugins: [],
}

