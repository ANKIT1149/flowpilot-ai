module.exports = {
  theme: {
  extend: {
    keyframes: {
      blink: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0 },
      },
      'pulse-slow': {
        '0%, 100%': { opacity: 0.4 },
        '50%': { opacity: 0.7 },
      }
    },
    animation: {
      'blink': 'blink 0.8s step-end infinite',
      'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
    }
  }
},
  plugins: [],
};