/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                'ac-primary': 'var(--ac-primary)',
                'ac-primary-light': 'var(--ac-primary-light)',
                'ac-primary-dark': 'var(--ac-primary-dark)',
                'ac-cream': 'var(--ac-cream)',
                'ac-cream-dark': 'var(--ac-cream-dark)',
                'ac-sand': 'var(--ac-sand)',
                'ac-wood': 'var(--ac-wood)',
                'ac-wood-dark': 'var(--ac-wood-dark)',
                'ac-text': 'var(--ac-text)',
                'ac-green': 'var(--ac-green)',
                'ac-green-light': 'var(--ac-green-light)',
                'ac-pink': 'var(--ac-pink)',
                'ac-yellow': 'var(--ac-yellow)',
                'ac-orange': 'var(--ac-orange)',
                'ac-brown': 'var(--ac-brown)',
            },
            borderRadius: {
                'ac-sm': 'var(--ac-radius-sm)',
                'ac-md': 'var(--ac-radius-md)',
                'ac-lg': 'var(--ac-radius-lg)',
                'ac-xl': 'var(--ac-radius-xl)',
            },
            boxShadow: {
                'ac': 'var(--ac-shadow)',
                'ac-hover': 'var(--ac-shadow-hover)',
                'ac-inset': 'var(--ac-shadow-inset)',
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: [
            {
                nord: {
                    "primary": "#19c8b9",
                    "primary-content": "#ffffff",
                    "secondary": "#8bc34a",
                    "secondary-content": "#ffffff",
                    "accent": "#f48fb1",
                    "accent-content": "#5c4f42",
                    "neutral": "#8d6e63",
                    "neutral-content": "#ffffff",
                    "base-100": "#faf6e9",
                    "base-200": "#f0e8d4",
                    "base-300": "#e8dfc6",
                    "base-content": "#827157",
                    "info": "#19c8b9",
                    "success": "#8bc34a",
                    "warning": "#ffb74d",
                    "error": "#ef5350",
                },
            },
        ],
        darkTheme: false,
        logs: false,
    },
};
