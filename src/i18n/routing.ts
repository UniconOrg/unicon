import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: ['es', 'en'],

    // Used when no locale matches
    defaultLocale: 'es',
    localePrefix: 'as-needed',

    // Register each route here
    pathnames: {
        '/': {
            en: '/'
        },
        // '/precios': {
        //     en: '/pricing'
        // },
        // '/generador-de-codigo-qr': {
        //     en: '/qr-code-generator'
        // },
        // '/generador-de-link-whatsapp': {
        //     en: '/whatsapp-link-generator'
        // },
        // '/privacidad': {
        //     en: '/privacy'
        // },
        // '/terminos': {
        //     en: '/terms'
        // },
    }
});