const brands = require('./brands');
const emailX = require('./email-x');
// const nativeX = require('./native-x');

module.exports = {
  emailX,
  // nativeX,
  dpm: {
    content: {
      enabled: true,
    },
    emailx: {
      enabled: true,
      useEmailxHref: true,
    },
  },
  'headline-news': {
    ...brands.sdce,
    name: 'Headline News',
    primaryColor: '#e50102',
    footerLogoSrc: '/files/base/acbm/sdce/image/static/logo/new-standard-footer-logo.png',
    editor: 'Brielle Jaekel',
    editorTitle: 'Managing Editor',
    editorImage: '/files/base/acbm/sdce/image/static/Brielle.png',
  },
  'show-report': {
    ...brands.sdce,
    name: 'Show Report',
    primaryColor: '#2783c2',
    footerLogoSrc: '/files/base/acbm/sdce/image/static/logo/new-standard-footer-logo-2783C2.png',
  },
};
