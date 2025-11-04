cat > tailwind.config.js <<'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: { lg: "12px", xl: "16px", "2xl": "24px" },
      container: { center: true, padding: "1rem" },
    },
  },
  plugins: [],
};
EOF
