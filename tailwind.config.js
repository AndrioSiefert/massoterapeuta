module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                titulo: ["'Abril Fatface'", 'cursive'], // Adicione sua fonte aqui
                subtitulo: ["'Barlow'", 'sans-serif'], // Adicione sua fonte aqui
            },
            colors: {
                medical: {
                    green: '#4CAF50', // Verde calmo, frequentemente associado à saúde e regeneração
                    blue: '#0077B6', // Azul que passa segurança e confiança
                    white: '#FFFFFF', // Branco puro, para limpeza e esterilidade
                    gray: '#B0BEC5', // Cinza claro e neutro, para suavidade e modernidade
                    mancha: '#0123aa',
                },
            },
        },
    },
    plugins: [],
};
