/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
			center: true,
			padding: "1.2rem",
		},
    extend: {
      fontSize: {
				'52': "52px",
				'42': "42px",
				'40': "40px",
				'32': "32px",
				'28': "28px",
				'24': "24px",
				'20': "20px",
				'18': "18px",
				'16': "16px",
				'14': "14px",
				'12': "12px",
				'10': "10px",
			},
    },
  },
  plugins: [],
}
