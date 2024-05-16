/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      animation: {
        fade: '250ms ease-in-out',
      },
      spacing: {
        'mobile': '23.43rem',
        'tablet': '47.99rem',
        'desktop': '69.4rem',
      },
      backgroundImage: {
        'bg-mobile': "url('/assets/images/image-profile-mobile.webp')",
        'bg-tablet': "url('/assets/images/image-profile-tablet.webp')",
        'bg-desktop': "url('/assets/images/image-profile-desktop.webp')",
      },
      width: {
        'fit-content': 'fit-content',
      },
    },
    colors: {
      'off-black': 'hsl(0,0%,8%)',
      'active-green': 'hsl(153, 71%, 59%)',
      'charcoal': 'hsl(0, 0%, 14%)',
      'lightsmoke': 'hsl(0, 0%, 85%)',
      'white': 'hsl(0, 0%, 100%)',
      'error': '#FF6F5B',
    },
    fontSize: {
      'base': ['1.125rem', { // 18px
        lineHeight: '1.75rem',
        fontWeight: '400',
      }],
      'med': ['1.5rem', { // 24px
        lineHeight: '2rem',
        fontWeight: '600',
      }],
      'm-lg': ['2rem', { // 32px
        lineHeight: '2.5rem', 
        letterSpacing: '-0.06em',
        fontWeight: '700',
      }],
      'lg': ['2.5rem', { // 40px
        lineHeight: '2.5rem', 
        letterSpacing: '-0.07em',
        fontWeight: '700',
      }],
      'xl': ['3rem', { // 48px
        lineHeight: '3.5rem', 
        letterSpacing: '-0.09em',
        fontWeight: '700',
      }],
      '3xl': ['72px', { // 72px
        lineHeight: '88px',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }],
      'max': ['5.2rem', { // 88px
        lineHeight: '5.5rem',
        letterSpacing: '-0.03em',
        fontWeight: '700',
      }],
    },
    fontFamily: {
      'space': '"Space Grotesk", sans-serif',
    },
    screens: {
      'tablet': '768px',
      'desktop': '1110px',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        'tablet': '1.87rem',
        'desktop': '2rem',
      },
    },
    backgroundSize: {
      'bgmobile': '174px',
      'bgtablet': '322px',
      'bgdesktop': '445px',
    },
  },
  plugins: [
    function({ addUtilities }) {
    const newUtilities = {
        '.decoration-skip-ink-none': {
            textDecorationSkipInk: 'none',
        },
    };
    addUtilities(newUtilities);
}],
}

