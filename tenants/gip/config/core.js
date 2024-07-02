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
    nameFirst: 'SnowPro',
    nameLast: 'Newsletter',
    brandName: 'SnowPro',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/SnowPro_Logo_horizontal-color.png',
    headerImgLinkUrl: 'https://www.greenindustrypros.com/snowpro',
    attrs: {
      height: 48,
      width: 125,
    },
    primaryColor: '#7ec0ea',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'technology-report': {
    ...brands.gip,
    nameFirst: 'Technology',
    nameLast: 'Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/GIP.png',
    attrs: {
      height: 75,
      width: 125,
    },
    primaryColor: '#83b93a',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'the-pro-report': {
    ...brands.gip,
    nameFirst: 'Pro',
    nameLast: 'Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/GIP.png',
    attrs: {
      height: 75,
      width: 125,
    },
    primaryColor: '#83b93a',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'lawn-care-report': {
    ...brands.gip,
    nameFirst: 'Lawn Care',
    nameLast: 'Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/GIP.png',
    attrs: {
      height: 75,
      width: 125,
    },
    primaryColor: '#83b93a',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'show-report': {
    ...brands.gip,
    nameFirst: 'Show',
    nameLast: 'Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/GIP.png',
    attrs: {
      height: 75,
      width: 125,
    },
    primaryColor: '#83b93a',
    editor: 'Jon Minnick',
    editorTitle: 'Group Content Director',
    editorImage: '/files/base/acbm/gip/image/static/Jon_Minnick.png',
  },
  'snowpro-psc': {
    ...brands.gip,
    tagline: 'Check out the latest products to get you through winter',
    name: 'SnowPro Product Showcase',
    headerImgLinkUrl: 'https://www.greenindustrypros.com/snowpro',
    headerLogoSrcLeft: '/files/base/acbm/gip/image/static/snow[left].jpg',
    headerLogoSrcRight: '/files/base/acbm/gip/image/static/snow[right].jpg',
    primaryColor: '#0d77e6',
  },
  psc: {
    ...brands.gip,
    tagline: 'Check out the latest products to keep the grass greener on the other side',
    name: 'GIP Product Showcase',
    headerImgLinkUrl: 'https://www.greenindustrypros.com',
    headerLogoSrcLeft: '/files/base/acbm/gip/image/static/gip[left].jpg',
    headerLogoSrcRight: '/files/base/acbm/gip/image/static/gip[right].jpg',
    primaryColor: '#006600',
  },
};
