import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Terminal Green color palette
        ctp: {
          base: "#0d1408",        // deep black-green
          mantle: "#0a0f06",      // darker black-green
          crust: "#070a04",       // darkest black-green
          surface0: "#1a2617",    // dark green surface
          surface1: "#243321",    // medium dark green
          surface2: "#2e402b",    // medium green
          overlay0: "#5c7a5f",    // dimmed green
          overlay1: "#6d8a70",    // lighter dimmed green
          overlay2: "#7e9a81",    // light dimmed green
          subtext0: "#8faa92",    // muted green text
          subtext1: "#a0baa3",    // lighter muted green
          text: "#7fda89",        // terminal green text
          lavender: "#4dff4d",    // bright terminal green (primary)
          blue: "#3dcc7a",        // seafoam green
          sapphire: "#5ce89e",    // light seafoam
          sky: "#6ef5ab",         // bright seafoam
          teal: "#4dff4d",        // bright green
          green: "#4dff4d",       // bright terminal green
          yellow: "#7fda89",      // medium green (for warnings)
          peach: "#8fea99",       // light green
          maroon: "#d63c3c",      // red for errors
          red: "#d63c3c",         // red for errors
          mauve: "#3dcc7a",       // seafoam accent
          pink: "#5ce89e",        // light seafoam
          flamingo: "#6ef5ab",    // bright seafoam
          rosewater: "#7fda89",   // terminal green
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.6s ease-out",
        "accordion-up": "accordion-up 0.6s ease-out",
        "float": "float 18s ease-in-out infinite",
        "float-delayed": "float 18s ease-in-out 9s infinite",
        "gradient-shift": "gradient-shift 24s ease infinite",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-mesh': 'var(--gradient-mesh)',
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'elevated': 'var(--shadow-elevated)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
