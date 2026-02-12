import { Inter, Poppins } from 'next/font/google';

// Utilizada para el sitio web
export const inter = Inter({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
})

// Utilizada para titulos
export const poppins = Poppins({
    weight: ['700'],
    subsets: ['latin'],
    display: 'swap',
    fallback: ['system-ui', 'sans-serif'],
});

// Utiliza este font para el titulo de Konectus
// Agrega estas clases: '${roboto.className} tracking-tight'
// export const roboto = Roboto({
//     weight: "800",
//     subsets: ['latin'],
//     fallback: ['system-ui', 'sans-serif'],
// });