/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Find the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for SVG imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: {
          not: [...(fileLoaderRule.resourceQuery?.not || []), /url/],
        }, // exclude if *.svg?url
        use: {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "preset-default",
                  params: {
                    overrides: {
                      removeViewBox: false, // Keep the viewBox attribute for proper scaling
                    },
                  },
                },
              ],
            },
          },
        },
      }
    );

    // Modify the file loader rule to ignore *.svg, as it's now handled above
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },

  // Additional Next.js configuration
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shalchian.vercel.app", // replace with your actual image domain
        pathname: "/**",
      },
      // You can add more patterns here if needed
    ],
  },
  env: {
    CUSTOM_ENV_VARIABLE: process.env.CUSTOM_ENV_VARIABLE,
  },
};

export default nextConfig;
