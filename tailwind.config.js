/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2.5rem 3.125rem rgba(134, 151, 168, 0.1)",
      },
    },
  },
  plugins: [],
};
