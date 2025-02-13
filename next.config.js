// const nextBuildId = require('next-build-id');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
   // generateBuildId: () => nextBuildId({ dir: __dirname, describe: true }),
   images: {
      // domains: [''],
   },

   async headers() {
      return [
         {
            source: '/(.*)', // Apply to all routes
            headers: [
               {
                  key: 'X-Frame-Options',
                  value: 'DENY', // Prevent embedding in iframe
               },
               {
                  key: 'Content-Security-Policy',
                  value: "frame-ancestors 'none';", // Disallow iframe embedding via CSP
               },
            ],
         },
      ];
   },

   webpack(config) {
      config.module.rules.push({
         test: /\.svg$/,
         use: [
            {
               loader: '@svgr/webpack',
               options: {
                  svgo: false,
               },
            },
         ],
      });
      return config;
   },
});
