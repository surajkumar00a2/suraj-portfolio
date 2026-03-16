module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        accent: { DEFAULT: "#2563EB", hover: "#1D4ED8", subtle: "#EFF6FF" },
      },
      maxWidth: { content: "1080px" },
      spacing: {
        'sidebar': '35vw',
      },
    },
  },
  plugins: [],
};