const EmailXConfiguration = require('@base-cms/marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://acbm.serve.email-x.parameter1.com');

config
  .setAdUnits('openings-news-views', [
    {
      name: 'banner-1',
      id: '5f4802b04c15d921867b2da7',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('openings-news-views', [
    {
      name: 'banner-2',
      id: '5f4802be4c15d93bce7b2dba',
      width: 600,
      height: 100,
    },
  ]);

module.exports = config;
