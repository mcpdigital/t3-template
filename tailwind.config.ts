/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
const config = {
  darkMode: ["selector", '[data-theme="dark"]'], // SUPER IMPORTANT the second prop
  violetMode: ["selector", '[data-theme="violet"]'],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./public/**/*.{ts,tsx}",
  ],
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
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        violet: colors.violet,

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        //ring: "hsl(var(--ring))",
        ring: "hsl(var(--pink-ring))",
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
        thback0: {
          DEFAULT: "hsl(var(--th-back0))",
          foreground: "hsl(var(--card-foreground))",
        },
        thback1: {
          DEFAULT: "hsl(var(--th-back1))",
          foreground: "hsl(var(--card-foreground))",
        },
        thaccent1: {
          DEFAULT: "hsl(var(--th-accent1))",
          foreground: "hsl(var(--card-foreground))",
        },
        thaccent2: {
          DEFAULT: "hsl(var(--th-accent2))",
          foreground: "hsl(var(--card-foreground))",
        },
        thfore1: {
          DEFAULT: "hsl(var(--th-fore1))",
          foreground: "hsl(var(--card-foreground))",
        },
        thfore2: {
          DEFAULT: "hsl(var(--th-fore2))",
          foreground: "hsl(var(--card-foreground))",
        },
        violetback0: {
          DEFAULT: "hsl(var(--violet-back0))",
          foreground: "hsl(var(--card-foreground))",
        },
        violetback1: {
          DEFAULT: "hsl(var(--violet-back1))",
          foreground: "hsl(var(--card-foreground))",
        },
        violetback2: {
          DEFAULT: "hsl(var(--violet-back2))",
          foreground: "hsl(var(--card-foreground))",
        },

        violetaccent1: {
          DEFAULT: "hsl(var(--violet-accent1))",
          foreground: "hsl(var(--card-foreground))",
        },
        violetaccent2: {
          DEFAULT: "hsl(var(--th-violet-accent2))",
          foreground: "hsl(var(--card-foreground))",
        },
        violetfore1: {
          DEFAULT: "hsl(var(--violet-fore1))",
          foreground: "hsl(var(--card-foreground))",
        },
        violetfore2: {
          DEFAULT: "hsl(var(--th-violet-fore2))",
          foreground: "hsl(var(--card-foreground))",
        },
        tablebody2: {
          DEFAULT: "hsl(var(--table-body2))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
