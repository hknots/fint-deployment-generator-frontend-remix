import type {Config} from 'tailwindcss'

export default {
    content: ['./app/**/*.{js,jsx,ts,tsx}'], theme: {
        extend: {
            width: {
                '100': "400px"
            },
        },
    },
    plugins: [],
} satisfies Config

