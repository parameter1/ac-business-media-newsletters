// const brands = require('./brands');
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
    name: 'Headline News',
    primaryColor: '#e65225',
    ...brands.sdce,
  },
};
