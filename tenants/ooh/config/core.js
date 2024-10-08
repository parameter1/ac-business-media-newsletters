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
  'industry-news': {
    ...brands.oem,
    nameFirst: 'Industry',
    nameLast: 'News',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM.png',
    attrs: {
      height: 65,
      width: 130,
    },
    primaryColor: '#ed1b24',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'technology-news-tracker': {
    ...brands.oem,
    nameFirst: 'Technology News',
    nameLast: 'Tracker',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_Logo_BW.png',
    attrs: {
      height: 65,
      width: 200,
    },
    primaryColor: '#03c0d4',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'economic-market-outlook': {
    ...brands.oem,
    nameFirst: 'Equipment Market',
    nameLast: 'Outlook',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_Logo_BW.png',
    attrs: {
      height: 65,
      width: 200,
    },
    primaryColor: '#ed1d25',
    editor: 'Lori Ditoro',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'in-the-cab': {
    ...brands.oem,
    nameFirst: 'In the',
    nameLast: 'Cab',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_Logo_BW.png',
    attrs: {
      height: 65,
      width: 200,
    },
    primaryColor: '#47a255',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'the-electric-age': {
    ...brands.oem,
    nameFirst: 'The Electric',
    nameLast: 'Age',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_Logo_BW.png',
    attrs: {
      height: 65,
      width: 200,
    },
    primaryColor: '#6aba0b',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'engine-revolutions': {
    ...brands.oem,
    nameFirst: 'Engine',
    nameLast: 'Revolutions',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_Logo_BW.png',
    attrs: {
      height: 65,
      width: 200,
    },
    primaryColor: '#a5b82a',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'drivetrain-technology-update': {
    ...brands.oem,
    nameFirst: 'Drivetrain Technology',
    nameLast: 'Update',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_Logo_BW.png',
    attrs: {
      height: 65,
      width: 200,
    },
    primaryColor: '#f2a300',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'efficient-design-manufacturing': {
    ...brands.oem,
    nameFirst: 'Efficient Design',
    nameLast: '& Manufacturing',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_Logo_BW.png',
    attrs: {
      height: 65,
      width: 200,
    },
    primaryColor: '#ed1c21',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'fluid-power-progress': {
    ...brands.oem,
    nameFirst: 'Fluid Power',
    nameLast: 'Progress',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_Logo_BW.png',
    attrs: {
      height: 65,
      width: 200,
    },
    primaryColor: '#126baf',
    editor: 'Kathy Wells',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Kathy-Wells-2019.png',
  },
  'show-report': {
    ...brands.oem,
    name: 'Show Report',
    primaryColor: '#2783c2',
    headerLogoSrc: '/files/base/acbm/ooh/image/static/logo/OEM_Logo_BW.png',
    attrs: {
      height: 95,
      width: 250,
    },
    editor: 'Lori Ditoro',
    editorTitle: 'Editor',
    editorImage: '/files/base/acbm/ooh/image/static/Lori_Ditoro.png',
  },
  'oem-product-showcase': {
    ...brands.oem,
    name: 'OEM Product Showcase',
    tagline: 'New products and systems for heavy-duty equipment designs',
    headerImgLinkUrl: 'https://www.oemoffhighway.com/',
    headerLogoSrcLeft: '/files/base/acbm/ooh/image/static/42280_OEM[left].jpg',
    headerLogoSrcRight: '/files/base/acbm/ooh/image/static/42280_OEM[right].jpg',
    primaryColor: '#000000',
  },
};
