import type { NextConfig } from 'next';

import './src/lib/env/client';
import './src/lib/env/server';

import { redirects } from './redirects';

/**
 * CSPs that we're not adding (as it can change from project to project):
 * frame-src, connect-src, script-src, child-src, style-src, worker-src, font-src, media-src, and img-src
 */
const ContentSecurityPolicy = `
  object-src 'none';
  base-uri 'self';
  frame-ancestors 'self';
  manifest-src 'self';
  report-to default;
`;

// For more information, check https://nextjs.org/docs/app/api-reference/config/next-config-js/headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer-when-downgrade',
  },
  {
    key: 'Permissions-Policy',
    value: `accelerometer=(), camera=(), gyroscope=(), microphone=(), usb=()`,
  },
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return redirects;
  },
  experimental: {
    // Enable caching for next build. FileSystem caching is enabled by default for development
    turbopackFileSystemCacheForBuild: true,
  },
  reactStrictMode: true,
  reactCompiler: true,
};

export default nextConfig;
