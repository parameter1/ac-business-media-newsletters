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
  'todays-news': {
    ...brands.fl,
    name: "Today's News",
    primaryColor: '#1a93f9',
    footerLogoSrc: '/files/base/acbm/fl/image/static/logo/new-standard-footer-logo-1a93f9.png',
    editor: 'Marina Mayer',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fl/image/static/editors_marina.png',
  },
  'show-report': {
    ...brands.fl,
    name: 'Show Report',
    primaryColor: '#2783c2',
    footerLogoSrc: '/files/base/acbm/fl/image/static/logo/new-standard-footer-logo-2783C2.png',
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
  'show-report-sdce': {
    ...brands.sdce,
    name: 'Show Report (SDCE)',
    primaryColor: '#2783c2',
    footerLogoSrc: '/files/base/acbm/fl/image/static/logo/new-standard-footer-logo-2783C2.png',
  },
};
