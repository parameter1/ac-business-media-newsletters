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
    ...brands.gip,
    name: '',
    primaryColor: '',
    editor: '',
    editorTitle: '',
    editorImage: '',
  },
  'technology-report': {
    ...brands.gip,
    name: 'Technology Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-83B93A.png',
    primaryColor: '#83b93a',
    editor: 'Ryan Whisner',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/gip/image/static/editors-ryan.png',
  },
  'the-pro-report': {
    ...brands.gip,
    name: 'Pro Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-83B93A.png',
    primaryColor: '#83b93a',
    editor: 'Ryan Whisner',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/gip/image/static/editors-ryan.png',
  },
  'lawn-care-report': {
    ...brands.gip,
    name: 'Lawn Care',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-83B93A.png',
    primaryColor: '#83b93a',
    editor: 'Ryan Whisner',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/gip/image/static/editors-ryan.png',
  },
  'show-report': {
    ...brands.gip,
    name: 'Show Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-83B93A.png',
    primaryColor: '#83b93a',
    editor: 'Ryan Whisner',
    editorTitle: 'Editor-in-Chief',
    editorImage: '/files/base/acbm/gip/image/static/editors-ryan.png',
  },
};
