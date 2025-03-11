module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
      extend: {
        zIndex: {
          '100': '100',
      },
      spacing: {
          '16': '4rem',
      },
      backdropFilter: {
          'none': 'none',
          'blur': 'blur(20px)',
      },
      transitionProperty: {
        'width': 'width',
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'zoom-in': 'zoomIn 0.2s ease-out',
      },
      keyframes: {
          zoomIn: {
              '0%': {
                  opacity: '0',
                  transform: 'scale(0.95)',
              },
              '100%': {
                  opacity: '1',
                  transform: 'scale(1)',
              },
          },
      },
    },
  },
  plugins: [],
};