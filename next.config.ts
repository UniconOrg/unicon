import createNextIntlPlugin from 'next-intl/plugin';

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    poweredByHeader: false,
    // output: 'export', // this make a static export of the website
    output: "standalone", // Esto es muy útil para despliegues en Docker o entornos serverless
    images: {
        formats: ['image/webp', 'image/avif'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        remotePatterns: []
    },
    // trailingSlash: true, // Mejora la navegación de enlaces internos para export estático
    reactStrictMode: true, // Asegura que tu código sea más robusto
    experimental: {
        scrollRestoration: true // Mejora la experiencia de usuario al navegar por páginas largas
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
