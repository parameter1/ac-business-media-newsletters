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
    nameFirst: 'Cold Chain',
    nameLast: 'Insights',
    primaryColor: '#1a93f9',
    headerLogoSrc: '/files/base/acbm/fl/image/static/logo/FLOG.png',
    attrs: {
      height: 60,
      width: 110,
    },
    editor: 'Marina Mayer',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fl/image/static/editors_marina.png',
  },
  'show-report': {
    ...brands.fl,
    name: 'Show Report',
    headerLogoSrc: '/files/base/acbm/fl/image/static/logo/FLOG.png',
    attrs: {
      height: 60,
      width: 110,
    },
    primaryColor: '#2783c2',
  },
  'global-supply-chain-insights': {
    ...brands.sdce,
    nameFirst: 'Global Supply',
    nameLast: 'Chain Insights',
    headerLogoSrc: '/files/base/acbm/sdce/image/static/logo/SDCE.png',
    attrs: {
      height: 90,
      width: 150,
    },
    primaryColor: '#e50102',
    editor: 'Marina Mayer',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fl/image/static/editors_marina.png',
  },
  'show-report-sdce': {
    ...brands.sdce,
    name: 'Show Report',
    headerLogoSrc: '/files/base/acbm/sdce/image/static/logo/SDCE.png',
    attrs: {
      height: 90,
      width: 150,
    },
    primaryColor: '#2783c2',
  },
};
