import type {Config} from 'tailwindcss'

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'], theme: {
        extend: {
            height: {
                'header': '96px'
            },
            width: {
                'aside': '400px'
            },
            ml: {
                'aside': '400px'
            },
            pl: {
                'aside': '400px'
            },
        },
    },
    plugins: [],
} satisfies Config

