const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Add your site URL here (replace with your actual domain when you deploy)
const siteUrl = 'https://slv-enterprises.web.app'; // Update this with your actual domain

const sitemap = new SitemapStream({ hostname: siteUrl });

// Main pages/sections of your SLV Enterprises website
sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/#about', changefreq: 'weekly', priority: 0.9 });
sitemap.write({ url: '/#founder', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/#services', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/#brands', changefreq: 'weekly', priority: 0.9 });
sitemap.write({ url: '/#gallery', changefreq: 'weekly', priority: 0.7 });
sitemap.write({ url: '/#contact', changefreq: 'weekly', priority: 0.8 });
sitemap.write({ url: '/#testimonials', changefreq: 'weekly', priority: 0.7 });
sitemap.write({ url: '/#timeline', changefreq: 'monthly', priority: 0.6 });

// Add more specific URLs if you have additional pages
// sitemap.write({ url: '/privacy-policy', changefreq: 'monthly', priority: 0.3 });
// sitemap.write({ url: '/terms-of-service', changefreq: 'monthly', priority: 0.3 });

sitemap.end();

streamToPromise(sitemap).then((sm) => {
  createWriteStream('./public/sitemap.xml').write(sm.toString());
  console.log('✅ Sitemap generated successfully at public/sitemap.xml');
  console.log('📍 Sitemap will be available at: ' + siteUrl + '/sitemap.xml');
  console.log('🚀 Remember to update the siteUrl variable with your actual domain!');
}).catch((error) => {
  console.error('❌ Error generating sitemap:', error);
});
