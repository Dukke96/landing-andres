/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.andres-duque.com/',
  generateRobotsTxt: true, // (optional)
  lastmod: new Date().toISOString(),
  changefreq: 'weekly',
  additionalSitemaps: [
    'https://www.andres-duque.com/es',
    'https://www.andres-duque.com/en',
    'http://andres-duque.com/',
    'https://andres-duque.com/',
    'https://www.andres-duque.com/',
    'http://www.andres-duque.com/',
  ],
  // ...other options
};
