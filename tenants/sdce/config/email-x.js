const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://acbm.serve.email-x.parameter1.com');

config
  .setAdUnits('headline-news', [
    {
      name: 'banner-1',
      id: '5c51c2469bcbcf1119dc9816',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5c51c28e58ff6944ce55d111',
      width: 600,
      height: 100,
    },
  ]);
module.exports = config;
