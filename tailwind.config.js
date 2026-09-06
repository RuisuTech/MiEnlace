/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          dark: "#0a0f1a",
          "dark-card": "#111827",
          "dark-elevated": "#1e293b",
          "dark-hover": "#253449",
          blue: "#3b82f6",
          "blue-hover": "#2563eb",
          cyan: "#22d3ee",
          "cyan-hover": "#06b6d4",
          indigo: "#818cf8",
          sky: "#38bdf8",
          muted: "#94a3b8",
          secondary: "#64748b",
          border: "#1e3a5f",
          "border-hover": "#2563eb",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "ocean-gradient":
          "linear-gradient(135deg, #3b82f6 0%, #22d3ee 50%, #38bdf8 100%)",
      },
    },
  },
  plugins: [],
};
