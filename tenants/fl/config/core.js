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
    editor: 'Marina Mayer',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/fl/image/static/editors_marina.png',
  },
};
