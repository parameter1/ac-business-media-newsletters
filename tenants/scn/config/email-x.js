const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://acbm.serve.email-x.parameter1.com');

config
  .setAdUnits('todays-news', [
    {
      name: 'banner-1',
      id: '5c59a2f5465d1901d2ab83a4',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5c59a3095a66db8279d4780f',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('show-report', [
    {
      name: 'banner-1',
      id: '61d49f9d01e4b3d5735d539b',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '61d49faf7c980280f467c776',
      width: 600,
      height: 100,
    },
  ]);
module.exports = config;
