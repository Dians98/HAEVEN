import type { NextConfig } from "next";

// Site statique (OVH en FTP) : pas de Server Actions, proxy, redirections ni optimisation d'images à la demande.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
