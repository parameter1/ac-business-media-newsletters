const brands = require('./brands');
const emailX = require('./email-x');
module.exports = {
  emailX,
  dss: {
    socialMediaLinks: [
      {
        provider: 'facebook',
        href: 'https://www.facebook.com/fordsspros',
        title: 'Follow us on Facebook',
      },
      {
        provider: 'twitter',
        href: 'https://twitter.com/fordsspros',
        title: 'Follow us on Twitter',
      },
      {
        provider: 'linkedin',
        href: 'https://www.linkedin.com/company/fordsspros/',
        title: 'Follow us on LinkedIn',
      },
    ],
  },
};
