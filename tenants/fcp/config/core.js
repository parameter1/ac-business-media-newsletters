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
  // supportEmail: 'support@forconstructionpros.com',
  // 'asphalt-contractor-psc': {
  //   name: 'TBD',
  //   ...brands.acon,
  // },
  'blacktop-update': {
    name: 'Blacktop Update',
    description: 'The latest news about paving, sweeing, striping and repairing pavements',
    ...brands.pavementMagazine,
  },
  'breaking-ground': {
    name: 'Breaking Ground',
    description: 'The latest equipment, business and fleet management tips to improve profitability',
    ...brands.equipmentToday,
  },
  'construction-technology': {
    primaryColor: '#5DB2D7',
    name: 'Construction Technology',
    description: 'New ideas and opportunities to consider implementing in your business',
    ...brands.fcp,
  },
  'construction-workforce-management': {
    primaryColor: '#000000',
    name: 'Construction Workforce Mangagement',
    description: 'Addressing key topics and critical issues centered around labor',
    ...brands.fcp,
  },
  'construction-zone-safety': {
    primaryColor: '#F04F23',
    name: 'Construction Zone Safety',
    description: 'Providing safety news, trends and insight for construction industry professionals',
    ...brands.fcp,
  },
  'crane-connection': {
    primaryColor: '#e62725',
    name: 'Crane Connection',
    description: 'The Inside Scoop on the Crane Market',
    ...brands.rentalMagazine,
  },
  'headline-news': {
    primaryColor: '#f26522',
    name: 'Headline News',
    description: 'Insights, tips and news impacting the construction industry',
    ...brands.fcp,
  },
  'in-the-mix': {
    name: 'In the Mix',
    description: 'Concrete industry topics that affect your business',
    ...brands.concreteContractor,
  },
  // eslint-disable-next-line quote-props
  'ipaf': {
    primaryColor: '#fdf21c',
    name: 'IPAF',
    description: 'News and updates on IPAF and the left equipment industry',
    ...brands.fcp,
  },
  'lube-report': {
    primaryColor: '#0051FA',
    name: 'Lube Report',
    description: 'Best uses of oils, lubricants and greases for construction fleet maintenance',
    ...brands.fcp,
  },
  'modern-fleet-management': {
    primaryColor: '#871937',
    name: 'Modern Fleet Management',
    description: 'Best practices, strategy and news to improve your fleet',
    ...brands.fcp,
  },
  'new-machine-solutions': {
    primaryColor: '#f87526',
    name: 'New Machine Solutions',
    description: 'The newest products and equipment for the construction market',
    ...brands.fcp,
  },
  'openings-news-views': {
    primaryColor: '#004f75',
    name: 'Openings News & Views',
    description: 'Exclusive insight into the most impactful news and trends shaping the non-residential door and hardware industry',
    ...brands.sso,
  },
  'power-rental': {
    primaryColor: '#fc501c',
    name: 'Power Rental',
    description: 'Product information and industry insight for the power rental equipment industry',
    ...brands.rentalMagazine,
  },
  'rental-market-watch': {
    primaryColor: '#bb2b15',
    name: 'Rental Market Watch',
    description: 'Providing economic snapshots and industry trends to equipment rental professionals',
    ...brands.rentalMagazine,
  },
  'rental-watch': {
    primaryColor: '#e62725',
    name: 'Rental Watch',
    description: 'Providing equipment rental professionals with the latest industry news, trends and insight',
    ...brands.rentalMagazine,
  },
  'rental-weekly-recap': {
    primaryColor: '#e62725',
    name: 'Rental Weekly Recap',
    description: 'Providing eqipment renatal professionals with the latest industry news, trends and insight',
    ...brands.rentalMagazine,
  },
  'road-building-update': {
    name: 'Road Building Update',
    description: 'Insight into news and events specific to the highway construction community',
    ...brands.asphaltContractor,
  },
  'show-report-conexpo': {
    primaryColor: '#2783c2',
    name: 'Show Report ConExpo',
    description: 'News and products from the recent construction trade show',
    ...brands.fcp,
  },
  'show-report': {
    primaryColor: '#2783c2',
    name: 'Show Report',
    description: 'News and insights from World of Concrete',
    ...brands.fcp,
  },
  'the-contractors-best-friend-rewind': {
    primaryColor: '#1ECC9D',
    name: 'The Contractors Best Friend Rewind',
    description: 'Your personal resouce to improve management and business success',
    ...brands.fcp,
  },
  'the-contractors-best-friend': {
    primaryColor: '#108BC4',
    name: 'The Contractors Best Friend',
    description: 'Your personal resource to improve management and business success',
    ...brands.fcp,
  },
  'truck-report': {
    primaryColor: '#ffa200',
    name: 'Truck Report',
    description: 'The latest truck innovations, product insights, selection and application tips',
    ...brands.fcp,
  },
  dss: {
    socialMediaLinks: [
      {
        provider: 'facebook',
        href: 'https://www.facebook.com/fordsspros',
        title: 'Follow us on Facebook',
      },
      {
        provider: 'twitter',
        href: 'https://twitter.com/fordsspros',
        title: 'Follow us on Twitter',
      },
      {
        provider: 'linkedin',
        href: 'https://www.linkedin.com/company/fordsspros/',
        title: 'Follow us on LinkedIn',
      },
    ],
  },
};
