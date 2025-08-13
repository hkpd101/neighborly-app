module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          500: '#10b981',
          600: '#059669',
        },
        teal: {
          500: '#14b8a6',
          600: '#0d9488',
        },
        purple: {
          500: '#a78bfa',
          600: '#8b5cf6',
        },
        orange: {
          500: '#f59e42',
          600: '#ea580c',
        },
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
        },
      },
      borderRadius: {
        DEFAULT: '8px',
        card: '12px',
        pill: '20px',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(16, 185, 129, 0.08)',
      },
      maxWidth: {
        mobile: '480px',
      },
    },
  },
  plugins: [],
};
