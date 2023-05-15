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
  'cold-chain-insights': {
    ...brands.fl,
    name: 'Cold Chain Insights',
    primaryColor: '#1a93f9',
    editor: 'Marina Mayer',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fl/image/static/editors_marina.png',
  },
  'show-report': {
    ...brands.fl,
    name: 'Show Report',
    primaryColor: '#2783c2',
  },
  'global-supply-chain-insights': {
    ...brands.sdce,
    name: 'Global Supply Chain Insights',
    headerLogoSrc: '/files/base/acbm/sdce/image/static/logo/black_site_logo.png',
    primaryColor: '#e50102',
    editor: 'Marina Mayer',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fl/image/static/editors_marina.png',
  },
  'show-report-sdce': {
    ...brands.sdce,
    name: 'Show Report',
    primaryColor: '#2783c2',
  },
};
