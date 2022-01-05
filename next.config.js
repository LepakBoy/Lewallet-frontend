module.exports = {
  images: {
    domains: ["localhost:3001"],
  },
  reactStrictMode: true,
  env: {
    URL_BACKEND_LOCAL: "https://zwalet.herokuapp.com",
    // URL_BACKEND_LOCAL: "http://localhost:3001",
    URL_BACKEND: "https://jsonplaceholder.typicode.com/",
  },
  async rewrites() {
    return [
      {
        source: "/profile", //path sesudah diubah
        destination: "/profile/profile", //path sebelum diubah
      },
    ];
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
