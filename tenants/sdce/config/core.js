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
  'headline-news': {
    ...brands.sdce,
    name: 'Headline News',
    primaryColor: '#e50102',
    editor: 'Brielle Jaekel',
    editorTitle: 'Associate Editor',
    editorImage: '/files/base/acbm/sdce/image/static/Brielle.png',
  },
};
