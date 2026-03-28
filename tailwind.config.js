/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
      },
      colors: {
        slate: {
          850: '#111827', 
          950: '#030712', 
        },
        midnight: {
          DEFAULT: '#030712',
          lighter: '#0f172a',
          indigo: '#1e1b4b',
          accent: '#1e293b'
        },
        brand: {
          light: '#f8fafc',
          accent: '#3b82f6', 
          deep: '#1d4ed8',
          navy: '#030712',
          violet: '#6366f1'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'rich-mesh': 'radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.15) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.15) 0, transparent 50%)',
      }
    }
  },
  plugins: [],
}
