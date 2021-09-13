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
    primaryColor: '#e65225',
    editor: 'Marina Mayer',
    editorImage: '/files/base/acbm/sdce/image/static/editors_marina.png',
  },
};
