const brands = require('./brands');
const emailX = require('./email-x');
// const nativeX = require('./native-x');

module.exports = {
  emailX,
  // nativeX,
  dpm: {
    emailx: {
      enabled: true,
    },
  },
  'asphalt-contractor-psc': {
    name: 'TBD',
    ...brands.acon,
  },
  'truck-report': {
    name: 'Truck Report',
    description: 'The latest truck innovations, product insights, selection and application tips',
    ...brands.fcp,
  },
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
