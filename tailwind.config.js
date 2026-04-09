/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0c', // Dark charcoal base
        foreground: '#ededed',
        accent: {
          blue: '#1d4ed8', // Electric blue
          purple: '#7e22ce', // Subtle purple glow
          cyan: '#06b6d4'
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)' // Subtle white border for glass edges
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        gradient: "gradient 8s linear infinite",
        marquee: "marquee 25s linear infinite",
        glow: "glow 3s ease-in-out infinite alternate",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 1rem))" },
        },
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(59, 130, 246, 0.1), inset 0 0 10px rgba(59, 130, 246, 0.05)" },
          "100%": { boxShadow: "0 0 25px rgba(147, 51, 234, 0.4), inset 0 0 15px rgba(147, 51, 234, 0.2)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        }
      },
    },
  },
  plugins: [],
}
