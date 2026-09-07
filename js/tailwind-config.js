// js/tailwind-config.js
// Config compartida — va en TODOS los HTML, justo después del <script src="...tailwindcss..."></script>
// y ANTES de cualquier otro <script> de la página.
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#dae2fd",
        "tertiary-container": "#a15100",
        "primary": "#d2bbff",
        "inverse-primary": "#732ee4",
        "secondary-fixed": "#c4e7ff",
        "secondary-container": "#00a6e0",
        "primary-fixed": "#eaddff",
        "primary-fixed-dim": "#d2bbff",
        "surface-variant": "#2d3449",
        "on-tertiary-fixed-variant": "#713700",
        "secondary-fixed-dim": "#7bd0ff",
        "background": "#0b1326",
        "on-secondary-fixed-variant": "#004c69",
        "on-primary-fixed-variant": "#5a00c6",
        "on-tertiary": "#4f2500",
        "tertiary-fixed": "#ffdcc6",
        "outline-variant": "#4a4455",
        "on-tertiary-fixed": "#301400",
        "on-error": "#690005",
        "surface": "#0b1326",
        "outline": "#958da1",
        "on-secondary-fixed": "#001e2c",
        "surface-tint": "#d2bbff",
        "on-surface-variant": "#ccc3d8",
        "error-container": "#93000a",
        "on-secondary-container": "#00374d",
        "surface-container-high": "#222a3d",
        "inverse-on-surface": "#283044",
        "surface-dim": "#0b1326",
        "surface-container-highest": "#2d3449",
        "surface-container-lowest": "#060e20",
        "secondary": "#7bd0ff",
        "on-background": "#dae2fd",
        "inverse-surface": "#dae2fd",
        "on-error-container": "#ffdad6",
        "surface-container-low": "#131b2e",
        "on-primary-container": "#ede0ff",
        "surface-container": "#171f33",
        "on-tertiary-container": "#ffe0cd",
        "on-secondary": "#00354a",
        "primary-container": "#7c3aed",
        "on-primary-fixed": "#25005a",
        "surface-bright": "#31394d",
        "tertiary-fixed-dim": "#ffb784",
        "tertiary": "#ffb784",
        "error": "#ffb4ab",
        "on-primary": "#3f008e"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        gutter: "16px", lg: "24px", xl: "32px", "margin-desktop": "40px",
        "2xl": "48px", xs: "4px", "margin-mobile": "16px", sm: "8px", base: "4px", md: "16px"
      },
      fontFamily: {
        "headline-lg": ["Plus Jakarta Sans"],
        "label-md": ["JetBrains Mono"],
        "body-md": ["Inter"],
        "body-lg": ["Inter"],
        "headline-md": ["Plus Jakarta Sans"],
        "label-sm": ["JetBrains Mono"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "body-sm": ["Inter"],
        "display-lg": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "label-md": ["14px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "headline-md": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "label-sm": ["12px", { lineHeight: "14px", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-lg-mobile": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "body-sm": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }]
      }
    }
  }
};
