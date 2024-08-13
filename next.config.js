module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://allo.ghost.io',
      },
      {
        source: '/:path*',
        destination: 'https://withallo.com/:path*',
      },
    ];
  },
};
