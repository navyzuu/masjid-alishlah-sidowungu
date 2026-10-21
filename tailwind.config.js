/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        muhammadiyah: {
          50: '#F0F6FC',
          100: '#E1EDF8',
          200: '#BDDAF0',
          300: '#84BBE4',
          400: '#4699D4',
          500: '#1D78C2',
          600: '#125A9B',
          700: '#0F477D',
          800: '#0E3D69',
          900: '#0C2B4E', // Deep Official Navy Muhammadiyah
          950: '#061A30',
        },
        surya: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B', // Golden Sun (12 Sinar Muhammadiyah)
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        islamic: {
          emerald: '#0D5C3A',
          sand: '#FDFBF7',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        arabic: ['"Amiri"', 'serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(12, 43, 78, 0.06)',
        'card': '0 4px 20px -2px rgba(12, 43, 78, 0.08), 0 2px 6px -1px rgba(12, 43, 78, 0.04)',
        'elevated': '0 12px 30px -4px rgba(12, 43, 78, 0.12), 0 4px 10px -2px rgba(12, 43, 78, 0.06)',
      }
    },
  },
  plugins: [],
}
