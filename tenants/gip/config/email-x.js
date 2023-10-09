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
  ])
  .setAdUnits('the-pro-report', [
    {
      name: 'banner-1',
      id: '5c59a35e465d19b462ab8411',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '5dfabda5a94a69b967b3f20a',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('lawn-care-report', [
    {
      name: 'banner-1',
      id: '5f7f47099a6ce70078238fa3',
      width: 600,
      height: 100,
    },
  ])
  .setAdUnits('show-report', [
    {
      name: 'banner-1',
      id: '5c59a4855a66db2feed47963',
      width: 600,
      height: 100,
    },
    {
      name: 'banner-2',
      id: '615b1a8665f06a0c83d8c1a4',
      width: 600,
      height: 100,
    },
  ]);
module.exports = config;
