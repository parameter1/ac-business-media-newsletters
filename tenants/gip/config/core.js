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
    primaryColor: '#7ec0ea',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'technology-report': {
    ...brands.gip,
    name: 'Technology Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    primaryColor: '#83b93a',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'the-pro-report': {
    ...brands.gip,
    name: 'Pro Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    primaryColor: '#83b93a',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'lawn-care-report': {
    ...brands.gip,
    name: 'Lawn Care',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    primaryColor: '#83b93a',
    editor: 'Sarah Webb',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/gip/image/static/Sarah_Webb_headshot.png',
  },
  'show-report': {
    ...brands.gip,
    name: 'Show Report',
    headerLogoSrc: '/files/base/acbm/gip/image/static/logo/gip-logo.png',
    primaryColor: '#83b93a',
    editor: 'Jon Minnick',
    editorTitle: 'Group Content Director',
    editorImage: '/files/base/acbm/gip/image/static/Jon_Minnick.png',
  },
  'snowpro-psc': {
    ...brands.gip,
    tagline: 'Check out the latest products to get you through winter',
    name: 'SnowPro Product Showcase',
    websiteSection: 'https://www.greenindustrypros.com/snowpro',
    headerLogoSrcLeft: '/files/base/acbm/gip/image/2018/09/snowpro_header1.5bacd64d7dbd4.png',
    headerLogoSrcRight: '/files/base/acbm/gip/image/static/snowpro_header.png',
    primaryColor: '#0d77e6',
  },
  psc: {
    ...brands.gip,
    tagline: 'Check out the latest products to keep the grass greener on the other side',
    name: 'GIP Product Showcase',
    websiteSection: 'https://www.greenindustrypros.com',
    headerLogoSrcLeft: '/files/base/acbm/gip/image/2019/10/psc_col1.5d9ddd51f3caa.png',
    headerLogoSrcRight: '/files/base/acbm/gip/image/2020/08/GIP_OG_PSCHeader.5f46b71d446ba.png',
    primaryColor: '#006600',
  },
};
