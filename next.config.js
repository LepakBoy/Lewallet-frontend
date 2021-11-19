module.exports = {
  reactStrictMode: true,
  env: {
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
