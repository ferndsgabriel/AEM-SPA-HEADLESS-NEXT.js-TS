/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Headers CORS
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-Requested-With, Content-Type, Authorization'
          }
        ]
      }
    ];
  },

  // Rewrites (proxy) para o AEM
  async rewrites() {
    return [
      {
        source: '/content/:path*',
        destination: 'http://localhost:4502/content/:path*',
      },
      {
        source: '/etc.clientlibs/:path*',
        destination: 'http://localhost:4502/etc.clientlibs/:path*',
      },
      {
        source: '/apps/:path*',
        destination: 'http://localhost:4502/apps/:path*',
      },
      // proxy next assets (including HMR websocket) back to local dev server
      {
        source: '/_next/:path*',
        destination: 'http://localhost:4502/_next/:path*',
      }
    ];
  },

  // Imagens
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4502',
        pathname: '/content/**',
      },
    ],
  },

  // Webpack config (opcional)
  webpack: (config, { isServer }) => {
    // Se precisar de alguma configuração específica
    return config;
  },
};

module.exports = nextConfig;