const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://acbm.serve.email-x.parameter1.com');

config
  .setAdUnits('headline-news', [
    {
      name: 'banner-1',
      id: '61269385d9e8784033015a79',
      width: 500,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '6126939a984d45b075bc2d4d',
      width: 500,
      height: 100,
    },
  ]);
module.exports = config;
