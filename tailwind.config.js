module.exports = {
  mode: 'jit',
  content:[
  ],
  content: [
    './public/**/*.html',
    // './src/**/*.{js,jsx,ts,tsx,vue}',
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}