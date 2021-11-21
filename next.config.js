module.exports = {
  images: {
    domains: ["localhost:3001"],
  },
  reactStrictMode: true,
  env: {
    URL_BACKEND_LOCAL: "http://localhost:3001",
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
};
