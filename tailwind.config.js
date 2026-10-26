/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f2ede8',
        'cream-dark': '#e8e0d6',
        navy: '#1a1a2e',
        'navy-light': '#2d2d4a',
        'blue-casual': '#3b6fe0',
        'blue-deep': '#1e40af',
        'blue-mid': '#3b82f6',
        'blue-sky': '#60a5fa',
        'blue-ice': '#93c5fd',
        'blue-indigo': '#6366f1',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        pixel: ['Silkscreen', 'monospace'],
        mono: ['"Space Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
