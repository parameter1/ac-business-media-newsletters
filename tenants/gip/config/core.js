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
  snowpro: {
    ...brands.gip,
    name: 'SnowPro Newsletter',
    brandName: 'SnowPro',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/snow-pro-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-7EC0EA.png',
    primaryColor: '#7ec0ea',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'technology-report': {
    ...brands.gip,
    name: 'Technology Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-83B93A.png',
    primaryColor: '#83b93a',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'the-pro-report': {
    ...brands.gip,
    name: 'Pro Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-83B93A.png',
    primaryColor: '#83b93a',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'lawn-care-report': {
    ...brands.gip,
    name: 'Lawn Care',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-83B93A.png',
    primaryColor: '#83b93a',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'show-report': {
    ...brands.gip,
    name: 'Show Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    footerLogoSrc: '/files/base/acbm/gip/image/static/logo/new-standard-footer-logo-83B93A.png',
    primaryColor: '#83b93a',
    editor: 'Jon Minnick',
    editorTitle: 'Group Content Director',
    editorImage: '/files/base/acbm/gip/image/static/Jon_Minnick.png',
  },
};
