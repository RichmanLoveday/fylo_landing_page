/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                darkBlue: 'hsl(217, 28%, 15%)',
                darkBlue1: 'hsl(218, 28%, 13%)',
                darkBlue2: 'hsl(216, 53%, 9%)',
                darkBlue3: 'hsl(219, 30%, 18%)',
                accentCyan: 'hsl(179, 68%, 64%)',
                accentBlue: 'hsl(198, 68%, 50%)',
                lightRed: 'hsl(0, 100%, 63%)'
            },

            fontFamily: {
                sans: [
                    'Raleway', 'sans-serif'
                ],
                opensans: ['Open Sans', 'sans-serif']
            },

            backgroundImage: {
                'logo-dark-mode': "url('../images/logo-dark-mode.svg')",
                'logo-light-mode': "url('../images/logo-light-mode.svg')",
                'curvy-dark-mode': "url('../images/bg-curvy-dark-mode.svg')",
                'curvy-light-mode': "url('../images/bg-curvy-light-mode.svg')"
            }

        }
    },

    variants: {
        extends: {
            backgroundImage: ['dark']
        }
    },

    plugins: []
}
