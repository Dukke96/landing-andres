/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.andres-duque.com/',
  generateRobotsTxt: true, // (optional)
  lastmod: new Date().toISOString(),
  changefreq: 'monthly',
  additionalSitemaps: [
    'https://www.andres-duque.com/es',
    'https://www.andres-duque.com/en',
    'http://andres-duque.com/',
    'https://andres-duque.com/',
    'https://www.andres-duque.com/',
    'http://www.andres-duque.com/',
  ],
  additionalPaths: async (config) => {
    const result = [];
    // all possible values
    result.push(
      {
        loc: '/es',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      },
      {
        loc: '/en',
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      }
    );

    // using transformation from the current configuration
    result.push(await config.transform(config));

    return result;
  },
  // ...other options
};
