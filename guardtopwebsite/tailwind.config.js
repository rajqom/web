/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          50: "#EFF8FF",
          100: "#DEF1FF",
          200: "#B6E3FF",
          300: "#75CCFF",
          400: "#3AB6FF",
          500: "#0095FF", // Main sapphire blue
          600: "#006BE0",
          700: "#0055B8",
          800: "#004494",
          900: "#003A7A",
          DEFAULT: "#0095FF",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          DEFAULT: "#64748B",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          50: "#FFF5ED",
          100: "#FFE6D5",
          200: "#FFD6B8",
          300: "#FFA666",
          400: "#FF8838",
          500: "#FF6B0A", // Complementary orange
          600: "#EE5D00",
          700: "#C44D00",
          800: "#9B3D00",
          900: "#7A3100",
          DEFAULT: "#FF6B0A",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}

