/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "coolgray-10": "var(--coolgray-10)",
                "coolgray-100": "var(--coolgray-100)",
                "coolgray-30": "var(--coolgray-30)",
                "coolgray-60": "var(--coolgray-60)",
                "coolgray-90": "var(--coolgray-90)",
                defaultwhite: "var(--defaultwhite)",
                "GLORIOUS-blue-100": "var(--GLORIOUS-blue-100)",
                "GLORIOUS-blue-900": "var(--GLORIOUS-blue-900)",
                "GLORIOUS-error-100": "var(--GLORIOUS-error-100)",
                "GLORIOUS-error-200": "var(--GLORIOUS-error-200)",
                "GLORIOUS-logo-brand-primary": "var(--GLORIOUS-logo-brand-primary)",
                "GLORIOUS-logo-brand-secondary": "var(--GLORIOUS-logo-brand-secondary)",
                "GLORIOUS-logo-brand-stars": "var(--GLORIOUS-logo-brand-stars)",
                "GLORIOUS-neutral-100": "var(--GLORIOUS-neutral-100)",
                "GLORIOUS-neutral-200": "var(--GLORIOUS-neutral-200)",
                "GLORIOUS-neutral-300": "var(--GLORIOUS-neutral-300)",
                "GLORIOUS-neutral-400": "var(--GLORIOUS-neutral-400)",
                "GLORIOUS-neutral-500": "var(--GLORIOUS-neutral-500)",
                "GLORIOUS-neutral-700": "var(--GLORIOUS-neutral-700)",
                "GLORIOUS-neutral-800": "var(--GLORIOUS-neutral-800)",
                "GLORIOUS-neutral-900": "var(--GLORIOUS-neutral-900)",
                "GLORIOUS-neutral-950": "var(--GLORIOUS-neutral-950)",
                "GLORIOUS-neutral-back": "var(--GLORIOUS-neutral-back)",
                "GLORIOUS-neutral-white": "var(--GLORIOUS-neutral-white)",
                "GLORIOUS-ui-section-bg": "var(--GLORIOUS-ui-section-bg)",
                "m3-schemes-error": "var(--m3-schemes-error)",
                "m3-schemes-on-error": "var(--m3-schemes-on-error)",
                "m3-schemes-on-primary": "var(--m3-schemes-on-primary)",
                "m3-schemes-on-primary-container":
                    "var(--m3-schemes-on-primary-container)",
                "m3-schemes-on-secondary": "var(--m3-schemes-on-secondary)",
                "m3-schemes-on-secondary-container":
                    "var(--m3-schemes-on-secondary-container)",
                "m3-schemes-on-surface": "var(--m3-schemes-on-surface)",
                "m3-schemes-on-surface-variant": "var(--m3-schemes-on-surface-variant)",
                "m3-schemes-outline": "var(--m3-schemes-outline)",
                "m3-schemes-outline-variant": "var(--m3-schemes-outline-variant)",
                "m3-schemes-primary": "var(--m3-schemes-primary)",
                "m3-schemes-primary-container": "var(--m3-schemes-primary-container)",
                "m3-schemes-secondary-container":
                    "var(--m3-schemes-secondary-container)",
                "m3-schemes-surface": "var(--m3-schemes-surface)",
                "m3-schemes-surface-container-highest":
                    "var(--m3-schemes-surface-container-highest)",
                "m3-state-layers-error-opacity-08":
                    "var(--m3-state-layers-error-opacity-08)",
                "m3-state-layers-error-opacity-12":
                    "var(--m3-state-layers-error-opacity-12)",
                "m3-state-layers-on-secondary-container-opacity-08":
                    "var(--m3-state-layers-on-secondary-container-opacity-08)",
                "m3-state-layers-on-secondary-container-opacity-12":
                    "var(--m3-state-layers-on-secondary-container-opacity-12)",
                "m3-state-layers-on-secondary-container-opacity-16":
                    "var(--m3-state-layers-on-secondary-container-opacity-16)",
                "m3-state-layers-on-surface-opacity-08":
                    "var(--m3-state-layers-on-surface-opacity-08)",
                "m3-state-layers-on-surface-opacity-12":
                    "var(--m3-state-layers-on-surface-opacity-12)",
                "m3-state-layers-on-surface-opacity-16":
                    "var(--m3-state-layers-on-surface-opacity-16)",
                "m3-state-layers-on-surface-variant-opacity-08":
                    "var(--m3-state-layers-on-surface-variant-opacity-08)",
                "m3-state-layers-on-surface-variant-opacity-12":
                    "var(--m3-state-layers-on-surface-variant-opacity-12)",
                "m3-state-layers-primary-opacity-08":
                    "var(--m3-state-layers-primary-opacity-08)",
                "m3-state-layers-primary-opacity-12":
                    "var(--m3-state-layers-primary-opacity-12)",
                "m3-state-layers-surface-variant-opacity-12":
                    "var(--m3-state-layers-surface-variant-opacity-12)",
            },
        },
    },
    plugins: [],
};