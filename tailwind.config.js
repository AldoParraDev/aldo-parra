/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "#d9f104",
            dark: "#3c3c3d",
            header: "#222223",
            gray: "#d0d0d1",
         },
         screens: {
            phone: "414px",
            tablet: "768px",
            tabletlg: "960px",
            tabletxl: "1024px",
            laptop: "1200px",
            laptoplg: "1400px",
            desktop: "1700px",
         },
      },
   },
   plugins: [],
};
