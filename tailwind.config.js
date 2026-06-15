/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#e5e2e1",
        "on-primary-fixed-variant": "#474747",
        "error-container": "#93000a",
        "tertiary": "#ffb5a0",
        "surface-container-high": "#2a2a2a",
        "inverse-surface": "#e5e2e1",
        "inverse-on-surface": "#313030",
        "surface-container": "#20201f",
        "on-secondary": "#2f3131",
        "on-tertiary-container": "#da3a00",
        "outline": "#988e90",
        "background": "#131313",
        "secondary-container": "#454747",
        "on-tertiary": "#601400",
        "surface-container-highest": "#353535",
        "primary": "#c6c6c6",
        "tertiary-fixed-dim": "#ffb5a0",
        "on-secondary-fixed": "#1a1c1c",
        "on-background": "#e5e2e1",
        "surface-variant": "#353535",
        "outline-variant": "#4c4546",
        "surface-container-low": "#1c1b1b",
        "tertiary-container": "#000000",
        "surface-container-lowest": "#0e0e0e",
        "primary-fixed-dim": "#c6c6c6",
        "on-error": "#690005",
        "on-tertiary-fixed-variant": "#872000",
        "on-primary-container": "#757575",
        "surface-dim": "#131313",
        "on-primary-fixed": "#1b1b1b",
        "surface": "#131313",
        "inverse-primary": "#5e5e5e",
        "on-secondary-container": "#b4b5b5",
        "surface-bright": "#393939",
        "primary-fixed": "#e2e2e2",
        "error": "#ffb4ab",
        "on-secondary-fixed-variant": "#454747",
        "on-surface-variant": "#cfc4c5",
        "secondary": "#c6c6c7",
        "on-error-container": "#ffdad6",
        "on-tertiary-fixed": "#3b0900",
        "primary-container": "#000000",
        "on-primary": "#303030",
        "surface-tint": "#c6c6c6",
        "secondary-fixed-dim": "#c6c6c7",
        "tertiary-fixed": "#ffdbd1",
        "secondary-fixed": "#e2e2e2"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "gutter": "2rem",
        "margin-edge": "4rem",
        "container-max": "1440px",
        "section-gap": "12rem"
      },
      fontFamily: {
        "headline-lg-mobile": ["Bodoni Moda"],
        "label-sm": ["JetBrains Mono"],
        "body-md": ["JetBrains Mono"],
        "display-xl": ["Bodoni Moda"],
        "headline-lg": ["Bodoni Moda"]
      },
      fontSize: {
        "headline-lg-mobile": ["40px", {"lineHeight": "48px", "fontWeight": "600"}],
        "label-sm": ["12px", {"lineHeight": "16px", "letterSpacing": "0.1em", "fontWeight": "500"}],
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "display-xl": ["120px", {"lineHeight": "110px", "letterSpacing": "-0.04em", "fontWeight": "700"}],
        "headline-lg": ["64px", {"lineHeight": "72px", "letterSpacing": "-0.02em", "fontWeight": "600"}]
      }
    },
  },
  plugins: [],
}
