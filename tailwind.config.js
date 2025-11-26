/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3DC0',
          dark: '#6A2BAE',
          darker: '#4B1F7C',
          light: '#E9D7F9',
          pastel: '#F4EBFF',
        },
        gray: {
          light: '#E6E6E6',
          medium: '#6B7280',
          dark: '#1F2937',
          verylight: '#F8F8F8',
        },
        black: {
          DEFAULT: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['var(--font-mont)', 'Mont', 'sans-serif'],
      },
      fontSize: {
        h1: ['48px', { lineHeight: '1.15', fontWeight: '700' }],
        h2: ['36px', { lineHeight: '1.20', fontWeight: '700' }],
        h3: ['28px', { lineHeight: '1.25', fontWeight: '600' }],
        h4: ['22px', { lineHeight: '1.30', fontWeight: '600' }],
        body: ['18px', { lineHeight: '1.65', fontWeight: '400' }],
        'body-sm': ['16px', { lineHeight: '1.55', fontWeight: '400' }],
        button: ['16px', { lineHeight: '1.35', fontWeight: '600' }],
        caption: ['14px', { lineHeight: '1.40', fontWeight: '400' }],
      },
      boxShadow: {
        standard: '0 4px 12px rgba(0,0,0,0.06)',
        accent: '0 10px 32px rgba(0,0,0,0.10)',
        button: '0 4px 12px rgba(124, 61, 192, 0.25)',
        card: '0 4px 20px rgba(0,0,0,0.05)',
        'card-hover': '0 8px 28px rgba(0,0,0,0.08)',
      },
      spacing: {
        'section': '120px',
      },
    },
  },
  plugins: [],
}

