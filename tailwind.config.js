module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // <add color>
      colors: {
        add: '#46ADD5',
        upd: '#D8E570',
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};