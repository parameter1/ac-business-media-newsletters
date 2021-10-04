const EmailXConfiguration = require('@parameter1/base-cms-marko-newsletters-email-x/config');

const config = new EmailXConfiguration('https://acbm.serve.email-x.parameter1.com');

config
  .setAdUnits('snowpro', [
    {
      name: 'banner-1',
      id: '5f4f9270496c5762f9d20672',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5c59a417465d19615bab84a5',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-3',
      id: '5e3d906e58868246feaa8b0a',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('technology-report', [
    {
      name: 'banner-1',
      id: '5fa09dba9a6ce722e1241f5a',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '615b0f3ca650265e38f7a58e',
      width: 600,
      height: 100,
    },
  ]);
module.exports = config;
