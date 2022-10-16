/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout')

const withTM = require('next-transpile-modules')([])

const nextConfig = withTM({
    reactStrictMode: true,
    swcMinify: true,
    compiler: { styledComponents: true, removeConsole: true },
    eslint: {
        ignoreDuringBuilds: true,
    },
    experimental: { esmExternals: false },
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
})

module.exports = withInterceptStdout(
    {
        ...nextConfig,
    },
    (text) =>
        text.includes('Duplicate atom key') ||
        text.includes('non-boolean') ||
        text.includes('Expected server HTML') ||
        text.includes('ECONNREFUSED')
            ? ''
            : text
)
