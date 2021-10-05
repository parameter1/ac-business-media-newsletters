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
  '': {
    ...brands.flog,
    name: '',
    primaryColor: '',
    editor: '',
    editorTitle: '',
    editorImage: '',
  },
};
